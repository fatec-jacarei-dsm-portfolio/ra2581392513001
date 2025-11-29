// cv.js — CORRIGIDO
const cvTranslations = {
  pt: {
    download: "📥 Baixar PDF",
    cvTitle: "Desenvolvedor Full-Stack",
    introTitle: "Currículo Profissional",
    introSkills: "HTML • CSS • React • Python • TypeScript",
    introDescription:
      "Desenvolvedor Full-Stack com foco em soluções robustas e escalaveis. Atualmente professor de inglês na Wizard Jacareí, combinando habilidades pedagógicas com conhecimentos em desenvolvimento de software. Em constante aprendizado com React, Python e TypeScript, buscando crescer na área de tecnologia. Procuro oportunidades para aplicar minha experiência e desenvolver minhas habilidades técnicas em projetos desafiadores.",
    experienceTitle: "Experiência Profissional",
    exp1Title: "Professor de Inglês",
    exp1Company: "Wizard Jacareí",
    exp1Date: "2025 - Atual",
    exp1Description:
      "Responsável pelo ensino de inglês para diferentes níveis e faixas etárias, desenvolvendo planos de aula personalizados e aplicando metodologias inovadoras. Experiência com aulas presenciais e online, utilizando tecnologia educacional para otimizar o aprendizado. Acompanhamento individual do progresso dos estudantes e aplicação de avaliações formativas e somativas.",
    exp2Title: "Desenvolvedor Full-Stack",
    exp2Company: "Projetos Pessoais",
    exp2Date: "2025 - Atual",
    exp2Description:
      "Desenvolvedor iniciante focado em projetos pessoais e de estudo utilizando tecnologias como React, Python e TypeScript. Em processo de aprendizado contínuo para criação de interfaces responsivas e desenvolvimento de APIs. Participação em comunidades de desenvolvedores e busca constante por novos conhecimentos e práticas de programação.",
    educationTitle: "Formação Acadêmica",
    edu1Title: "Tecnólogo em Desenvolvimento de Software Multiplataforma",
    edu1Company: "FATEC Jacareí",
    edu1Date: "Cursando",
    edu1Description:
      "Curso superior focado em desenvolvimento multiplataforma, arquitetura de software, metodologias ágeis e tecnologias emergentes. Aprendizado prático em linguagens de programação, desenvolvimento web, mobile e desktop, além de conceitos fundamentais de engenharia de software.",
    projectsTitle: "Projetos em Destaque",
    proj1Title: "Gerenciamento Pedagógico",
    proj1Description:
      "Site de gerenciamento pedagógico, projeto CRUD, com autenticação JWT, backend em JavaScript, banco de dados em PostgreSQL, e deploy em nuvem. Site com perfis de convidado e administrador, com foco na alteração, personalização e atualização de informações pedagógicas em tempo real com WebSocket.",
    proj2Title: "Amazon RE-Flow",
    proj2Description:
      "Dashboard de análise de reviews da Amazon, pipeline ETL + NLP para  extração, limpeza, enriquecimento e exportação de dados. Análise de sentimento (VADER) e extração de keywords por review, backend em Python (Flask) com SQLAlchemy/SQLite local, frontend em HTML/JS (Bootstrap + Chart.js). Gera CSVs prontos para Google Sheets /Looker Studio. Foco em automação, reprodutibilidade e visualizações interativas.",
    proj3Title: "BDLimnologico",
    proj3Description:
      "Sistema web interativo para visualização e análise de dados limnológicos coletados por instituições parceiras do INPE. O projeto integra um frontend React e um backend TypeScript com um banco de dados PostgreSQL. Ele permite filtrar e consultar parâmetros abióticos e bióticos por reservatório, instituição e período de tempo, além de visualizar gráficos, tabelas e mapas interativos. Inclui autenticação, paginação e filtros combinados, com foco em desempenho, acessibilidade e escalabilidade científica.",
    skillsTitle: "Habilidades Técnicas",
    languagesTitle: "Idiomas",
    methodologiesTitle: "Metodologias",
    competencesTitle: "⚡ Competências",
    languagesList: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Fluente" },
    ],
    methodologiesList: [
      "Metodologias Ágeis",
      "Scrum",
      "Clean Code",
      "Versionamento Git",
      "Responsive Design",
    ],
    competences: [
      {
        title: "Ensino & Comunicação",
        content: "Didática, oratória, comunicação interpessoal",
      },
      {
        title: "Soft Skills",
        content: "Liderança, trabalho em equipe, adaptabilidade",
      },
      { title: "Ferramentas", content: "VS Code, Node.js, npm, Figma" },
    ],
  },

  en: {
    download: "📥 Download PDF",
    cvTitle: "Full-Stack Developer",
    introTitle: "Professional Resume",
    introSkills: "HTML • CSS • React • Python • TypeScript",
    introDescription:
      "Full-stack developer focused on robust and scalable solutions. Currently an English teacher at Wizard Jacareí, combining teaching skills with software development expertise. Constantly learning React, Python, and TypeScript, I strive to grow in the technology field. I seek opportunities to apply my experience and develop my technical skills in challenging projects.",
    experienceTitle: "Professional Experience",
    exp1Title: "English Teacher",
    exp1Company: "Wizard Jacareí",
    exp1Date: "2025 - Present",
    exp1Description:
      "Responsible for teaching English to different levels and age groups, developing personalized lesson plans and applying innovative methodologies. Experience with both in-person and online classes, using educational technology to optimize learning. Individual monitoring of student progress and application of formative and summative assessments.",
    exp2Title: "Full-Stack Developer",
    exp2Company: "Personal Projects",
    exp2Date: "2025 - Present",
    exp2Description:
      "Beginner developer focused on personal and study projects using technologies such as React, Python, and TypeScript. In continuous learning process to create responsive interfaces and develop APIs. Active participant in developer communities, constantly seeking new knowledge and programming practices.",
    educationTitle: "Education",
    edu1Title: "Technologist in Multiplatform Software Development",
    edu1Company: "FATEC Jacareí",
    edu1Date: "Ongoing",
    edu1Description:
      "Undergraduate course focused on multiplatform development, software architecture, agile methodologies, and emerging technologies. Hands-on learning in programming languages, web, mobile, and desktop development, as well as fundamental concepts of software engineering.",
    projectsTitle: "Highlighted Projects",
    proj1Title: "Pedagogical Management",
    proj1Description:
      "Pedagogical management website, CRUD project, with JWT authentication, backend in JavaScript, PostgreSQL database, and cloud deployment. Site includes guest and admin profiles, focused on real-time modification, customization, and updating of pedagogical information via WebSocket.",
    proj2Title: "Amazon RE-Flow",
    proj2Description:
      "Amazon review analysis dashboard with an ETL + NLP pipeline for data extraction, cleansing, enrichment, and export. Sentiment analysis (VADER) and keyword extraction by review. Python (Flask) backend with local SQLAlchemy/SQLite, HTML/JS frontend (Bootstrap + Chart.js). Generates CSV files ready for Google Sheets/Looker Studio. Focused on automation, reproducibility, and interactive visualizations.",
    proj3Title: "BDLimnologico",
    proj3Description:
      "Interactive web system for visualization and analysis of limnological data collected by INPE partner institutions. The project integrates a React frontend and a TypeScript backend with a PostgreSQL database. It allows filtering and querying abiotic and biotic parameters by reservoir, institution, and time period, as well as viewing interactive graphs, tables, and maps. It includes authentication, pagination, and combined filters with a focus on performance, accessibility, and scientific scalability.",
    skillsTitle: "Technical Skills",
    languagesTitle: "Languages",
    methodologiesTitle: "Methodologies",
    competencesTitle: "⚡ Competences",
    languagesList: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Fluent" },
    ],
    methodologiesList: [
      "Agile Methodologies",
      "Scrum",
      "Clean Code",
      "Version Control (Git)",
      "Responsive Design",
    ],
    competences: [
      {
        title: "Teaching & Communication",
        content: "Didactics, public speaking, interpersonal communication",
      },
      { title: "Soft Skills", content: "Leadership, teamwork, adaptability" },
      { title: "Tools", content: "VS Code, Node.js, npm, Figma" },
    ],
  },
};

