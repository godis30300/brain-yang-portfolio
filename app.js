export const DEFAULT_LANGUAGE = "zh-Hant";
export const LANGUAGE_STORAGE_KEY = "brain-yang-language";
export const SUPPORTED_LANGUAGES = Object.freeze(["zh-Hant", "en"]);

export const TRANSLATIONS = Object.freeze({
    "zh-Hant": Object.freeze({
        "document.title": "Brain Yang｜全端、雲端與資安工程師",
        "meta.description": "Brain Yang 的個人履歷與工程作品集，涵蓋全端開發、雲端架構、DevOps、資訊安全、AI 與 IoT。",
        "accessibility.skip": "跳至主要內容",
        "language.label": "選擇語言",
        "navigation.label": "主要導覽",
        "navigation.menu": "選單",
        "navigation.about": "關於",
        "navigation.skills": "技能",
        "navigation.projects": "作品",
        "navigation.experience": "經歷",
        "navigation.certifications": "證照",
        "navigation.education": "學歷",
        "navigation.links": "公開連結",
        "hero.eyebrow": "HARDWARE TO SOFTWARE · END-TO-END ENGINEERING",
        "hero.role": "從硬體到雲端，跨越系統、網路、資料庫與 AI 的全方位工程師",
        "hero.summary": "具備從資料中心硬體、作業系統與網路維運，到資料庫、AI、雲端架構與軟體設計的完整實務歷程；每一層能力皆有相應的工作經驗、專案成果或專業證照佐證。",
        "hero.projectsCta": "探索精選作品",
        "hero.experienceCta": "閱讀工作經歷",
        "about.title": "關於我",
        "about.body": "目前就讀國立清華大學資訊安全研究所。工程歷程從資料中心伺服器維護起步，逐步延伸至系統、網路與資料庫維運，再走向雲端平台、AI 與全端軟體設計。這些實務經驗與持續累積的專業證照相互連結，讓我能從基礎設施到應用服務理解問題，參與跨層整合。",
        "skills.title": "從硬體到軟體的能力地圖",
        "labels.practice": "實務：",
        "labels.evidence": "佐證：",
        "labels.contribution": "個人貢獻：",
        "labels.features": "專案功能：",
        "skills.hardware.title": "硬體與資料中心",
        "skills.hardware.practice": "執行資料中心伺服器故障檢測、零件更換與光纖佈線，安裝維護基礎設施設備。",
        "skills.hardware.evidence": "硬體維護工程師經歷；NetApp Hybrid Cloud／SAN 與 Cisco CCNP Data Center 證照。",
        "skills.systems.title": "作業系統與虛擬化",
        "skills.systems.practice": "維護 Linux、Windows Server 與 VMware 環境，執行災難復原演練與弱點修補。",
        "skills.systems.evidence": "駐點系統工程師經歷；RHCE、LPIC-1／LPIC-2 證照。",
        "skills.network.title": "網路與資訊安全",
        "skills.network.practice": "安裝維護 Cisco 與防火牆設備，管理 VPN、DNS 及船舶與辦公室網路。",
        "skills.network.evidence": "系統兼網路工程師經歷；CCNP Security／Enterprise 證照。",
        "skills.data.title": "資料庫與資料平台",
        "skills.data.practice": "在平台開發與資訊維運工作中使用 PostgreSQL、MySQL、MSSQL 與 Oracle。",
        "skills.data.evidence": "工研院、風能與駐點維運經歷；Oracle OCP DBA、MySQL Professional 證照。",
        "skills.ai.title": "AI 與 IoT",
        "skills.ai.practice": "參與 AI-Maker 平台開發，管理 ComfyUI 伺服器，整合 LlamaIndex RAG 與 IoT 模型流程。",
        "skills.ai.evidence": "AI-Maker、NB-IoT 智慧溫室專案；Azure AI-900／AI-102 證照。",
        "skills.cloud.title": "雲端與平台工程",
        "skills.cloud.practice": "維運 AWS、GCP 與 GKE，將智慧校園部署於 AWS，建置 Kubernetes 與 CI/CD 流程。",
        "skills.cloud.evidence": "AWS Solutions Architect Associate／Professional、Azure AZ-305、Google Cloud Professional Cloud Architect 證照。",
        "skills.software.title": "軟體設計與全端開發",
        "skills.software.practice": "使用 Node.js、React 與 Python 開發平台與 API，參與分散式非同步任務排程系統的 UI／API 串接與系統整合。",
        "skills.software.evidence": "工研院全端工程師經歷；智慧校園平台與分散式非同步任務排程系統專案。",
        "projects.title": "精選作品",
        "projects.aiMaker.title": "AI-Maker｜No Code AI 模型訓練與部署平台",
        "projects.aiMaker.summary": "讓非程式背景使用者完成資料標註、模型訓練、部署與推論的整合平台。",
        "projects.aiMaker.contribution": "負責 Web 前後端、推論任務管理、ComfyUI 伺服器管理、IoT 模型框架與 S3 物件流程。",
        "projects.greenhouse.period": "2024.08—進行中",
        "projects.greenhouse.title": "NB-IoT 雙向控制綠能智慧溫室",
        "projects.greenhouse.summary": "以綠能供電支援溫室環境監測與遠端控制。",
        "projects.greenhouse.features": "整合 ESP32-C6、AM7020 與環境感測器，完成雲端雙向控制、排程與 Telegram 告警。",
        "projects.greenhouse.energy": "太陽能與鋰電池",
        "projects.campus.period": "2024.08—進行中",
        "projects.campus.title": "智慧校園平台",
        "projects.campus.summary": "透過感測器資料與自動化規則支援智慧校園設備管理。",
        "projects.campus.contribution": "整合感測器資料蒐集、分析、視覺化與設備自動化規則，並部署於 AWS。",
        "projects.interior.period": "2025.02—進行中",
        "projects.interior.title": "室內設計與 AI Render 平台",
        "projects.interior.summary": "從平面設計圖產生室內裝潢預覽。",
        "projects.interior.features": "將平面設計圖自動 3D 化，透過 AI Render 產生裝潢預覽，並整合第三方金流。",
        "projects.scheduler.title": "分散式非同步任務排程系統",
        "projects.scheduler.summary": "提供可監控、可擴展的集中式排程與腳本管理。",
        "projects.scheduler.contribution": "UI／API 串接、流程測試、Demo 規劃與系統整合協助。",
        "projects.smartBin.title": "Smart Bin 智慧垃圾桶系統",
        "projects.smartBin.summary": "結合影像辨識、設備控制與 Web Dashboard 的智慧垃圾桶管理系統。",
        "projects.smartBin.features": "以感測器與相機觸發影像辨識，透過 AWS Device Shadow 控制驅離設備並提供 Web Dashboard。",
        "experience.title": "工作經歷",
        "experience.itri.period": "2024.10—現在",
        "experience.itri.role": "全端工程師",
        "experience.itri.company": "財團法人工業技術研究院",
        "experience.itri.item1": "開發 Node.js、React、PHP 與 Python 平台",
        "experience.itri.item2": "建置 Kubernetes／K3s、Docker、Ansible 與 CI/CD",
        "experience.itri.item3": "維運多種資料庫、Linux、網路、憑證與 MQTT 服務",
        "experience.dfo.period": "2024.04—2025.08",
        "experience.dfo.role": "資訊工程師",
        "experience.dfo.company": "東方風能科技股份有限公司",
        "experience.dfo.item1": "維運船舶與辦公室 IT 基礎設施",
        "experience.dfo.item2": "管理 VPN、防火牆、NAS、MSSQL、Microsoft 365 與 Exchange",
        "experience.dfo.item3": "協助 ISO 27001 內部稽核與資安流程改善",
        "experience.ninetySeven.period": "2023.03—2024.03",
        "experience.ninetySeven.role": "IT／系統工程師",
        "experience.ninetySeven.company": "九七科技股份有限公司",
        "experience.ninetySeven.item1": "維運 GCP、AWS、GKE、CDN、DNS 與 Nginx",
        "experience.ninetySeven.item2": "以 Jenkins、Helm、Docker、Git 支援 CI/CD",
        "experience.ninetySeven.item3": "維運 ELK、Prometheus、Grafana 並開發自動化工具",
        "experience.genesis.period": "2021.09—2023.02",
        "experience.genesis.role": "系統兼網路工程師",
        "experience.genesis.company": "晉泰科技股份有限公司",
        "experience.genesis.item1": "設計資料中心系統與網路架構",
        "experience.genesis.item2": "安裝維護 Cisco、HPE、NetApp、Palo Alto、Fortinet 與 VMware",
        "experience.genesis.item3": "履歷記載服務期間客戶評價 9.6／10、案件解決率 100%",
        "experience.taifon.period": "2020.09—2021.06",
        "experience.taifon.role": "駐點系統工程師",
        "experience.taifon.company": "泰鋒電腦股份有限公司",
        "experience.taifon.item1": "維護財政部印刷廠與全國發票代售點資訊設備",
        "experience.taifon.item2": "執行災難復原演練、弱點掃描與修補",
        "experience.taifon.item3": "維護 Windows Server、Linux、VMware、Oracle 與網路設備",
        "experience.google.period": "2019.10—2020.06",
        "experience.google.role": "硬體維護工程師",
        "experience.google.company": "美商科高國際有限公司",
        "experience.google.item1": "執行資料中心伺服器故障檢測與零件更換",
        "experience.google.item2": "處理光纖佈線與實體資訊安全作業",
        "experience.google.item3": "與海外工程師依專案時程協作",
        "certifications.title": "專業證照",
        "certifications.cloud": "雲端與 AI",
        "certifications.security": "資訊安全",
        "certifications.infrastructure": "基礎設施與網路",
        "certifications.systems": "系統與資料庫",
        "certifications.iso": "ISO 27001 主導稽核員",
        "education.title": "學歷與參與",
        "education.nthu.name": "國立清華大學",
        "education.nthu.degree": "資訊安全研究所｜碩士｜2024.09—2027.01",
        "education.nchu.name": "國立中興大學",
        "education.nchu.degree": "資訊管理學系｜學士｜2015.09—2019.06",
        "education.volunteer.title": "新竹市野鳥學會｜野鳥救傷小組志工",
        "education.volunteer.period": "2025.03—進行中",
        "education.volunteer.body": "協助野鳥救援、危難評估、初步處置、資料紀錄與民眾溝通。",
        "education.award.title": "全國慈善／科技／人文網頁設計比賽｜銅獎",
        "education.award.body": "參與流浪犬資料登錄與查詢平台，負責 Node.js、Express、MySQL 後端架構與 API 設計。",
        "links.title": "公開連結",
        "footer": "Brain Yang · 個人履歷與作品集"
    }),
    en: Object.freeze({
        "document.title": "Brain Yang | Full-Stack, Cloud & Cybersecurity Engineer",
        "meta.description": "Brain Yang's engineering portfolio spanning full-stack development, cloud architecture, DevOps, cybersecurity, AI, and IoT.",
        "accessibility.skip": "Skip to main content",
        "language.label": "Choose language",
        "navigation.label": "Primary navigation",
        "navigation.menu": "Menu",
        "navigation.about": "About",
        "navigation.skills": "Skills",
        "navigation.projects": "Projects",
        "navigation.experience": "Experience",
        "navigation.certifications": "Certifications",
        "navigation.education": "Education",
        "navigation.links": "Public Links",
        "hero.eyebrow": "HARDWARE TO SOFTWARE · END-TO-END ENGINEERING",
        "hero.role": "An end-to-end engineer spanning hardware, systems, networks, databases, AI, and cloud",
        "hero.summary": "Hands-on experience across data center hardware, operating systems, network operations, databases, AI, cloud architecture, and software design—supported at every layer by professional experience, project results, or industry certifications.",
        "hero.projectsCta": "Explore Featured Projects",
        "hero.experienceCta": "View Work Experience",
        "about.title": "About",
        "about.body": "Currently pursuing a master's degree in Cybersecurity at National Tsing Hua University. My engineering journey began with data center server maintenance, expanded into systems, networking, and database operations, and progressed into cloud platforms, AI, and full-stack software design. This connected experience lets me understand problems from infrastructure through application services and contribute across technical layers.",
        "skills.title": "Hardware-to-Software Capability Map",
        "labels.practice": "Practice:",
        "labels.evidence": "Evidence:",
        "labels.contribution": "Contribution:",
        "labels.features": "Features:",
        "skills.hardware.title": "Hardware & Data Centers",
        "skills.hardware.practice": "Diagnosed data center server failures, replaced components, installed fiber cabling, and maintained infrastructure equipment.",
        "skills.hardware.evidence": "Hardware Maintenance Engineer experience; NetApp Hybrid Cloud/SAN and Cisco CCNP Data Center certifications.",
        "skills.systems.title": "Operating Systems & Virtualization",
        "skills.systems.practice": "Maintained Linux, Windows Server, and VMware environments while performing disaster recovery drills and vulnerability remediation.",
        "skills.systems.evidence": "On-site Systems Engineer experience; RHCE, LPIC-1, and LPIC-2 certifications.",
        "skills.network.title": "Networking & Cybersecurity",
        "skills.network.practice": "Installed and maintained Cisco and firewall equipment while managing VPN, DNS, vessel, and office networks.",
        "skills.network.evidence": "Systems & Network Engineer experience; CCNP Security and Enterprise certifications.",
        "skills.data.title": "Databases & Data Platforms",
        "skills.data.practice": "Worked with PostgreSQL, MySQL, MSSQL, and Oracle across platform development and IT operations roles.",
        "skills.data.evidence": "Experience at ITRI, Dong Fang Offshore, and on-site operations; Oracle OCP DBA and MySQL Professional certifications.",
        "skills.ai.title": "AI & IoT",
        "skills.ai.practice": "Contributed to the AI-Maker platform, managed ComfyUI servers, and integrated LlamaIndex RAG and IoT model workflows.",
        "skills.ai.evidence": "AI-Maker and NB-IoT smart greenhouse projects; Azure AI-900 and AI-102 certifications.",
        "skills.cloud.title": "Cloud & Platform Engineering",
        "skills.cloud.practice": "Operated AWS, GCP, and GKE, deployed a smart campus platform on AWS, and built Kubernetes and CI/CD workflows.",
        "skills.cloud.evidence": "AWS Solutions Architect Associate/Professional, Azure AZ-305, and Google Cloud Professional Cloud Architect certifications.",
        "skills.software.title": "Software Design & Full-Stack Development",
        "skills.software.practice": "Built platforms and APIs with Node.js, React, and Python, and supported UI/API integration, testing, and system integration for a distributed asynchronous job scheduler.",
        "skills.software.evidence": "Full-Stack Engineer experience at ITRI; smart campus and distributed asynchronous job scheduler projects.",
        "projects.title": "Featured Projects",
        "projects.aiMaker.title": "AI-Maker | No-Code AI Model Training & Deployment Platform",
        "projects.aiMaker.summary": "An integrated platform enabling users without programming backgrounds to label data, train models, deploy them, and run inference.",
        "projects.aiMaker.contribution": "Built web front-end and back-end features, inference job management, ComfyUI server management, an IoT model framework, and S3 object workflows.",
        "projects.greenhouse.period": "2024.08—Ongoing",
        "projects.greenhouse.title": "NB-IoT Bidirectional Green-Energy Smart Greenhouse",
        "projects.greenhouse.summary": "A renewable-energy-powered greenhouse monitoring and remote-control system.",
        "projects.greenhouse.features": "Integrated ESP32-C6, AM7020, and environmental sensors with cloud-based bidirectional control, scheduling, and Telegram alerts.",
        "projects.greenhouse.energy": "Solar & Lithium Battery",
        "projects.campus.period": "2024.08—Ongoing",
        "projects.campus.title": "Smart Campus Platform",
        "projects.campus.summary": "A platform that uses sensor data and automation rules to manage smart-campus equipment.",
        "projects.campus.contribution": "Integrated sensor data collection, analytics, visualization, and device automation rules, then deployed the platform on AWS.",
        "projects.interior.period": "2025.02—Ongoing",
        "projects.interior.title": "Interior Design & AI Rendering Platform",
        "projects.interior.summary": "Generates interior renovation previews from floor plans.",
        "projects.interior.features": "Transforms floor plans into 3D scenes, produces renovation previews through AI rendering, and integrates third-party payments.",
        "projects.scheduler.title": "Distributed Asynchronous Job Scheduling System",
        "projects.scheduler.summary": "A centralized, observable, and scalable platform for scheduling and script management.",
        "projects.scheduler.contribution": "Supported UI/API integration, workflow testing, demo planning, and system integration.",
        "projects.smartBin.title": "Smart Bin Management System",
        "projects.smartBin.summary": "A smart-bin platform combining image recognition, device control, and a web dashboard.",
        "projects.smartBin.features": "Uses sensors and cameras to trigger image recognition, controls deterrent devices through AWS Device Shadow, and provides a web dashboard.",
        "experience.title": "Work Experience",
        "experience.itri.period": "2024.10—Present",
        "experience.itri.role": "Full-Stack Engineer",
        "experience.itri.company": "Industrial Technology Research Institute (ITRI)",
        "experience.itri.item1": "Develop Node.js, React, PHP, and Python platforms",
        "experience.itri.item2": "Build Kubernetes/K3s, Docker, Ansible, and CI/CD workflows",
        "experience.itri.item3": "Operate databases, Linux, networks, certificates, and MQTT services",
        "experience.dfo.period": "2024.04—2025.08",
        "experience.dfo.role": "IT Engineer",
        "experience.dfo.company": "Dong Fang Offshore Co., Ltd.",
        "experience.dfo.item1": "Operated vessel and office IT infrastructure",
        "experience.dfo.item2": "Managed VPN, firewalls, NAS, MSSQL, Microsoft 365, and Exchange",
        "experience.dfo.item3": "Supported ISO 27001 internal audits and security process improvements",
        "experience.ninetySeven.period": "2023.03—2024.03",
        "experience.ninetySeven.role": "IT / Systems Engineer",
        "experience.ninetySeven.company": "97 Technology Co., Ltd.",
        "experience.ninetySeven.item1": "Operated GCP, AWS, GKE, CDN, DNS, and Nginx",
        "experience.ninetySeven.item2": "Supported CI/CD with Jenkins, Helm, Docker, and Git",
        "experience.ninetySeven.item3": "Operated ELK, Prometheus, and Grafana while developing automation tools",
        "experience.genesis.period": "2021.09—2023.02",
        "experience.genesis.role": "Systems & Network Engineer",
        "experience.genesis.company": "Genesis Technology, Inc.",
        "experience.genesis.item1": "Designed data center systems and network architectures",
        "experience.genesis.item2": "Installed and maintained Cisco, HPE, NetApp, Palo Alto, Fortinet, and VMware solutions",
        "experience.genesis.item3": "Recorded a 9.6/10 customer rating and 100% case resolution rate during the service period",
        "experience.taifon.period": "2020.09—2021.06",
        "experience.taifon.role": "On-site Systems Engineer",
        "experience.taifon.company": "Taifon Computer Co., Ltd.",
        "experience.taifon.item1": "Maintained IT equipment for the Ministry of Finance Printing Plant and nationwide invoice distribution points",
        "experience.taifon.item2": "Performed disaster recovery drills, vulnerability scanning, and remediation",
        "experience.taifon.item3": "Maintained Windows Server, Linux, VMware, Oracle, and network equipment",
        "experience.google.period": "2019.10—2020.06",
        "experience.google.role": "Hardware Maintenance Engineer",
        "experience.google.company": "Google International LLC Taiwan Branch",
        "experience.google.item1": "Diagnosed data center server failures and replaced components",
        "experience.google.item2": "Handled fiber cabling and physical information security procedures",
        "experience.google.item3": "Collaborated with overseas engineers to meet project schedules",
        "certifications.title": "Professional Certifications",
        "certifications.cloud": "Cloud & AI",
        "certifications.security": "Cybersecurity",
        "certifications.infrastructure": "Infrastructure & Networking",
        "certifications.systems": "Systems & Databases",
        "certifications.iso": "ISO 27001 Lead Auditor",
        "education.title": "Education & Community",
        "education.nthu.name": "National Tsing Hua University",
        "education.nthu.degree": "M.S. in Cybersecurity｜2024.09—2027.01",
        "education.nchu.name": "National Chung Hsing University",
        "education.nchu.degree": "B.B.A. in Management Information Systems｜2015.09—2019.06",
        "education.volunteer.title": "Hsinchu Wild Bird Society｜Wild Bird Rescue Volunteer",
        "education.volunteer.period": "2025.03—Ongoing",
        "education.volunteer.body": "Assist with wild bird rescue, risk assessment, first response, case documentation, and public communication.",
        "education.award.title": "National Charity / Technology / Humanities Web Design Competition｜Bronze Award",
        "education.award.body": "Contributed to a stray-dog registration and search platform, designing the Node.js, Express, and MySQL back end and APIs.",
        "links.title": "Public Links",
        "footer": "Brain Yang · Résumé & Portfolio"
    }),
});

