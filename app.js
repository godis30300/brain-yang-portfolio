const toggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");
const desktopNav = document.querySelector(".nav-links");

function closeMenu() {
    if (!toggle || !mobileNav) {
        return;
    }
    toggle.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
}

if (toggle && mobileNav && desktopNav) {
    const mobileViewport = window.matchMedia("(max-width: 48rem)");
    mobileViewport.addEventListener("change", (event) => {
        if (!event.matches) {
            closeMenu();
        }
    });
    toggle.addEventListener("click", () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!isOpen));
        mobileNav.hidden = isOpen;
    });
    mobileNav.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            closeMenu();
        }
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
            closeMenu();
            toggle.focus();
        }
    });
    // Hide the fallback navigation only after the disclosure is ready to use.
    desktopNav.classList.add("desktop-nav");
    toggle.hidden = false;
}

const sectionLinks = [...document.querySelectorAll(".nav-links a[href^='#']")];
const sections = [...new Set(sectionLinks
    .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
    .filter(Boolean))];

if ("IntersectionObserver" in window) {
    // Observer batches contain changed targets, not every visible section.
    const intersections = new Map();
    const observer = new window.IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting && entry.intersectionRatio > 0) {
                intersections.set(entry.target, entry);
            } else {
                intersections.delete(entry.target);
            }
        }
        const visible = [...intersections.values()]
            .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
        for (const link of sectionLinks) {
            if (visible && link.getAttribute("href") === `#${visible.target.id}`) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        }
    }, { rootMargin: "-25% 0px -60%", threshold: [0.1, 0.5] });
    sections.forEach((section) => observer.observe(section));
}
