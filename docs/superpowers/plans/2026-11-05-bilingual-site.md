# Bilingual Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在現有 Brain Yang GitHub Pages 履歷加入預設繁體中文、可切換英文且記住偏好的完整雙語體驗。

**Architecture:** 中文保留在 `index.html` 作為無 JavaScript 的基準內容；每個可翻譯文字或屬性使用穩定 `data-i18n` 鍵。翻譯字典與純語言解析函式位於 `app.js`，同一模組負責套用文字、更新文件語言與控制按鈕狀態，同時維持既有手機選單與區段觀察器。

**Tech Stack:** HTML5、CSS、原生 JavaScript ES Modules、Node.js 內建測試、GitHub Pages

## Global Constraints

- 首次載入預設繁體中文，不依瀏覽器語言自動切換。
- 偏好鍵固定為 `brain-yang-language`。
- 支援語言固定為 `zh-Hant` 與 `en`。
- JavaScript 失效時必須保留完整繁體中文內容。
- 不新增聯絡資訊、追蹤程式、第三方服務或新外部連結。
- 保留現有五個公開連結與所有區段 ID。
- 沿用極簡白底視覺、既有 CSS 變數、48rem 斷點與鍵盤焦點樣式。
- JavaScript 使用四空格、雙引號、分號、嚴格相等與完整大括號。

---

## File Map

- Modify: `index.html` — 中文基準內容、翻譯鍵、語言切換器、可翻譯屬性。
- Modify: `app.js` — 翻譯字典、語言偏好、DOM 套用與既有導覽互動。
- Modify: `styles.css` — 語言切換器的桌面、手機、焦點與列印樣式。
- Create: `tests/bilingual.test.mjs` — 翻譯鍵、語言解析、儲存失敗與靜態隱私回歸。
- Create: `package.json` — 使用 Node.js 內建測試的單一驗證指令。

### Task 1: 建立失敗的雙語契約測試

**Files:**
- Create: `tests/bilingual.test.mjs`
- Create: `package.json`

**Interfaces:**
- Consumes: `index.html`、`app.js` 與 `styles.css`。
- Produces: 可由 `node --test tests/*.test.mjs` 執行的雙語與隱私契約。

- [ ] **Step 1: 建立測試指令**

建立 `package.json`：

```json
{
  "name": "brain-yang-portfolio",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "test": "node --test tests/*.test.mjs"
  },
  "engines": {
    "node": ">=20"
  }
}
```

- [ ] **Step 2: 建立雙語測試**

建立 `tests/bilingual.test.mjs`，讀取三個網站檔案並動態匯入 `app.js`：

```js
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
    DEFAULT_LANGUAGE,
    LANGUAGE_STORAGE_KEY,
    SUPPORTED_LANGUAGES,
    TRANSLATIONS,
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
```

- [ ] **Step 3: 執行測試確認目前失敗**

Run: `node --test tests/*.test.mjs`

Expected: FAIL，因 `app.js` 尚未匯出雙語介面，HTML 與 CSS 尚無語言控制器。

- [ ] **Step 4: 提交測試契約**

Run:

```bash
git add package.json tests/bilingual.test.mjs
git commit -m "test: define bilingual portfolio contract"
```

### Task 2: 加入翻譯鍵與語言切換器

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Task 1 的 `data-i18n` 測試契約。
- Produces: `[data-i18n]`、`[data-i18n-attr]`、`[data-language]` DOM 介面，供 Task 3 使用。

- [ ] **Step 1: 標記文件層級文字**

在 `<title>`、meta description、skip link 與 `nav` 加入鍵：

```html
<meta
  name="description"
  content="Brain Yang 的個人履歷與工程作品集，涵蓋全端開發、雲端架構、DevOps、資訊安全、AI 與 IoT。"
  data-i18n="meta.description"
  data-i18n-attr="content"
>
<title data-i18n="document.title">Brain Yang｜全端、雲端與資安工程師</title>
<a class="skip-link" href="#main" data-i18n="accessibility.skip">跳至主要內容</a>
<nav aria-label="主要導覽" data-i18n="navigation.label" data-i18n-attr="aria-label">
```

- [ ] **Step 2: 加入語言切換器**

在桌面導覽清單與選單按鈕之間加入：

```html
<div
  class="language-switcher"
  role="group"
  aria-label="選擇語言"
  data-i18n="language.label"
  data-i18n-attr="aria-label"
>
  <button type="button" class="language-option" data-language="zh-Hant" aria-pressed="true">中文</button>
  <span aria-hidden="true">/</span>
  <button type="button" class="language-option" data-language="en" aria-pressed="false">EN</button>
</div>
```

- [ ] **Step 3: 標記導覽與主要區段**

使用穩定鍵，不改變 href 或區段 ID：

```html
<li><a href="#about" data-i18n="navigation.about">關於</a></li>
<li><a href="#skills" data-i18n="navigation.skills">技能</a></li>
<li><a href="#projects" data-i18n="navigation.projects">作品</a></li>
<li><a href="#experience" data-i18n="navigation.experience">經歷</a></li>
<li><a href="#certifications" data-i18n="navigation.certifications">證照</a></li>
<li><a href="#education" data-i18n="navigation.education">學歷</a></li>
<li><a href="#public-links" data-i18n="navigation.links">公開連結</a></li>
```

