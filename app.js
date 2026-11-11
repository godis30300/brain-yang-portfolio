export const DEFAULT_LANGUAGE = "zh-Hant";
export const LANGUAGE_STORAGE_KEY = "brain-yang-language";
export const SUPPORTED_LANGUAGES = Object.freeze(["zh-Hant", "en"]);

export const TRANSLATIONS = Object.freeze({
    "zh-Hant": Object.freeze({
        "document.title": "Brain Yang｜全端、雲端與資安工程師",
        "meta.description": "Brain Yang 的工程履歷與作品集，包括資料中心維運、船岸網路、資料庫、雲端部署，以及 AI 與物聯網軟體開發。",
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
        "hero.eyebrow": "全端開發 · 雲端架構 · 資訊安全",
        "hero.role": "從機房硬體到雲端 AI 平台的全端工程師",
        "hero.summary": "我維修過資料中心伺服器，也維運過船舶與總部之間的網路。這些經驗帶進了我的軟體設計工作，從智慧校園的感測器資料，到 AI-Maker 的模型訓練與部署。",
        "hero.projectsCta": "探索精選作品",
        "hero.experienceCta": "閱讀工作經歷",
        "about.title": "關於我",
        "about.body": "我習慣沿著資料流向找問題。在九七科技，我用日誌和監控指標追查正式環境的異常。在工研院，我用 JMeter 測試 MQTT 和資料庫在負載下的表現，也為機器學習工作建置 GPU 環境。目前就讀國立清華大學資訊安全研究所。",
        "skills.title": "工程技能與實作經驗",
        "labels.practice": "實務：",
        "labels.evidence": "佐證：",
        "labels.contribution": "個人貢獻：",
        "labels.features": "專案功能：",
        "skills.hardware.title": "硬體與資料中心",
        "skills.hardware.practice": "診斷伺服器的 CPU、記憶體、GPU 與儲存故障，執行零件更換、光纖佈線與汰役硬碟銷毀。",
        "skills.hardware.evidence": "美商科高資料中心硬體維護、晉泰企業儲存建置。持有 CCNP Data Center 與 NetApp SAN 相關證照。",
        "skills.systems.title": "作業系統與虛擬化",
        "skills.systems.practice": "在 Windows Server、Linux 與 IBM AIX 環境維護企業服務，在 VMware ESXi 上管理虛擬主機並參與備份還原演練。",
        "skills.systems.evidence": "財政部印刷廠駐點維運與晉泰虛擬化專案。相關證照包括 RHCE、LPIC-2 與 VMware VCP-NV。",
        "skills.network.title": "網路與資訊安全",
        "skills.network.practice": "在資料中心設定 Cisco 設備及防火牆，在船岸網路使用 VPN、衛星與行動網路串接船舶和辦公室。",
        "skills.network.evidence": "晉泰企業網路、東方風能船岸連線與 ISO 27001 內部稽核。持有 CCNP Enterprise、CCNP Security 與 CEH。",
        "skills.data.title": "資料庫與資料平台",
        "skills.data.practice": "在工研院整合 PostgreSQL、MySQL 與 Redis，進行備份及效能測試，也維護過船務系統的 SQL Server 與發票系統的 Oracle。",
        "skills.data.evidence": "工研院資料平台、東方風能與財政部印刷廠維運。持有 Oracle OCP DBA 與 MySQL Professional。",
        "skills.ai.title": "AI 與 IoT",
        "skills.ai.practice": "建置 NVIDIA 驅動程式、CUDA 與 cuDNN 環境。在 AI-Maker 串接 CVAT 標註與訓練流程，以 LlamaIndex 的 RAG 流程解讀模型報告。",
        "skills.ai.evidence": "AI-Maker、NB-IoT 溫室與 Smart Bin。相關認證包括 Azure AI Engineer Associate（AI-102）。",
        "skills.cloud.title": "雲端與平台工程",
        "skills.cloud.practice": "維運 AWS、GCP 與 GKE 正式服務，以 Jenkins 和 Helm 部署應用程式，並用 Prometheus、Grafana 與 ELK 排查異常。",
        "skills.cloud.evidence": "九七科技雲端維運、AWS 智慧校園平台。持有 AWS Solutions Architect Professional、Azure Solutions Architect Expert、Google Cloud Professional Cloud Architect 與 CKA。",
        "skills.software.title": "軟體設計與全端開發",
        "skills.software.practice": "用 React、Next.js、Node.js 與 Python 設計 Web 平台與 API，以 Redis 和 BullMQ 排程背景任務，並撰寫測試驗證整合流程。",
        "skills.software.evidence": "工研院全端開發、AI-Maker 訓練流程，以及分散式排程系統的 UI 與 API 整合。",
        "projects.title": "精選作品",
        "projects.aiMaker.period": "2025.06—進行中",
        "projects.aiMaker.title": "AI-Maker｜免寫程式的模型訓練與部署平台",
        "projects.aiMaker.summary": "使用者可以在同一個平台標註影像、訓練模型、管理版本並部署推論服務，再用 AI 解讀訓練報告。",
        "projects.aiMaker.contribution": "串接 CVAT，自動同步標註結果。以 BullMQ 與 Redis 排程訓練及推論，加入心跳監控與失敗重試，並以 CASL 管理組織、專案與成員權限。",
        "projects.greenhouse.period": "2024.08—進行中",
        "projects.greenhouse.title": "NB-IoT 雙向控制綠能智慧溫室",
        "projects.greenhouse.summary": "讓離網溫室以太陽能和鋰電池供電，透過 NB-IoT 回傳環境讀值並接收控制指令。",
        "projects.greenhouse.features": "以 ESP32-C6 與 AM7020 讀取溫濕度、土壤濕度和光照，透過 MQTT 遠端開關或排程風扇與照明，異常時由 Telegram 告警。",
        "projects.greenhouse.energy": "太陽能與鋰電池",
        "projects.campus.period": "2024.08—進行中",
        "projects.campus.title": "智慧校園平台",
        "projects.campus.summary": "把校園感測器的即時資料呈現在同一個介面，並依規則自動控制燈具與風扇。",
        "projects.campus.contribution": "在 AWS 串接 Node.js、Python 與 DynamoDB，以 MQTT 接收設備訊息，透過 WebSocket 更新畫面，並將事件推播至 LINE 或 Telegram。",
        "projects.interior.period": "2025.02—進行中",
        "projects.interior.title": "室內設計 AI 預覽平台",
        "projects.interior.summary": "將平面設計圖轉為 3D 裝潢預覽，讓使用者在施工前看見設計效果。",
        "projects.interior.features": "以 Next.js 建置操作介面與後端，在 AWS EC2 上整合 ComfyUI、Gemini 的渲染流程，並串接第三方金流。",
        "projects.scheduler.period": "2026.04—2026.06",
        "projects.scheduler.title": "分散式非同步任務排程系統",
        "projects.scheduler.summary": "將散落各處的 cron 任務集中管理。排程器派工給背景服務，再將執行結果與日誌寫回 PostgreSQL，方便追查逾時與失敗任務。",
        "projects.scheduler.contribution": "負責 UI 與 API 串接、測試從建立任務到查詢結果的流程，並規劃展示、協助系統整合。",
        "projects.smartBin.period": "2026.04—2026.06",
        "projects.smartBin.title": "Smart Bin 智慧垃圾桶系統",
        "projects.smartBin.summary": "感測器觸發拍照後，由 Amazon Rekognition 判斷畫面中是否有貓狗，再決定是否啟動燈光與蜂鳴器。",
        "projects.smartBin.features": "以 AWS IoT Device Shadow 同步 Raspberry Pi 狀態。使用者登入儀表板後可查影像與警報、手動切換模式，裝置端設有逾時保護。",
        "experience.title": "工作經歷",
        "experience.itri.period": "2024.10—2026.12（預計）",
        "experience.itri.role": "全端工程師",
        "experience.itri.company": "財團法人工業技術研究院",
        "experience.itri.item1": "以 React、Node.js、PHP 與 Python 開發 Web 與 IoT 服務，整合 REST API、WebSocket 和 MQTT。",
        "experience.itri.item2": "用 GitLab CI/CD 和 Ansible 自動部署 Kubernetes、K3s 與 Docker 服務，並維運 GCP 的虛擬機器與網路。",
        "experience.itri.item3": "整合 PostgreSQL、MySQL、Redis 等資料服務，用 JMeter 壓測資料庫與 MQTT，並配置 CUDA、cuDNN 與 NVIDIA 驅動程式。",
        "experience.itri.item4": "使用 Claude Code、OpenAI Codex 等工具協助除錯、重構與測試，並自製可重用的 Agent Skills，整理開發與文件撰寫流程。",
        "experience.dfo.period": "2024.04—2025.08",
        "experience.dfo.role": "資訊工程師",
        "experience.dfo.company": "東方風能科技股份有限公司",
        "experience.dfo.item1": "維護船舶與總部間的 VPN、Starlink、4G 與衛星連線，以英文和外籍船長及船員排除連線問題。",
        "experience.dfo.item2": "管理 Microsoft 365、Exchange、多因素驗證與 DNS 郵件驗證，也維護 SQL Server、TM Master 和 Oracle NetSuite。",
        "experience.dfo.item3": "管理 NAS 與雲端備份，參與 ISO 27001 內部稽核及資安流程改善。",
        "experience.ninetySeven.period": "2023.03—2024.03",
        "experience.ninetySeven.role": "IT／系統工程師",
        "experience.ninetySeven.company": "九七科技股份有限公司",
        "experience.ninetySeven.item1": "維運 GCP、AWS 與 GKE 正式環境，管理 CDN、DNS、Nginx 快取與 TLS 憑證。",
        "experience.ninetySeven.item2": "以 Jenkins、Helm、Docker 建置部署流程，用 Groovy 與 Python 自動化發布作業。",
        "experience.ninetySeven.item3": "用 ELK、Prometheus、Grafana 追查異常，以 Node.js 和 Vue 開發內部管理與自動告警工具，參與全天候輪值。",
        "experience.genesis.period": "2021.09—2023.02",
        "experience.genesis.role": "系統兼網路工程師",
        "experience.genesis.company": "晉泰科技股份有限公司",
        "experience.genesis.item1": "參與製造業廠區網路建置與跨據點防火牆更新，維護 Cisco Nexus、UCS、MDS 與 SAN 儲存網路。",
        "experience.genesis.item2": "維運 VMware ESXi、vCenter、NSX-T 與 NetApp 儲存，使用 Veeam 和 NetBackup 管理備份。",
        "experience.genesis.item3": "提供全天候輪值技術支援，服務期間平均客戶評分 9.6／10、案件解決率 100%。",
        "experience.taifon.period": "2020.09—2021.06",
        "experience.taifon.role": "財政部印刷廠駐點工程師",
        "experience.taifon.company": "泰鋒電腦股份有限公司",
        "experience.taifon.item1": "支援財政部印刷廠及全國 325 個統一發票代售據點的系統維運與故障排除。",
        "experience.taifon.item2": "維護 Windows Server、Linux、IBM AIX 及 VMware，管理 Oracle 11g、MySQL 與企業應用伺服器。",
        "experience.taifon.item3": "使用 Dell EMC NetWorker 與磁帶備份設備參與災難復原演練，執行弱點掃描及修補。",
        "experience.google.period": "2019.10—2020.06",
        "experience.google.role": "硬體維護工程師",
        "experience.google.company": "美商科高國際有限公司",
        "experience.google.item1": "診斷並更換伺服器 CPU、記憶體、GPU、主機板與儲存裝置，單日處理設備數曾超過 100 台。",
        "experience.google.item2": "執行機房光纖佈線與線路辨識，安全清除並銷毀汰役硬碟。",
        "experience.google.item3": "與國際工程團隊協作，依專案排程完成設備檢測、維修與更換。",
        "experience.university.period": "2018.03—2019.07",
        "experience.university.role": "行政工讀生",
        "experience.university.company": "國立中興大學",
        "experience.university.item1": "協調講座、企業參訪與工作坊，負責現場支援、活動攝影和影片剪輯。",
        "experience.studio.period": "2013.07—2014.07",
        "experience.studio.role": "電腦組裝與維修工程師（工讀）",
        "experience.studio.company": "神寶科技工作室",
        "experience.studio.item1": "組裝與維修桌機、筆電，進行 CPU、記憶體與儲存裝置的診斷和燒機測試。",
        "experience.studio.item2": "安裝 Windows，以 Acronis 與 Symantec Ghost 備份、還原客戶系統。",
        "certifications.title": "專業證照",
        "certifications.cloud": "雲端與 AI",
        "certifications.azureCore": "Microsoft Azure 基礎（AZ-900）、系統管理（AZ-104）、解決方案架構（AZ-305）",
        "certifications.azureAI": "Azure AI 基礎（AI-900）、AI 工程（AI-102）、資料基礎（DP-900）",
        "certifications.security": "資訊安全",
        "certifications.microsoftSecurity": "Microsoft 安全性基礎（SC-900）、資安維運（SC-200）、身分與存取管理（SC-300）、資訊保護（SC-400）",
        "certifications.infrastructure": "基礎設施與網路",
        "certifications.netapp": "NetApp 技術基礎、混合雲管理與實作、SAN 實作及儲存安裝",
        "certifications.systems": "系統與資料庫",
        "certifications.iso": "ISO 27001 主導稽核員",
        "education.title": "學歷與參與",
        "education.nthu.name": "國立清華大學",
        "education.nthu.degree": "資訊安全研究所｜碩士在讀｜2024.09 入學，預計 2026.12 畢業",
        "education.nchu.name": "國立中興大學",
        "education.nchu.degree": "資訊管理學系｜學士｜2015.09—2019.06",
        "education.languages.title": "語言檢定",
        "education.languages.body": "日語 JLPT N2，英語 TOEIC 690 分。",
        "education.volunteer.title": "新竹市野鳥學會｜野鳥救傷小組志工",
        "education.volunteer.period": "2025.03—進行中",
        "education.volunteer.body": "協助野鳥救援、危難評估、初步處置、資料紀錄與民眾溝通。",
        "education.leadership.title": "YMCA 國際志工領隊",
        "education.leadership.period": "2018.08—2019.05",
        "education.leadership.body": "帶領韓國與菲律賓交流團隊，協助志工規劃活動、對接當地夥伴，並處理現場行程調整。",
        "education.award.title": "走失犬隻協尋平台｜校級銅獎",
        "education.award.body": "參加全國慈善／科技／人文網頁設計比賽，為協尋平台設計犬隻登錄、搜尋與通知 API，並以 Node.js、Express 和 MySQL 串接前端。",
        "links.title": "公開連結",
        "footer": "Brain Yang · 個人履歷與作品集"
    }),
    en: Object.freeze({
        "document.title": "Brain Yang | Full-Stack, Cloud & Cybersecurity Engineer",
        "meta.description": "Brain Yang’s engineering résumé and portfolio, covering data center operations, vessel connectivity, databases, cloud deployments, and AI and IoT software.",
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
        "hero.eyebrow": "Full-stack development · Cloud architecture · Cybersecurity",
        "hero.role": "Full-stack engineer with a background in data centers and cloud AI platforms",
        "hero.summary": "I’ve repaired data center servers and kept ships connected to shore. I bring that experience to software design, from handling sensor data on a smart campus to training and deploying models in AI-Maker.",
        "hero.projectsCta": "Explore Featured Projects",
        "hero.experienceCta": "View Work Experience",
        "about.title": "About",
        "about.body": "I follow the data when troubleshooting. At 97 Technology, I used logs and monitoring metrics to investigate production incidents. At ITRI, I used JMeter to load-test MQTT and databases and set up GPU environments for machine learning. I’m pursuing a master’s degree in cybersecurity at National Tsing Hua University.",
        "skills.title": "Engineering skills and experience",
        "labels.practice": "Practice:",
        "labels.evidence": "Evidence:",
        "labels.contribution": "Contribution:",
        "labels.features": "Features:",
        "skills.hardware.title": "Hardware & Data Centers",
        "skills.hardware.practice": "Diagnosed CPU, memory, GPU, and storage faults in data center servers. Replaced components, ran fiber, and securely destroyed retired drives.",
        "skills.hardware.evidence": "Data center hardware maintenance at Google and enterprise storage installations at Genesis Technology. Credentials include CCNP Data Center and NetApp SAN certification.",
        "skills.systems.title": "Operating Systems & Virtualization",
        "skills.systems.practice": "Maintained services on Windows Server, Linux, and IBM AIX. Managed VMware ESXi hosts and took part in backup and recovery drills.",
        "skills.systems.evidence": "On-site operations at the Ministry of Finance Printing Plant and virtualization projects at Genesis Technology. Credentials include RHCE, LPIC-2, and VMware VCP-NV.",
        "skills.network.title": "Networking & Cybersecurity",
        "skills.network.practice": "Configured Cisco equipment and firewalls in data centers. Connected vessels to shore offices over VPNs, satellite links, and mobile networks.",
        "skills.network.evidence": "Enterprise networks at Genesis Technology, plus vessel connectivity and ISO 27001 internal audits at Dong Fang Offshore. Credentials include CCNP Enterprise, CCNP Security, and CEH.",
        "skills.data.title": "Databases & Data Platforms",
        "skills.data.practice": "Integrated PostgreSQL, MySQL, and Redis at ITRI and worked on backups and performance testing. Maintained SQL Server in maritime IT and Oracle for invoice services.",
        "skills.data.evidence": "Database work at ITRI, Dong Fang Offshore, and the Ministry of Finance Printing Plant. Credentials include Oracle OCP DBA and MySQL Professional.",
        "skills.ai.title": "AI & IoT",
        "skills.ai.practice": "Set up NVIDIA drivers, CUDA, and cuDNN. In AI-Maker, integrated CVAT annotations with model training and used retrieval-augmented generation (RAG) with LlamaIndex to interpret training reports.",
        "skills.ai.evidence": "Projects include AI-Maker, an NB-IoT greenhouse, and Smart Bin. Credentials include Azure AI Engineer Associate (AI-102).",
        "skills.cloud.title": "Cloud & Platform Engineering",
        "skills.cloud.practice": "Operated production services on AWS and Google Cloud, including GKE. Deployed applications with Jenkins and Helm and investigated incidents with Prometheus, Grafana, and ELK.",
        "skills.cloud.evidence": "Production operations at 97 Technology and the smart campus platform on AWS. Credentials include AWS Solutions Architect Professional, Azure Solutions Architect Expert, Google Cloud Professional Cloud Architect, and CKA.",
        "skills.software.title": "Software Design & Full-Stack Development",
        "skills.software.practice": "Designed web platforms and APIs with React, Next.js, Node.js, and Python. Scheduled background jobs with Redis and BullMQ and tested how services work together.",
        "skills.software.evidence": "Full-stack development at ITRI, the AI-Maker training pipeline, and UI and API integration for a distributed job scheduler.",
        "projects.title": "Featured Projects",
        "projects.aiMaker.period": "June 2025–present",
        "projects.aiMaker.title": "AI-Maker | No-code model training and deployment",
        "projects.aiMaker.summary": "Users can label images, train and version models, deploy them for inference, and use AI to interpret training reports in one place.",
        "projects.aiMaker.contribution": "Integrated CVAT to sync annotations automatically. Built a BullMQ and Redis queue for training and inference with worker heartbeats and retries, and implemented organization, project, and member permissions with CASL.",
        "projects.greenhouse.period": "Aug 2024–present",
        "projects.greenhouse.title": "NB-IoT Bidirectional Green-Energy Smart Greenhouse",
        "projects.greenhouse.summary": "An off-grid greenhouse runs on solar power and batteries. It sends sensor readings and receives control commands over NB-IoT.",
        "projects.greenhouse.features": "An ESP32-C6 and AM7020 report air temperature, humidity, soil moisture, and light levels. MQTT supports remote and scheduled control of fans and lights, with alerts via Telegram.",
        "projects.greenhouse.energy": "Solar & Lithium Battery",
        "projects.campus.period": "Aug 2024–present",
        "projects.campus.title": "Smart Campus Platform",
        "projects.campus.summary": "A shared dashboard displays live campus sensor data and uses rules to control lights and fans.",
        "projects.campus.contribution": "Integrated Node.js, Python, and DynamoDB on AWS. Received device messages over MQTT, updated the dashboard via WebSocket, and sent event notifications to LINE or Telegram.",
        "projects.interior.period": "Feb 2025–present",
        "projects.interior.title": "AI interior design preview",
        "projects.interior.summary": "The platform turns floor plans into 3D interior previews so users can see a design before construction.",
        "projects.interior.features": "A Next.js application on AWS EC2 connects the ComfyUI and Gemini rendering workflow with a third-party payment service.",
        "projects.scheduler.period": "Apr–Jun 2026",
        "projects.scheduler.title": "Distributed Asynchronous Job Scheduling System",
        "projects.scheduler.summary": "The scheduler brings scattered cron jobs into one place. Workers write results and logs to PostgreSQL so teams can trace failures and timeouts.",
        "projects.scheduler.contribution": "Connected the UI to the API, tested the flow from job creation to result lookup, planned the demo, and helped integrate the system.",
        "projects.smartBin.period": "Apr–Jun 2026",
        "projects.smartBin.title": "Smart Bin Management System",
        "projects.smartBin.summary": "A motion sensor triggers a photo. Amazon Rekognition checks for cats or dogs before the device activates its light and buzzer.",
        "projects.smartBin.features": "AWS IoT Device Shadow synchronizes the Raspberry Pi’s state. Signed-in users can review images and alerts or change modes manually. A local timeout limits how long the device stays active.",
        "experience.title": "Work Experience",
        "experience.itri.period": "Oct 2024–Dec 2026 (expected)",
        "experience.itri.role": "Full-Stack Engineer",
        "experience.itri.company": "Industrial Technology Research Institute (ITRI)",
        "experience.itri.item1": "Developed web and IoT services with React, Node.js, PHP, and Python, integrating REST APIs, WebSocket, and MQTT.",
        "experience.itri.item2": "Automated Kubernetes, K3s, and Docker deployments with GitLab CI/CD and Ansible. Managed virtual machines and networks on Google Cloud.",
        "experience.itri.item3": "Integrated data services including PostgreSQL, MySQL, and Redis. Load-tested databases and MQTT with JMeter and configured CUDA, cuDNN, and NVIDIA drivers.",
        "experience.itri.item4": "Used Claude Code and OpenAI Codex for debugging, refactoring, and testing. Wrote reusable agent skills for development and technical documentation.",
        "experience.dfo.period": "Apr 2024–Aug 2025",
        "experience.dfo.role": "IT Engineer",
        "experience.dfo.company": "Dong Fang Offshore Co., Ltd.",
        "experience.dfo.item1": "Maintained vessel-to-shore VPNs, Starlink, 4G, and satellite links. Worked with captains and crews in English to troubleshoot connectivity.",
        "experience.dfo.item2": "Administered Microsoft 365, Exchange, multifactor authentication, and DNS-based email authentication. Maintained SQL Server, TM Master, and Oracle NetSuite.",
        "experience.dfo.item3": "Managed NAS and cloud backups and contributed to ISO 27001 internal audits and security process improvements.",
        "experience.ninetySeven.period": "Mar 2023–Mar 2024",
        "experience.ninetySeven.role": "IT / Systems Engineer",
        "experience.ninetySeven.company": "97 Technology Co., Ltd.",
        "experience.ninetySeven.item1": "Operated production environments on Google Cloud and AWS, including GKE, and managed CDNs, DNS, Nginx caching, and TLS certificates.",
        "experience.ninetySeven.item2": "Built deployment pipelines with Jenkins, Helm, and Docker and automated release tasks with Groovy and Python.",
        "experience.ninetySeven.item3": "Investigated incidents with ELK, Prometheus, and Grafana. Built internal management and alerting tools with Node.js and Vue and took part in a 24/7 on-call rotation.",
        "experience.genesis.period": "Sep 2021–Feb 2023",
        "experience.genesis.role": "Systems & Network Engineer",
        "experience.genesis.company": "Genesis Technology, Inc.",
        "experience.genesis.item1": "Helped build factory networks and upgrade firewalls across sites. Maintained Cisco Nexus, UCS, MDS, and storage area networks.",
        "experience.genesis.item2": "Maintained VMware ESXi, vCenter, NSX-T, and NetApp storage, and managed backups with Veeam and NetBackup.",
        "experience.genesis.item3": "Provided on-call support. During this period, customer satisfaction averaged 9.6/10 and the case resolution rate was 100%.",
        "experience.taifon.period": "Sep 2020–Jun 2021",
        "experience.taifon.role": "On-site Systems Engineer, Ministry of Finance Printing Plant",
        "experience.taifon.company": "Taifon Computer Co., Ltd.",
        "experience.taifon.item1": "Supported the Ministry of Finance Printing Plant and 325 uniform-invoice distribution sites nationwide, maintaining systems and troubleshooting service issues.",
        "experience.taifon.item2": "Maintained Windows Server, Linux, IBM AIX, and VMware environments as well as Oracle 11g, MySQL, and enterprise application servers.",
        "experience.taifon.item3": "Took part in disaster recovery drills with Dell EMC NetWorker and tape backups, and scanned for and remediated vulnerabilities.",
        "experience.google.period": "Oct 2019–Jun 2020",
        "experience.google.role": "Hardware Maintenance Engineer",
        "experience.google.company": "Google International LLC Taiwan Branch",
        "experience.google.item1": "Diagnosed and replaced server CPUs, memory, GPUs, motherboards, and storage devices. Peak workload exceeded 100 units in a day.",
        "experience.google.item2": "Installed and identified fiber links and securely erased and destroyed retired drives.",
        "experience.google.item3": "Coordinated equipment inspections, repairs, and replacements with an international engineering team.",
        "experience.university.period": "Mar 2018–Jul 2019",
        "experience.university.role": "Administrative Assistant (part-time)",
        "experience.university.company": "National Chung Hsing University",
        "experience.university.item1": "Coordinated talks, company visits, and workshops, provided on-site support, and photographed and edited video from events.",
        "experience.studio.period": "Jul 2013–Jul 2014",
        "experience.studio.role": "PC Assembly and Repair Technician (part-time)",
        "experience.studio.company": "Shenbao Technology Studio",
        "experience.studio.item1": "Assembled and repaired desktops and laptops and ran hardware diagnostics and burn-in tests on CPUs, memory, and storage.",
        "experience.studio.item2": "Installed Windows and backed up and restored customer systems with Acronis and Symantec Ghost.",
        "certifications.title": "Professional Certifications",
        "certifications.cloud": "Cloud & AI",
        "certifications.azureCore": "Microsoft Azure Fundamentals (AZ-900), Administrator (AZ-104), and Solutions Architect (AZ-305)",
        "certifications.azureAI": "Azure AI Fundamentals (AI-900), AI Engineer (AI-102), and Data Fundamentals (DP-900)",
        "certifications.security": "Cybersecurity",
        "certifications.microsoftSecurity": "Microsoft security fundamentals (SC-900), security operations (SC-200), identity and access (SC-300), and information protection (SC-400)",
        "certifications.infrastructure": "Infrastructure & Networking",
        "certifications.netapp": "NetApp Technology Associate, Hybrid Cloud Administrator, Hybrid Cloud Implementation Engineer, SAN Specialist, and Storage Installation Engineer",
        "certifications.systems": "Systems & Databases",
        "certifications.iso": "ISO 27001 Lead Auditor",
        "education.title": "Education & Community",
        "education.nthu.name": "National Tsing Hua University",
        "education.nthu.degree": "M.S. in Cybersecurity · Enrolled September 2024 · Expected graduation December 2026",
        "education.nchu.name": "National Chung Hsing University",
        "education.nchu.degree": "Bachelor’s degree in Management Information Systems · Sep 2015–Jun 2019",
        "education.languages.title": "Language qualifications",
        "education.languages.body": "JLPT N2 in Japanese and a TOEIC score of 690 in English.",
        "education.volunteer.title": "Hsinchu Wild Bird Society｜Wild Bird Rescue Volunteer",
        "education.volunteer.period": "Mar 2025–present",
        "education.volunteer.body": "Assist with wild bird rescue, risk assessment, first response, case documentation, and public communication.",
        "education.leadership.title": "YMCA international volunteer team leader",
        "education.leadership.period": "Aug 2018–May 2019",
        "education.leadership.body": "Led volunteer exchange groups in South Korea and the Philippines, helped volunteers plan activities, and coordinated itinerary changes with local partners.",
        "education.award.title": "Lost-dog registry | University-level bronze award",
        "education.award.body": "For the National Charity, Technology and Humanities Web Design Competition, designed registration, search, and notification APIs for a lost-dog registry, and connected the front end to a Node.js, Express, and MySQL back end.",
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
