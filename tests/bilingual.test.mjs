import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
    DEFAULT_LANGUAGE,
    LANGUAGE_STORAGE_KEY,
    SUPPORTED_LANGUAGES,
    TRANSLATIONS,
    applyLanguage,
    readLanguagePreference,
    resolveLanguage,
    writeLanguagePreference,
} from "../app.js";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const css = await readFile(new URL("../styles.css", import.meta.url), "utf8");

test("uses Traditional Chinese as the only default language", () => {
    assert.equal(DEFAULT_LANGUAGE, "zh-Hant");
    assert.equal(resolveLanguage("en"), "en");
    assert.equal(resolveLanguage("zh-Hant"), "zh-Hant");
    assert.equal(resolveLanguage("fr"), "zh-Hant");
    assert.deepEqual([...SUPPORTED_LANGUAGES], ["zh-Hant", "en"]);
});

test("keeps translation key sets identical", () => {
    const chineseKeys = Object.keys(TRANSLATIONS["zh-Hant"]).sort();
    const englishKeys = Object.keys(TRANSLATIONS.en).sort();
    assert.deepEqual(englishKeys, chineseKeys);
});

test("provides translations for every HTML key", () => {
    const htmlKeys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map((match) => match[1]);
    assert.ok(htmlKeys.length > 80);
    for (const key of new Set(htmlKeys)) {
        assert.ok(key in TRANSLATIONS["zh-Hant"], `Missing zh-Hant translation: ${key}`);
        assert.ok(key in TRANSLATIONS.en, `Missing English translation: ${key}`);
    }
});

test("stores a supported language and tolerates blocked storage", () => {
    const values = new Map();
    const storage = {
        getItem: (key) => values.get(key) ?? null,
        setItem: (key, value) => values.set(key, value),
    };
    writeLanguagePreference(storage, "en");
    assert.equal(values.get(LANGUAGE_STORAGE_KEY), "en");
    assert.equal(readLanguagePreference(storage), "en");

    const blockedStorage = {
        getItem: () => { throw new Error("blocked"); },
        setItem: () => { throw new Error("blocked"); },
    };
    assert.equal(readLanguagePreference(blockedStorage), "zh-Hant");
    assert.doesNotThrow(() => writeLanguagePreference(blockedStorage, "en"));
});

test("preserves privacy and the five approved destinations", () => {
    const destinations = [...html.matchAll(/<a[^>]+href="(https:[^"]+)"/g)]
        .map((match) => new URL(match[1]).hostname);
    assert.deepEqual(destinations, [
        "github.com",
        "www.linkedin.com",
        "www.credly.com",
        "www.youtube.com",
        "godis30300.github.io",
    ]);
    assert.doesNotMatch(html, /mailto:|tel:|生日|住址|電子郵件|電話/);
});

test("styles the language control for mobile, focus, and print", () => {
    assert.match(css, /\.language-switcher/);
    assert.match(css, /\.language-option\[aria-pressed="true"\]/);
    assert.match(css, /@media \(max-width: 48rem\)/);
    assert.match(css, /@media print/);
});

test("keeps a collapsible word boundary in all translated compound paragraphs", () => {
    const paragraphs = [...html.matchAll(
        /<p><strong data-i18n="([^"]+)">[^<]*<\/strong>([^<]*)<span data-i18n="([^"]+)">[^<]*<\/span><\/p>/g,
    )];
    assert.equal(paragraphs.length, 20);
    for (const [, labelKey, separator, proseKey] of paragraphs) {
        assert.match(separator, /^[\t\n\r ]+$/, `Missing whitespace before ${proseKey}`);
        const copiedText = `${TRANSLATIONS.en[labelKey]}${separator}${TRANSLATIONS.en[proseKey]}`
            .replace(/[\t\n\r ]+/g, " ");
        assert.ok(copiedText.startsWith(`${TRANSLATIONS.en[labelKey]} `), proseKey);
    }
});

test("leaves fallback text unchanged for inherited translation keys", () => {
    for (const language of SUPPORTED_LANGUAGES) {
        const inheritedElement = {
            dataset: { i18n: "toString" },
            textContent: "Keep this fallback text",
        };
        const translatedElement = { dataset: { i18n: "about.title" }, textContent: "Fallback" };
        const root = {
            documentElement: { lang: DEFAULT_LANGUAGE },
            querySelectorAll: (selector) => {
                if (selector === "[data-i18n]") {
                    return [inheritedElement, translatedElement];
                }
                assert.equal(selector, "[data-language]");
                return [];
            },
        };

        assert.equal(applyLanguage(root, language), language);
        assert.equal(inheritedElement.textContent, "Keep this fallback text");
        assert.equal(translatedElement.textContent, TRANSLATIONS[language]["about.title"]);
        assert.equal(root.documentElement.lang, language);
    }
});

test("identifies each language button for pronunciation without changing its visible label", () => {
    const buttons = [...html.matchAll(/<button\b([^>]*\bdata-language="([^"]+)"[^>]*)>([^<]*)<\/button>/g)];
    assert.equal(buttons.length, 2);
    const chineseButton = buttons.find(([, , language]) => language === "zh-Hant");
    const englishButton = buttons.find(([, , language]) => language === "en");
    assert.ok(chineseButton);
    assert.ok(englishButton);
    assert.match(chineseButton[1], /\blang="zh-Hant"/);
    assert.equal(chineseButton[3], "中文");
    assert.match(englishButton[1], /\blang="en"/);
    assert.match(englishButton[1], /\baria-label="English"/);
    assert.equal(englishButton[3], "EN");
});