function applyCvLanguage(lang) {
  const t = cvTranslations[lang] || cvTranslations.pt;

  // Botão
  const btn = document.getElementById("cv-download");
  if (btn) btn.textContent = t.download;

  // Header title (abaixo do nome)
  const cvTitleEl = document.getElementById("cv-title");
  if (cvTitleEl) cvTitleEl.textContent = t.cvTitle;

  // Intro
  const introTitle = document.querySelector(".intro-title");
  if (introTitle) introTitle.textContent = t.introTitle;

  const introSkills = document.querySelector(".intro-skills");
  if (introSkills) introSkills.textContent = t.introSkills;

  const cvSummary = document.getElementById("cv-summary");
  if (cvSummary) cvSummary.textContent = t.introDescription;

  // Experiência
  const expTitle = document.getElementById("cv-experience-title");
  if (expTitle) expTitle.textContent = t.experienceTitle;

  const exp1 = document.querySelector("#cv-experience-item");
  if (exp1) {
    const elTitle = exp1.querySelector(".timeline-title");
    const elCompany = exp1.querySelector(".timeline-company");
    const elDate = exp1.querySelector(".timeline-date");
    const elDesc = exp1.querySelector(".timeline-description");
    if (elTitle) elTitle.textContent = t.exp1Title;
    if (elCompany) elCompany.textContent = t.exp1Company;
    if (elDate) elDate.textContent = t.exp1Date;
    if (elDesc) elDesc.textContent = t.exp1Description;
  }

  const exp2 = document.querySelectorAll(".timeline-item")[1];
  if (exp2) {
    const elTitle = exp2.querySelector(".timeline-title");
    const elCompany = exp2.querySelector(".timeline-company");
    const elDate = exp2.querySelector(".timeline-date");
    const elDesc = exp2.querySelector(".timeline-description");
    if (elTitle) elTitle.textContent = t.exp2Title;
    if (elCompany) elCompany.textContent = t.exp2Company;
    if (elDate) elDate.textContent = t.exp2Date;
    if (elDesc) elDesc.textContent = t.exp2Description;
  }

  // Formação
  const eduTitle = document.getElementById("cv-education-title");
  if (eduTitle) eduTitle.textContent = t.educationTitle;

  const edu1 = document.getElementById("cv-education-item");
  if (edu1) {
    const elTitle = edu1.querySelector(".timeline-title");
    const elCompany = edu1.querySelector(".timeline-company");
    const elDate = edu1.querySelector(".timeline-date");
    const elDesc = edu1.querySelector(".timeline-description");
    if (elTitle) elTitle.textContent = t.edu1Title;
    if (elCompany) elCompany.textContent = t.edu1Company;
    if (elDate) elDate.textContent = t.edu1Date;
    if (elDesc) elDesc.textContent = t.edu1Description;
  }

  // Projetos: traduz todos os project-cards por índice (proj1, proj2, proj3, ...)
  const mainSectionTitles = document.querySelectorAll(".main-section-title");
  if (mainSectionTitles.length) {
    mainSectionTitles[mainSectionTitles.length - 1].textContent =
      t.projectsTitle;
  }

  const projCards = document.querySelectorAll(".project-card");
  projCards.forEach((card, idx) => {
    // prioridade para data-i18n (se quiser marcar cards individualmente)
    const dataTitle = card.getAttribute("data-i18n-title");
    const dataDesc = card.getAttribute("data-i18n-desc");

    const titleKey = dataTitle ? dataTitle : `proj${idx + 1}Title`;
    const descKey = dataDesc ? dataDesc : `proj${idx + 1}Description`;

    if (t[titleKey]) {
      const titleEl = card.querySelector(".project-title");
      if (titleEl) titleEl.textContent = t[titleKey];
    }
    if (t[descKey]) {
      const descEl = card.querySelector(".project-description");
      if (descEl) descEl.textContent = t[descKey];
    }
  });

  // Sidebar – títulos
  const sectionTitles = document.querySelectorAll(".section-title");
  if (sectionTitles[0]) sectionTitles[0].textContent = t.skillsTitle;
  if (sectionTitles[1]) sectionTitles[1].textContent = t.languagesTitle;
  if (sectionTitles[2]) sectionTitles[2].textContent = t.methodologiesTitle;
  if (sectionTitles[3]) sectionTitles[3].textContent = t.competencesTitle;

  // Sidebar – Idiomas
  const langGrid = document.querySelector(".languages-grid");
  if (langGrid) {
    langGrid.innerHTML = "";
    t.languagesList.forEach((li) => {
      const div = document.createElement("div");
      div.className = "language-item";
      div.innerHTML = `<span class="language-name">${li.name}</span>
                       <span class="language-level">${li.level}</span>`;
      langGrid.appendChild(div);
    });
  }

  // Sidebar – Metodologias
  const methUl = document.querySelector(".methodologies-list");
  if (methUl) {
    methUl.innerHTML = "";
    t.methodologiesList.forEach((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      methUl.appendChild(li);
    });
  }

  // Sidebar – Competências
  const compCats = document.querySelectorAll(
    ".additional-skills .skill-category"
  );
  if (compCats.length) {
    t.competences.forEach((c, i) => {
      if (!compCats[i]) return;
      const titleEl = compCats[i].querySelector(".skill-category-title");
      const contentEl = compCats[i].querySelector(".skill-category-content");
      if (titleEl) titleEl.textContent = c.title;
      if (contentEl) contentEl.textContent = c.content;
    });
  }

  // Atualiza atributo lang do HTML
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
}

// espera o DOM
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "pt";
  applyCvLanguage(lang);
});