桌面與手機導覽使用相同鍵。Hero 使用 `hero.role`、`hero.summary`、`hero.projectsCta`、`hero.experienceCta`；區段標題使用 `about.title`、`skills.title`、`projects.title`、`experience.title`、`certifications.title`、`education.title`、`links.title`。

- [ ] **Step 4: 標記卡片與複合段落**

複合段落保留 `strong`，其餘文字包入 span：

```html
<p>
  <strong data-i18n="labels.practice">實務：</strong>
  <span data-i18n="skills.hardware.practice">執行資料中心伺服器故障檢測、零件更換與光纖佈線，安裝維護基礎設施設備。</span>
</p>
```

依相同方式完成七層能力、六個作品、六段經歷、四組證照、兩筆學歷、志工、比賽與 footer。日期中的「現在／進行中」分離為可翻譯 span；純數字日期、技術名稱、證照代碼與五個外部連結名稱保持原文。

- [ ] **Step 5: 執行測試確認仍因 JavaScript 契約失敗**

Run: `node --test tests/*.test.mjs`

Expected: FAIL 於 `app.js` 匯出或翻譯字典；隱私與 HTML 鍵數測試通過。

- [ ] **Step 6: 提交 HTML 語意介面**

Run:

```bash
git add index.html
git commit -m "feat: mark portfolio content for translation"
```

### Task 3: 實作語言引擎與完整英文文案

**Files:**
- Modify: `app.js`

**Interfaces:**
- Consumes: Task 2 的 `data-i18n`、`data-i18n-attr` 與 `data-language`。
- Produces: `DEFAULT_LANGUAGE`、`LANGUAGE_STORAGE_KEY`、`SUPPORTED_LANGUAGES`、`TRANSLATIONS`、`resolveLanguage(value)`、`readLanguagePreference(storage)`、`writeLanguagePreference(storage, language)` 與 `applyLanguage(root, language)`。

- [ ] **Step 1: 定義公開語言契約**

在 `app.js` 最前方加入：

```js
export const DEFAULT_LANGUAGE = "zh-Hant";
export const LANGUAGE_STORAGE_KEY = "brain-yang-language";
export const SUPPORTED_LANGUAGES = Object.freeze(["zh-Hant", "en"]);

export const resolveLanguage = (value) => {
    return SUPPORTED_LANGUAGES.includes(value) ? value : DEFAULT_LANGUAGE;
};

export const readLanguagePreference = (storage) => {
    try {
        return resolveLanguage(storage?.getItem(LANGUAGE_STORAGE_KEY));
    } catch {
        return DEFAULT_LANGUAGE;
    }
};

export const writeLanguagePreference = (storage, language) => {
    try {
        storage?.setItem(LANGUAGE_STORAGE_KEY, resolveLanguage(language));
    } catch {
        // Storage is optional; the in-page language state still works.
    }
};
```

- [ ] **Step 2: 建立對稱翻譯字典**

`TRANSLATIONS` 使用 `"zh-Hant"` 與 `en` 兩個物件，鍵集合完全一致。鍵依區段命名：

```js
export const TRANSLATIONS = Object.freeze({
    "zh-Hant": Object.freeze({
        "document.title": "Brain Yang｜全端、雲端與資安工程師",
        "meta.description": "Brain Yang 的個人履歷與工程作品集，涵蓋全端開發、雲端架構、DevOps、資訊安全、AI 與 IoT。",
        "language.label": "選擇語言",
        "navigation.label": "主要導覽",
        "navigation.about": "關於",
        "navigation.skills": "技能",
        "navigation.projects": "作品",
        "navigation.experience": "經歷",
        "navigation.certifications": "證照",
        "navigation.education": "學歷",
        "navigation.links": "公開連結",
        "hero.role": "從硬體到雲端，跨越系統、網路、資料庫與 AI 的全方位工程師",
        "labels.practice": "實務：",
        "labels.evidence": "佐證：",
        "labels.contribution": "個人貢獻：",
        "labels.features": "專案功能：",
        "status.present": "現在",
        "status.ongoing": "進行中",
        "footer": "Brain Yang · 個人履歷與作品集"
    }),
    en: Object.freeze({
        "document.title": "Brain Yang | Full-Stack, Cloud & Cybersecurity Engineer",
        "meta.description": "Brain Yang's engineering portfolio spanning full-stack development, cloud architecture, DevOps, cybersecurity, AI, and IoT.",
        "language.label": "Choose language",
        "navigation.label": "Primary navigation",
        "navigation.about": "About",
        "navigation.skills": "Skills",
        "navigation.projects": "Projects",
        "navigation.experience": "Experience",
        "navigation.certifications": "Certifications",
        "navigation.education": "Education",
        "navigation.links": "Public Links",
        "hero.role": "An end-to-end engineer spanning hardware, systems, networks, databases, AI, and cloud",
        "labels.practice": "Practice:",
        "labels.evidence": "Evidence:",
        "labels.contribution": "Contribution:",
        "labels.features": "Features:",
        "status.present": "Present",
        "status.ongoing": "Ongoing",
        "footer": "Brain Yang · Résumé & Portfolio"
    })
});
```

