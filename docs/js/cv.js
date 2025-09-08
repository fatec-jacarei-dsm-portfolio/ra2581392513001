const cvTranslations = {
  pt: {
    // Botão
    download: "📥 Baixar PDF",

    // Header
    cvTitle: "Desenvolvedor Full-Stack",

    // Intro
    introTitle: "Currículo Profissional",
    introSkills: "HTML • CSS • React • Python • TypeScript",
    introDescription:
      "Desenvolvedor Full-Stack iniciante apaixonado por criar soluções digitais e interfaces intuitivas. Atualmente professor de inglês na Wizard Jacareí, combinando habilidades pedagógicas com conhecimentos em desenvolvimento web. Em constante aprendizado com React, Python e TypeScript, buscando crescer na área de tecnologia. Procuro oportunidades para aplicar minha experiência em educação e desenvolver minhas habilidades técnicas em projetos desafiadores.",

    // Experiência
    experienceTitle: "Experiência Profissional",
    exp1Title: "Professor de Inglês",
    exp1Company: "Wizard Jacareí",
    exp1Date: "Atual",
    exp1Description:
      "Responsável pelo ensino de inglês para diferentes níveis e faixas etárias, desenvolvendo planos de aula personalizados e aplicando metodologias inovadoras. Experiência com aulas presenciais e online, utilizando tecnologia educacional para otimizar o aprendizado. Acompanhamento individual do progresso dos estudantes e aplicação de avaliações formativas e somativas.",

    exp2Title: "Desenvolvedor Full-Stack",
    exp2Company: "Projetos Pessoais",
    exp2Date: "2025 - Atual",
    exp2Description:
      "Desenvolvedor iniciante focado em projetos pessoais e de estudo utilizando tecnologias como React, Python e TypeScript. Em processo de aprendizado contínuo para criação de interfaces responsivas e desenvolvimento de APIs. Participação em comunidades de desenvolvedores e busca constante por novos conhecimentos e práticas de programação.",

    // Formação
    educationTitle: "Formação Acadêmica",
    edu1Title: "Tecnólogo em Desenvolvimento de Software Multiplataforma",
    edu1Company: "FATEC Jacareí",
    edu1Date: "Cursando",
    edu1Description:
      "Curso superior focado em desenvolvimento multiplataforma, arquitetura de software, metodologias ágeis e tecnologias emergentes. Aprendizado prático em linguagens de programação, desenvolvimento web, mobile e desktop, além de conceitos fundamentais de engenharia de software.",

    // Projetos
    projectsTitle: "Projetos em Destaque",
    proj1Title: "Error-Squad Frontend",
    proj1Description:
      "Site de gerenciamento pedagógico, projeto CRUD, com autenticação JWT, backend em JavaScript, banco de dados em PostgreSQL, e deploy em nuvem. Site com perfis de convidado e administrador, com foco na alteração, personalização e atualização de informações pedagógicas em tempo real com WebSocket.",
    proj2Title: "Portfólio Pessoal (em desenvolvimento)",
    proj2Description:
      "Portfólio pessoal moderno em desenvolvimento, apresentando projetos, habilidades e experiência profissional. Utiliza React com TypeScript para uma experiência interativa, com animações suaves, design responsivo e otimização de performance. Interface intuitiva que demonstra capacidades técnicas e criativas em constante evolução.",

    // Sidebar – títulos
    skillsTitle: "Habilidades Técnicas",
    languagesTitle: "Idiomas",
    methodologiesTitle: "Metodologias",
    competencesTitle: "⚡ Competências",

    // Sidebar – conteúdo
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
      {
        title: "Ferramentas",
        content: "VS Code, Node.js, npm, Figma",
      },
    ],
  },

  en: {
    // Button
    download: "📥 Download PDF",

    // Header
    cvTitle: "Full-Stack Developer",

    // Intro
    introTitle: "Professional Resume",
    introSkills: "HTML • CSS • React • Python • TypeScript",
    introDescription:
      "Junior Full-Stack developer passionate about creating digital solutions and intuitive interfaces. Currently an English teacher at Wizard Jacareí, combining pedagogical skills with web development knowledge. Constantly learning React, Python, and TypeScript, aiming to grow in the tech field. Looking for opportunities to apply my teaching experience and enhance my technical skills in challenging projects.",

    // Experience
    experienceTitle: "Professional Experience",
    exp1Title: "English Teacher",
    exp1Company: "Wizard Jacareí",
    exp1Date: "Present",
    exp1Description:
      "Responsible for teaching English to different levels and age groups, developing personalized lesson plans and applying innovative methodologies. Experience with both in-person and online classes, using educational technology to optimize learning. Individual monitoring of student progress and application of formative and summative assessments.",

    exp2Title: "Full-Stack Developer",
    exp2Company: "Personal Projects",
    exp2Date: "2025 - Present",
    exp2Description:
      "Beginner developer focused on personal and study projects using technologies such as React, Python, and TypeScript. In continuous learning process to create responsive interfaces and develop APIs. Active participant in developer communities, constantly seeking new knowledge and programming practices.",

    // Education
    educationTitle: "Education",
    edu1Title: "Technologist in Multiplatform Software Development",
    edu1Company: "FATEC Jacareí",
    edu1Date: "Ongoing",
    edu1Description:
      "Undergraduate course focused on multiplatform development, software architecture, agile methodologies, and emerging technologies. Hands-on learning in programming languages, web, mobile, and desktop development, as well as fundamental concepts of software engineering.",

    // Projects
    projectsTitle: "Highlighted Projects",
    proj1Title: "Error-Squad Frontend",
    proj1Description:
      "Pedagogical management website, CRUD project, with JWT authentication, backend in JavaScript, PostgreSQL database, and cloud deployment. Site includes guest and admin profiles, focused on real-time modification, customization, and updating of pedagogical information via WebSocket.",
    proj2Title: "Personal Portfolio (in development)",
    proj2Description:
      "Modern personal portfolio under development, showcasing projects, skills, and professional experience. Built with React and TypeScript for an interactive experience, smooth animations, responsive design, and performance optimization. Intuitive interface that demonstrates evolving technical and creative skills.",

    // Sidebar – titles
    skillsTitle: "Technical Skills",
    languagesTitle: "Languages",
    methodologiesTitle: "Methodologies",
    competencesTitle: "⚡ Competences",

    // Sidebar – content
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
      {
        title: "Soft Skills",
        content: "Leadership, teamwork, adaptability",
      },
      {
        title: "Tools",
        content: "VS Code, Node.js, npm, Figma",
      },
    ],
  },
};