/** Resolves a language preference to a supported language. */
export const resolveLanguage = (value) => {
    return SUPPORTED_LANGUAGES.includes(value) ? value : DEFAULT_LANGUAGE;
};

/** Reads a preference while tolerating unavailable or blocked storage. */
export const readLanguagePreference = (storage) => {
    try {
        return resolveLanguage(storage?.getItem(LANGUAGE_STORAGE_KEY));
    } catch {
        return DEFAULT_LANGUAGE;
    }
};

/** Persists a supported preference when browser storage is available. */
export const writeLanguagePreference = (storage, language) => {
    try {
        storage?.setItem(LANGUAGE_STORAGE_KEY, resolveLanguage(language));
    } catch {
        // Storage is optional; the in-page language state still works.
    }
};

/** Applies localized text, attributes, and language-control state to a document. */
export const applyLanguage = (root, requestedLanguage) => {
    const language = resolveLanguage(requestedLanguage);
    const translations = TRANSLATIONS[language];

    for (const element of root.querySelectorAll("[data-i18n]")) {
        const key = element.dataset.i18n;
        if (!Object.hasOwn(translations, key)) {
            continue;
        }
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

if (typeof document !== "undefined") {
    let storage;
    try {
        storage = window.localStorage;
    } catch {
        // Accessing the storage property itself can be blocked by the browser.
    }

    applyLanguage(document, readLanguagePreference(storage));
    for (const button of document.querySelectorAll("[data-language]")) {
        button.addEventListener("click", () => {
            const language = applyLanguage(document, button.dataset.language);
            writeLanguagePreference(storage, language);
        });
    }

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
}