將上述基礎鍵擴充到 HTML 中的每個鍵；英文採專業履歷語氣，保留產品、技術與證照正式名稱。Task 1 的鍵集合測試是完整性的唯一判準，任何缺鍵都必須在本步修正。

- [ ] **Step 3: 實作 DOM 套用函式**

```js
export const applyLanguage = (root, requestedLanguage) => {
    const language = resolveLanguage(requestedLanguage);
    const translations = TRANSLATIONS[language];

    for (const element of root.querySelectorAll("[data-i18n]")) {
        const key = element.dataset.i18n;
        const value = translations[key];
        if (!value) {
            continue;
        }
        const attribute = element.dataset.i18nAttr;
        if (attribute) {
            element.setAttribute(attribute, value);
        } else {
            element.textContent = value;
        }
    }

    root.documentElement.lang = language;
    for (const button of root.querySelectorAll("[data-language]")) {
        button.setAttribute("aria-pressed", String(button.dataset.language === language));
    }
    return language;
};
```

- [ ] **Step 4: 初始化並儲存選擇**

在既有導覽程式之前初始化語言；所有 DOM 程式放在 `if (typeof document !== "undefined")` 內，使 Node 測試可匯入純函式：

```js
if (typeof document !== "undefined") {
    let currentLanguage = applyLanguage(
        document,
        readLanguagePreference(window.localStorage),
    );

    for (const button of document.querySelectorAll("[data-language]")) {
        button.addEventListener("click", () => {
            currentLanguage = applyLanguage(document, button.dataset.language);
            writeLanguagePreference(window.localStorage, currentLanguage);
        });
    }

    // Existing mobile navigation and active-section logic follows unchanged.
}
```

- [ ] **Step 5: 執行完整 Node 測試**

Run: `node --test tests/*.test.mjs`

Expected: PASS，所有測試通過，沒有失敗或略過。

- [ ] **Step 6: 提交語言引擎**

Run:

```bash
git add app.js
git commit -m "feat: add bilingual language engine"
```

### Task 4: 完成響應式樣式與公開部署驗證

**Files:**
- Modify: `styles.css`

**Interfaces:**
- Consumes: `.language-switcher`、`.language-option` 與 `aria-pressed`。
- Produces: 桌面與手機皆可使用的語言控制器，不影響列印與既有選單。

- [ ] **Step 1: 加入語言控制器樣式**

```css
.language-switcher {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem;
  border: 1px solid var(--line);
  border-radius: 0.35rem;
  color: var(--muted);
  white-space: nowrap;
}

.language-option {
  min-height: 2.25rem;
  padding: 0.35rem 0.55rem;
  border: 0;
  border-radius: 0.2rem;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
}

.language-option[aria-pressed="true"] {
  background: var(--ink);
  color: var(--paper);
}
```

- [ ] **Step 2: 整合手機與列印樣式**

在 48rem 媒體查詢中讓 `.language-switcher` 與 `.menu-toggle` 並列，並允許英文導覽換行。在列印媒體查詢把 `.language-switcher` 加入隱藏清單。

- [ ] **Step 3: 執行 Node 測試**

Run: `node --test tests/*.test.mjs`

Expected: PASS，所有測試通過。

- [ ] **Step 4: 使用瀏覽器驗證**

在 1440px 與 390px 依序檢查：

1. 首次載入中文，`html[lang="zh-Hant"]`。
2. 按 EN 後 Hero、導覽、能力、作品、經歷、證照、學歷與 footer 皆為英文。
3. `html[lang="en"]`，EN 為 `aria-pressed="true"`。
4. 重新整理後仍為英文。
5. 按中文後恢復中文並記住選擇。
6. 手機選單可開關，語言切換不會開關選單。
7. 鍵盤 Tab 可到達兩個按鈕，焦點框可見。
8. 頁面沒有水平捲動。
9. 停用 JavaScript 時顯示完整中文。
10. 五個公開連結與原網址完全一致。

- [ ] **Step 5: 提交樣式**

Run:

```bash
git add styles.css
git commit -m "style: integrate responsive language switcher"
```

- [ ] **Step 6: 驗證 GitHub Pages 部署**

確認最新 `pages build and deployment` workflow 的 `head_sha` 等於最後提交且結論為 `success`。開啟公開網址，重複 Step 4 的中文、英文、重新整理與手機檢查。

- [ ] **Step 7: 記錄完成狀態**

在設計規格與本計畫的狀態欄更新為完成，提交：

```bash
git add docs/superpowers/specs/2026-11-05-bilingual-site-design.md docs/superpowers/plans/2026-11-05-bilingual-site.md
git commit -m "docs: record bilingual site completion"
```
