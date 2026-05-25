/* ============================================================
   Content + translations (EN / DE). Edit text here.
   ============================================================ */
window.PORTFOLIO = {

  /* ---- static UI strings ---- */
  ui: {
    en: {
      "meta.description": "Swarit Tiwari — Mechanical Engineer specialising in Additive Manufacturing, CAD, topology optimization and FEA.",
      "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects",
      "nav.experience": "Experience", "nav.contact": "Contact",
      "hero.kicker": "// MECHANICAL ENGINEER · ADDITIVE MANUFACTURING",
      "hero.role": "Mechanical Engineer — Additive Manufacturing &amp; Design",
      "hero.lead": "M.Sc. Mechanical Engineering and Management graduate from TU Hamburg, focused on mechanical design, CAD/CAE, additive manufacturing and product development.",
      "hero.cta1": "View Projects", "hero.cta2": "Get in Touch",
      "hero.stat1": "PROJECTS", "hero.stat2": "WASTE REDUCED", "hero.stat3": "LESS DOC. TIME", "hero.stat4": "HACKATHON",
      "about.title": "About",
      "about.p1": "I'm a mechanical engineering M.Sc. student at the Technical University of Hamburg (TUHH), with a bachelor's background from Gujarat Technological University, India. My work centres on <strong>Design for Additive Manufacturing (DfAM)</strong> — turning real constraints into printable, functional hardware.",
      "about.p2": "Across my projects I've engineered single-print moving mechanisms, run topology optimization and FEA to cut mass without losing strength, and led a six-month maritime decarbonization research project. I'm equally comfortable in CAD, in the slicer, and managing a team on a Kanban board.",
      "about.p3": "I like problems where the manufacturing method and the design have to be solved together — that's where additive manufacturing is most powerful.",
      "about.facts": "// QUICK FACTS",
      "about.f_location": "LOCATION", "about.f_location_v": "Hamburg, Germany",
      "about.f_focus": "FOCUS", "about.f_focus_v": "Additive Manufacturing · DfAM",
      "about.f_cad": "CAD",
      "about.f_lang": "LANGUAGES", "about.f_lang_v": "German B2 · English · Hindi",
      "skills.title": "Skills",
      "projects.title": "Projects",
      "projects.lead": "Selected engineering work — CAD, additive manufacturing and research.",
      "experience.title": "Experience &amp; Education",
      "contact.title": "Contact",
      "contact.lead": "Open to full-time roles in mechanical design, product development, CAD/CAE, additive manufacturing and manufacturing engineering.",
      "footer.built": "Built with HTML · CSS · JS",
      "cv.label": "View CV",
      "project.details": "View details",
      "project.github": "GitHub",
      "modal.loading": "Loading project README…",
      "modal.error": "Couldn't load the README here.",
      "modal.errorLink": "Open it on GitHub."
    },
    de: {
      "meta.description": "Swarit Tiwari — Maschinenbauingenieur mit Fokus auf Additive Fertigung, CAD, Topologieoptimierung und FEM.",
      "nav.about": "Über mich", "nav.skills": "Kenntnisse", "nav.projects": "Projekte",
      "nav.experience": "Werdegang", "nav.contact": "Kontakt",
      "hero.kicker": "// MASCHINENBAUINGENIEUR · ADDITIVE FERTIGUNG",
      "hero.role": "Maschinenbauingenieur — Additive Fertigung &amp; Konstruktion",
      "hero.lead": "M.Sc.-Student an der TU Hamburg. Ich konstruiere, optimiere und drucke funktionale Maschinenbauteile — von topologieoptimierten Strukturen bis zu Einzeldruck-Mechanismen.",
      "hero.cta1": "Projekte ansehen", "hero.cta2": "Kontakt aufnehmen",
      "hero.stat1": "PROJEKTE", "hero.stat2": "WENIGER AUSSCHUSS", "hero.stat3": "WENIGER DOKU-ZEIT", "hero.stat4": "HACKATHON",
      "about.title": "Über mich",
      "about.p1": "Ich bin Maschinenbau-Masterstudent an der Technischen Universität Hamburg (TUHH) mit Bachelor-Hintergrund von der Gujarat Technological University, Indien. Mein Schwerpunkt liegt auf <strong>Design for Additive Manufacturing (DfAM)</strong> — reale Anforderungen in druckbare, funktionale Hardware zu übersetzen.",
      "about.p2": "In meinen Projekten habe ich Einzeldruck-Mechanismen mit beweglichen Teilen konstruiert, Topologieoptimierung und FEM eingesetzt, um Masse ohne Festigkeitsverlust zu reduzieren, und ein sechsmonatiges Forschungsprojekt zur maritimen Dekarbonisierung geleitet. Im CAD, im Slicer und bei der Teamsteuerung auf einem Kanban-Board bin ich gleichermaßen zu Hause.",
      "about.p3": "Ich mag Aufgaben, bei denen Fertigungsverfahren und Konstruktion gemeinsam gelöst werden müssen — genau dort spielt die additive Fertigung ihre Stärke aus.",
      "about.facts": "// ECKDATEN",
      "about.f_location": "STANDORT", "about.f_location_v": "Hamburg, Deutschland",
      "about.f_focus": "FOKUS", "about.f_focus_v": "Additive Fertigung · DfAM",
      "about.f_cad": "CAD",
      "about.f_lang": "SPRACHEN", "about.f_lang_v": "Deutsch B2 · Englisch · Hindi",
      "skills.title": "Kenntnisse",
      "projects.title": "Projekte",
      "projects.lead": "Ausgewählte Ingenieurarbeiten — CAD, additive Fertigung und Forschung.",
      "experience.title": "Werdegang",
      "contact.title": "Kontakt",
      "contact.lead": "Offen für Praktika, Werkstudentenstellen und Zusammenarbeit in additiver Fertigung, Produktdesign und Simulation.",
      "footer.built": "Erstellt mit HTML · CSS · JS",
      "cv.label": "Lebenslauf",
      "project.details": "Details ansehen",
      "project.github": "GitHub",
      "modal.loading": "Projekt-README wird geladen…",
      "modal.error": "README konnte hier nicht geladen werden.",
      "modal.errorLink": "Auf GitHub öffnen."
    }
  },

  /* ---- skills ---- */
  skills: [
    { cat: { en: "CAD &amp; CAE", de: "CAD &amp; CAE" },
      items: ["CATIA (3DEXP)", "Siemens NX", "SolidWorks", "Fusion 360", "AutoCAD", "Inventor", "ANSYS"] },
    { cat: { en: "Manufacturing &amp; DfAM", de: "Fertigung &amp; DfAM" },
      items: { en: ["FFF / FDM 3D Printing", "PrusaSlicer", "Topology Optimization", "FEA / Static Sim.", "DfAM"],
               de: ["FFF / FDM 3D-Druck", "PrusaSlicer", "Topologieoptimierung", "FEM / Statiksimulation", "DfAM"] } },
    { cat: { en: "Programming &amp; Data", de: "Programmierung &amp; Daten" },
      items: ["Python", "Pandas", "NumPy", "MATLAB / Simulink", "SQL", "Power BI", "Tableau"] },
    { cat: { en: "Project &amp; Business", de: "Projekt &amp; Business" },
      items: { en: ["Jira (Agile/Kanban)", "SAP ERP", "Advanced Excel", "MS Office", "LaTeX"],
               de: ["Jira (Agile/Kanban)", "SAP ERP", "Excel (fortgeschr.)", "MS Office", "LaTeX"] } },
    { cat: { en: "Languages", de: "Sprachen" },
      items: { en: ["German — B2", "English — Fluent", "Hindi — Native"],
               de: ["Deutsch — B2", "Englisch — fließend", "Hindi — Muttersprache"] } }
  ],

  /* ---- featured projects (GitHub) ---- */
  projects: [
    {
      year: "2025/26", img: "assets/img/nlp_reviews.svg", repo: "restaurant-review-nlp",
      title: { en: "Restaurant Review NLP — Sentiment &amp; Topics", de: "Restaurant-Bewertungen NLP — Sentiment &amp; Themen" },
      role: { en: "Master Thesis · NLP / Data Science", de: "Masterarbeit · NLP / Data Science" },
      desc: {
        en: "Python NLP pipeline over 212,000+ Google Maps restaurant reviews. DistilBERT sentiment analysis plus BERTopic (UMAP + HDBSCAN) extract 140 themes from unstructured feedback and link review polarity to star ratings.",
        de: "Python-NLP-Pipeline für über 212.000 Google-Maps-Restaurantbewertungen. DistilBERT-Sentimentanalyse und BERTopic (UMAP + HDBSCAN) extrahieren 140 Themen aus unstrukturiertem Feedback und verknüpfen die Stimmung mit den Sterne-Bewertungen."
      },
      tags: ["Python", "BERTopic", "DistilBERT", "UMAP"]
    },
    {
      year: "2024/25", img: "assets/img/bridge_final.jpg", repo: "tuhh-3dprint-bridge-lab",
      title: { en: "Topology-Optimized PLA Bridge", de: "Topologieoptimierte PLA-Brücke" },
      role: { en: "Product Design · CAD + FEA", de: "Produktdesign · CAD + FEM" },
      desc: {
        en: "3-point-load bridge for the TUHH 3D-Printing Lab. Topology optimization in SolidWorks cut mass to 172.6 g, while a Japanese Koshikake-Aritsugi dovetail joins both printed halves without glue. Held &gt;500 N — over 2.9 N/g strength-to-weight.",
        de: "3-Punkt-belastete Brücke für das 3D-Druck-Labor der TUHH. Topologieoptimierung in SolidWorks reduzierte die Masse auf 172,6 g; eine japanische Koshikake-Aritsugi-Schwalbenschwanzverbindung fügt beide Druckhälften ohne Klebstoff. Hielt &gt;500 N — über 2,9 N/g Festigkeit-zu-Gewicht."
      },
      tags: ["SolidWorks", "Topology Opt.", "FEA", "PrusaSlicer"]
    },
    {
      year: "2024", img: "assets/img/maritime_ranking.png", repo: "maritime-alternative-fuels-evaluation",
      title: { en: "Maritime Alternative Fuels Evaluation", de: "Bewertung alternativer Schiffskraftstoffe" },
      role: { en: "Project Leader · Fraunhofer CML", de: "Projektleiter · Fraunhofer CML" },
      desc: {
        en: "Research project (Studienarbeit, grade 1.7) ranking 13 alternative marine fuels across 11 weighted parameters. Built the weighted scoring matrix and Power BI dashboards and led the team via Jira across a 6-month agile cycle. LNG, biodiesel and LNG+battery emerged as the best bridging fuels.",
        de: "Studienarbeit (Note 1,7): Bewertung von 13 alternativen Schiffskraftstoffen anhand von 11 gewichteten Parametern. Aufbau der gewichteten Scoring-Matrix und Power-BI-Dashboards sowie Teamleitung über Jira in einem 6-monatigen agilen Zyklus. LNG, Biodiesel und LNG+Batterie als beste Brückenkraftstoffe."
      },
      tags: ["Power BI", "Jira", "Research", "Scoring Matrix"]
    },
    {
      year: "2023", img: "assets/img/jesca_car.jpg", repo: "jesca-single-print-race-car",
      title: { en: "JESCA — Single-Print Race Car", de: "JESCA — Einzeldruck-Rennwagen" },
      role: { en: "Additive Manufacturing · DfAM", de: "Additive Fertigung · DfAM" },
      desc: {
        en: "A fully working miniature car printed as ONE part — wheels spinning straight off the bed, no assembly. A 0.28 mm calibrated clearance and conical-flange axles, validated through a 5-design axle test phase, achieved free rotation without any hardware.",
        de: "Ein voll funktionsfähiges Mini-Auto, gedruckt als EIN Teil — die Räder drehen direkt von der Druckplatte, ohne Montage. Ein kalibriertes Spiel von 0,28 mm und konische Flanschachsen, validiert über eine Achsen-Testreihe mit 5 Designs, ermöglichten freie Rotation ohne jegliche Hardware."
      },
      tags: ["Fusion 360", "SolidWorks", "DfAM", "Prusa MINI+"]
    },
    {
      year: "2020", img: "assets/img/neutralizer_full.png", repo: "neutralizer-sanitization-station",
      badge: { en: "🥈 2nd Place", de: "🥈 2. Platz" },
      title: { en: "Neutralizer — Sanitization Station", de: "Neutralizer — Desinfektionsstation" },
      role: { en: "CAD Concept · Autodesk Hackathon", de: "CAD-Konzept · Autodesk Hackathon" },
      desc: {
        en: "2nd-place concept at the Autodesk Student Hackathon: a contactless entry-hygiene station integrating a UV-C bag chamber, pneumatic glove dispenser, disinfectant spray and IR temperature screening — modelled as a full Fusion 360 assembly.",
        de: "Konzept mit 2. Platz beim Autodesk Student Hackathon: eine kontaktlose Hygienestation für den Eingangsbereich mit UV-C-Kammer für Taschen, pneumatischem Handschuhspender, Desinfektionssprühung und IR-Temperaturmessung — als vollständige Fusion-360-Baugruppe modelliert."
      },
      tags: ["Fusion 360", "Concept Design", "Rendering"]
    },
    {
      year: "2019", img: "assets/img/clamp_cad.png", repo: "multipurpose-table-clamp",
      title: { en: "Multipurpose Table Clamp", de: "Multifunktions-Tischklemme" },
      role: { en: "DfAM · Hackathon", de: "DfAM · Hackathon" },
      desc: {
        en: "A 3D-printed C-clamp solving a real canteen problem — bag hook, phone stand and bottle opener in one 60×50 mm part, with printed threads on the tightening bolt so no metal hardware is needed.",
        de: "Eine 3D-gedruckte C-Klemme als Lösung für ein echtes Mensa-Problem — Taschenhaken, Handyhalter und Flaschenöffner in einem 60×50 mm Bauteil, mit gedruckten Gewinden an der Spannschraube, sodass keine Metallhardware nötig ist."
      },
      tags: ["Fusion 360", "DfAM", "Printed Threads"]
    }
  ],

  /* ---- experience & education timeline (newest first) ---- */
  timeline: [
    {
      type: "education", period: "10/2022 – 03/2026",
      badge: { en: "M.Sc.", de: "M.Sc." },
      title: { en: "M.Sc. Mechanical Engineering &amp; Management", de: "M.Sc. Maschinenbau und Management" },
      org: { en: "Technische Universität Hamburg, Germany", de: "Technische Universität Hamburg, DE" },
      points: {
        en: ["Focus areas: Additive Manufacturing, Fatigue &amp; Damage Tolerance, Project Management, Robotics, Logistics &amp; Supply Chain."],
        de: ["Schwerpunkte: Additive Fertigung, Ermüdung &amp; Schadenstoleranz, Projektmanagement, Robotik, Logistik &amp; Supply Chain Management."]
      }
    },
    {
      type: "thesis", period: "09/2025 – 02/2026",
      badge: { en: "Master Thesis", de: "Masterarbeit" },
      title: { en: "Sentiment Analysis &amp; Topic Modelling of 1M+ Reviews", de: "Sentimentanalyse &amp; Topic Modelling von 1M+ Bewertungen" },
      org: { en: "TU Hamburg", de: "TU Hamburg" },
      points: {
        en: ["Built a Python NLP pipeline analysing 212,000+ Google reviews filtered from a 1M+ dataset.",
             "Used DistilBERT for sentiment and BERTopic to extract 140 topics from unstructured feedback.",
             "Linked sentiment polarity to star ratings and surfaced key issues via semantic clustering."],
        de: ["Python-NLP-Pipeline zur Analyse von über 212.000 Google-Rezensionen, gefiltert aus 1M+ Bewertungen.",
             "Einsatz von DistilBERT (Sentiment) und BERTopic zur Extraktion von 140 Themen aus unstrukturiertem Feedback.",
             "Verknüpfung von Stimmungspolarität mit Sterne-Bewertungen; zentrale Probleme via semantischem Clustering identifiziert."]
      },
      meta: ["Python", "BERTopic", "DistilBERT", "Pandas"]
    },
    {
      type: "work", period: "07/2021 – 08/2022",
      badge: { en: "Design Engineer", de: "Entwicklungsingenieur" },
      title: { en: "Junior Design Engineer", de: "Junior-Entwicklungsingenieur" },
      org: { en: "GERENT, India", de: "GERENT, Indien" },
      points: {
        en: ["Engineered and validated mechanical components in Fusion 360 (modelling) and ANSYS (simulation).",
             "Optimised manufacturing processes — 35% reduction in production-line waste.",
             "Automated certification generation with Python/VBA — documentation time cut by 75%."],
        de: ["Entwicklung und Validierung von Maschinenbauteilen mit Fusion 360 (Modellierung) und ANSYS (Simulation).",
             "Optimierung von Fertigungsprozessen — 35 % weniger Produktionsausschuss.",
             "Automatisierung der Zertifikatserstellung mit Python/VBA — Dokumentationsaufwand um 75 % reduziert."]
      },
      meta: ["Fusion 360", "ANSYS", "Python/VBA"]
    },
    {
      type: "education", period: "07/2017 – 07/2021",
      badge: { en: "B.Eng.", de: "B.Eng." },
      title: { en: "B.Eng. Mechanical Engineering", de: "B.Eng. Maschinenbau" },
      org: { en: "Gujarat Technological University, India", de: "Gujarat Technological University, Indien" },
      points: { en: [], de: [] }
    },
    {
      type: "thesis", period: "12/2020 – 04/2021",
      badge: { en: "Bachelor Thesis", de: "Bachelorarbeit" },
      title: { en: "Regenerative Braking System for Bicycles", de: "Regeneratives Bremssystem für Fahrräder" },
      org: { en: "Gujarat Technological University, India", de: "Gujarat Technological University, Indien" },
      points: {
        en: ["Designed a complete energy-recovery braking solution as a modular front-wheel attachment.",
             "Simulated and validated energy recovery in Fusion 360, SolidWorks and ANSYS."],
        de: ["Entwicklung einer vollständigen rekuperativen Bremslösung als modularer Vorderradanbausatz.",
             "Simulation und Validierung der Energierückgewinnung mit Fusion 360, SolidWorks und ANSYS."]
      },
      meta: ["Fusion 360", "SolidWorks", "ANSYS"]
    },
    {
      type: "work", period: "06/2020 – 07/2020",
      badge: { en: "Internship", de: "Praktikum" },
      title: { en: "Intern", de: "Praktikant" },
      org: { en: "Gurukrupa Krafts Pvt. Ltd., India", de: "Gurukrupa Krafts Pvt. Ltd., Indien" },
      points: {
        en: ["Operated and maintained production machinery — lathe, CNC, VMC, gear cutters and hydraulic presses — gaining in-depth manufacturing knowledge."],
        de: ["Bedienung und Instandhaltung von Produktionsmaschinen (Drehmaschine, CNC, VMC, Zahnradfräser, Hydraulikpressen) sowie Aufbau fundierter Fertigungskenntnisse."]
      }
    }
  ],

  /* ---- CV files (per language) ---- */
  cvFiles: {
    en: "assets/cv/CV_Swarit_Tiwari_EN.pdf",
    de: "assets/cv/Lebenslauf_Swarit_Tiwari_DE.pdf"
  },

  /* ---- contact ---- */
  github_user: "Swarit786",
  contact: [
    { key: "EMAIL", value: "erswarittiwari@gmail.com", href: "mailto:erswarittiwari@gmail.com", icon: "mail" },
    { key: "PHONE", value: "+49 176 66155837", href: "tel:+4917666155837", icon: "phone" },
    { key: "LINKEDIN", value: "in/swarit-tiwari", href: "https://www.linkedin.com/in/swarit-tiwari-942153171", icon: "linkedin" },
    { key: "GITHUB", value: "github.com/Swarit786", href: "https://github.com/Swarit786", icon: "github" }
  ]
};