function applyCvLanguage(lang) {
  const t = cvTranslations[lang];

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
    exp1.querySelector(".timeline-title").textContent = t.exp1Title;
    exp1.querySelector(".timeline-company").textContent = t.exp1Company;
    exp1.querySelector(".timeline-date").textContent = t.exp1Date;
    exp1.querySelector(".timeline-description").textContent = t.exp1Description;
  }

  const exp2 = document.querySelectorAll(".timeline-item")[1];
  if (exp2) {
    exp2.querySelector(".timeline-title").textContent = t.exp2Title;
    exp2.querySelector(".timeline-company").textContent = t.exp2Company;
    exp2.querySelector(".timeline-date").textContent = t.exp2Date;
    exp2.querySelector(".timeline-description").textContent = t.exp2Description;
  }

  // Formação
  const eduTitle = document.getElementById("cv-education-title");
  if (eduTitle) eduTitle.textContent = t.educationTitle;

  const edu1 = document.getElementById("cv-education-item");
  if (edu1) {
    edu1.querySelector(".timeline-title").textContent = t.edu1Title;
    edu1.querySelector(".timeline-company").textContent = t.edu1Company;
    edu1.querySelector(".timeline-date").textContent = t.edu1Date;
    edu1.querySelector(".timeline-description").textContent = t.edu1Description;
  }

  // Projetos
  const mainSectionTitles = document.querySelectorAll(".main-section-title");
  if (mainSectionTitles.length) {
    mainSectionTitles[mainSectionTitles.length - 1].textContent = t.projectsTitle;
  }

  const proj1 = document.querySelectorAll(".project-card")[0];
  if (proj1) {
    proj1.querySelector(".project-title").textContent = t.proj1Title;
    proj1.querySelector(".project-description").textContent = t.proj1Description;
  }

  const proj2 = document.querySelectorAll(".project-card")[1];
  if (proj2) {
    proj2.querySelector(".project-title").textContent = t.proj2Title;
    proj2.querySelector(".project-description").textContent = t.proj2Description;
  }

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
  const compCats = document.querySelectorAll(".additional-skills .skill-category");
  if (compCats.length) {
    t.competences.forEach((c, i) => {
      if (!compCats[i]) return;
      compCats[i].querySelector(".skill-category-title").textContent = c.title;
      compCats[i].querySelector(".skill-category-content").textContent = c.content;
    });
  }

  // Atualiza atributo lang do HTML
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
}

// Espera DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "pt";
  applyCvLanguage(lang);
});
