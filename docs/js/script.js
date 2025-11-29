(function () {
  const translations = {
    pt: {
      home: "home",
      about: "sobre mim",
      skills: "habilidades",
      projects: "projetos",
      contact: "contato",
      heroGreeting: 'console.log("Olá, mundo!")',
      heroSubtitle: "Desenvolvedor Full Stack",
      heroDescription:
        "Meu objetivo é criar soluções robustas e escaláveis, além de experiências inovadoras para pessoas ao redor do mundo. Atualmente estudo Desenvolvimento de Software Multiplataforma na Fatec Jacareí, além de estudos autodidatas. Estou disposto a ajudar sempre com foco no trabalho em equipe utilizando uma comunicação eficaz e soluções eficientes.",
      heroBtnProjects: "Ver Projetos",
      heroBtnGithub: "GitHub",
      sectionAboutTitle: "Sobre Mim",
      sectionAboutSubtitle:
        "Desenvolvedor com foco em entregar eficiência e escalabilidade",
      aboutP1:
        "Estudando desenvolvimento Fullstack com foco em habilidades sólidas para desenvolvimento Front-end e Back-end, aplicadas em conjunto com soft skills como gestão e trabalho em equipe em projetos reais, utilizando metodologias ágeis em diferentes cargos, de desenvolvedor a scrum master.",
      aboutP2:
        "Atualmente professor de inglês na escola de idiomas Wizard, tendo domínio da língua inglesa podendo contribuir em equipes e projetos a nível internacional, além das habilidades e metodologias adquiridas.",
      aboutReturn: "Buscando crescimento e desafios",
      formation: "Formação Acadêmica",
      course: "Desenvolvimento de Software Multiplataforma",
      college: "FATEC Jacareí (2025–2027)",
      certifications: "Certificações",
      viewCertifications: "Ver Certificações",
      sectionSkillsTitle: "Habilidades",
      sectionSkillsSubtitle:
        "Tecnologias e ferramentas que utilizo no desenvolvimento",
      frontend: "Frontend",
      backend: "Backend & Banco de Dados",
      tools: "Ferramentas & Metodologias",
      sectionProjectsTitle: "Projetos",
      sectionProjectsSubtitle:
        "Alguns dos meus trabalhos e contribuições mais importantes",
      project1Title: "Gerenciamento Pedagógico",
      project1Desc:
        "Sistema web para visualização e gerenciamento em tempo real da grade de horários e disciplinas da Fatec Jacareí.",
      project2Title: "Amazon RE-Flow",
      project2Desc:
        "Sistema web para visualização, análise, limpeza, enriquecimento de dados, e análise de sentimento de reviews da Amazon.",
      project3Title: "BDLimnológico - INPE",
      project3Desc:
        "Sistema web para consulta e visualização de dados limnológicos, com filtros, mapas e gráficos científicos.",
      github: "GitHub",
      deploy: "Ver site",
      sectionContactTitle: "Vamos Conversar",
      sectionContactSubtitle:
        "Sempre aberto para discutir novas oportunidades e projetos interessantes",
      contactHeading: "// Entre em contato",
      githubLabel: "GitHub",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      locationLabel: "Localização",
      formName: "Nome",
      formEmail: "Email",
      formSubject: "Assunto",
      formMessage: "Mensagem",
      formPlaceholderName: "Seu nome",
      formPlaceholderEmail: "seu@email.com",
      formPlaceholderSubject: "Sobre o que quer conversar?",
      formPlaceholderMessage: "Sua mensagem...",
      sendMessage: "Enviar Mensagem",
      project1Bullets: [
        "Desenvolvi o front-end especialmente a seção de mapa interativo",
        "Implementei a alimentação de dados no banco via csv",
        "Desenvolvi as funcionalidades de exportação",
      ],
      project3Bullets: [
        "Front-end completo componentizado",
        "Lógica de geração de grafico e poligonos",
        "Logica de conexão entre banco de dados e Front-end",
      ],
    },
    en: {
      home: "home",
      about: "about",
      skills: "skills",
      projects: "projects",
      contact: "contact",
      heroGreeting: 'console.log("Hello, world!")',
      heroSubtitle: "Full Stack Developer",
      heroDescription:
        "My goal is to create robust and scalable solutions, as well as innovative experiences for people around the world. I am currently studying Multiplatform Software Development at Fatec Jacareí, along with self-taught studies. I am always willing to help, focusing on teamwork using effective communication and efficient solutions.",
      heroBtnProjects: "View Projects",
      heroBtnGithub: "GitHub",
      sectionAboutTitle: "About Me",
      sectionAboutSubtitle:
        "Developer focused on delivering efficiency and scalability",
      aboutP1:
        "Studying Fullstack development with a focus on solid skills for Front-end and Back-end development, applied together with soft skills such as management and teamwork in real projects, using agile methodologies in different roles, from developer to scrum master.",
      aboutP2:
        "Currently an English teacher at Wizard language school, fluent in English and able to contribute to teams and projects at an international level, in addition to the skills and methodologies acquired.",
      aboutReturn: "Seeking growth and challenges",
      formation: "Academic Background",
      course: "Multiplatform Software Development",
      college: "FATEC Jacareí (2025–2027)",
      certifications: "Certifications",
      viewCertifications: "View Certifications",
      sectionSkillsTitle: "Skills",
      sectionSkillsSubtitle: "Technologies and tools I use in development",
      frontend: "Frontend",
      backend: "Backend & Database",
      tools: "Tools & Methodologies",
      sectionProjectsTitle: "Projects",
      sectionProjectsSubtitle:
        "Some of my most important works and contributions",
      project1Title: "Pedagogical Management",
      project1Desc:
        "Web system for real-time visualization and management of class schedules and subjects at Fatec Jacareí.",
      project2Title: "Amazon RE-Flow",
      project2Desc:
        "Web-based system for visualization, analysis, cleaning, data enrichment, and sentiment analysis of Amazon reviews.",
      project3Title: "BDLimnological - INPE",
      project3Desc:
        "System for consulting and visualizing limnological data, with filters, maps and scientific charts.",
      github: "GitHub",
      deploy: "View site",
      sectionContactTitle: "Let's Talk",
      sectionContactSubtitle:
        "Always open to discuss new opportunities and interesting projects",
      contactHeading: "// Get in touch",
      githubLabel: "GitHub",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      locationLabel: "Location",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Message",
      formPlaceholderName: "Your name",
      formPlaceholderEmail: "your@email.com",
      formPlaceholderSubject: "What do you want to talk about?",
      formPlaceholderMessage: "Your message...",
      sendMessage: "Send Message",
      project1Bullets: [
        "I developed the front-end, especially the interactive map section",
        "I implemented data import into the database via CSV",
        "I developed the export functionalities",
      ],
      project3Bullets: [
        "Fully componentized front-end",
        "Logic for generating charts and polygons",
        "Logic for connecting the database to the front-end",
      ],
    },
  };

  let currentLang = localStorage.getItem("lang") || "pt";

  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");
  const langToggle = document.getElementById("lang-toggle");
  const langMenu = document.getElementById("lang-menu");
  const heroPrimaryBtn = document.querySelector(".hero .btn.btn-primary");
  const heroSecondaryBtn = document.querySelector(".hero .btn.btn-secondary");
  const echoCmd = document.getElementById("echo-cmd");
  const typingElement = document.querySelector(".typing-animation");
  const contactForm = document.querySelector(".contact-form");
  const skillItems = document.querySelectorAll(".skill-item");

  function applyLanguage(lang) {
    const t = translations[lang] || translations.pt;
    localStorage.setItem("lang", lang);

    const aHome = document.querySelector('a[href="#home"]');
    const aAbout = document.querySelector('a[href="#about"]');
    const aSkills = document.querySelector('a[href="#skills"]');
    const aProjects = document.querySelector('a[href="#projects"]');
    const aContact = document.querySelector('a[href="#contact"]');

    if (aHome) aHome.textContent = t.home;
    if (aAbout) aAbout.textContent = t.about;
    if (aSkills) aSkills.textContent = t.skills;
    if (aProjects) aProjects.textContent = t.projects;
    if (aContact) aContact.textContent = t.contact;

    const heroGreeting = document.querySelector(".hero-greeting");
    const heroSubtitle = document.querySelector(".hero-subtitle");
    const heroDescription = document.querySelector(".hero-description");
    if (heroGreeting) heroGreeting.textContent = t.heroGreeting;
    if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
    if (heroDescription) heroDescription.textContent = t.heroDescription;
    if (heroPrimaryBtn)
      heroPrimaryBtn.innerHTML = `<i class="fas fa-code"></i> ${t.heroBtnProjects}`;
    if (heroSecondaryBtn)
      heroSecondaryBtn.innerHTML = `<i class="fab fa-github"></i> ${t.heroBtnGithub}`;

    const aboutTitle = document.querySelector("#about .section-title");
    const aboutSubtitle = document.querySelector("#about .section-subtitle");
    if (aboutTitle) aboutTitle.textContent = t.sectionAboutTitle;
    if (aboutSubtitle) aboutSubtitle.textContent = t.sectionAboutSubtitle;

    const aboutPs = document.querySelectorAll("#about .about-text p");
    if (aboutPs[0]) aboutPs[0].textContent = t.aboutP1;
    if (aboutPs[1]) aboutPs[1].textContent = t.aboutP2;
    if (aboutPs[2])
      aboutPs[2].innerHTML = `<span style="color: var(--color-cyan)">return</span> "${t.aboutReturn}"`;

    const aboutH3 = document.querySelector("#about .about-text h3");
    if (aboutH3)
      aboutH3.textContent =
        lang === "pt" ? "function desenvolvedor() {" : "function developer() {";

    const skillTitles = document.querySelectorAll(
      "#about .skill-category .skill-title"
    );
    const skillNames = document.querySelectorAll(
      "#about .skill-category .skill-name"
    );
    if (skillTitles[0]) skillTitles[0].textContent = t.formation;
    if (skillNames[0])
      skillNames[0].innerHTML = `${t.course}<br/><br/>${t.college}`;
    if (skillTitles[1]) skillTitles[1].textContent = t.certifications;
    const certBtn = document.querySelector("#about .skill-item a");
    if (certBtn) certBtn.textContent = t.viewCertifications;

    const skillsTitle = document.querySelector("#skills .section-title");
    const skillsSubtitle = document.querySelector("#skills .section-subtitle");
    if (skillsTitle) skillsTitle.textContent = t.sectionSkillsTitle;
    if (skillsSubtitle) skillsSubtitle.textContent = t.sectionSkillsSubtitle;
    const skillCatTitles = document.querySelectorAll(
      "#skills .skill-category .skill-title"
    );
    if (skillCatTitles[0]) skillCatTitles[0].textContent = t.frontend;
    if (skillCatTitles[1]) skillCatTitles[1].textContent = t.backend;
    if (skillCatTitles[2]) skillCatTitles[2].textContent = t.tools;

    const projectsTitle = document.querySelector("#projects .section-title");
    const projectsSubtitle = document.querySelector(
      "#projects .section-subtitle"
    );
    if (projectsTitle) projectsTitle.textContent = t.sectionProjectsTitle;
    if (projectsSubtitle)
      projectsSubtitle.textContent = t.sectionProjectsSubtitle;

    const projectTitles = document.querySelectorAll(".project-title");
    const projectDescriptions = document.querySelectorAll(
      ".project-description"
    );
    if (projectTitles[0]) projectTitles[0].textContent = t.project1Title;
    if (projectDescriptions[0])
      projectDescriptions[0].textContent = t.project1Desc;
    if (projectTitles[1]) projectTitles[1].textContent = t.project3Title;
    if (projectDescriptions[1])
      projectDescriptions[1].textContent = t.project3Desc;
    if (projectTitles[2]) projectTitles[2].textContent = t.project2Title;
    if (projectDescriptions[2])
      projectDescriptions[2].textContent = t.project2Desc;

    document
      .querySelectorAll(".github-btn")
      .forEach(
        (btn) => (btn.innerHTML = `<i class="fab fa-github"></i> ${t.github}`)
      );
    document
      .querySelectorAll(".deploy-btn")
      .forEach((btn) => (btn.textContent = t.deploy));

    const contactTitle = document.querySelector("#contact .section-title");
    const contactSubtitle = document.querySelector(
      "#contact .section-subtitle"
    );
    if (contactTitle) contactTitle.textContent = t.sectionContactTitle;
    if (contactSubtitle) contactSubtitle.textContent = t.sectionContactSubtitle;
    const contactHeading = document.querySelector("#contact h3");
    if (contactHeading) contactHeading.textContent = t.contactHeading;

    const contactH4s = document.querySelectorAll("#contact h4");
    if (contactH4s[0]) contactH4s[0].textContent = t.githubLabel; // GitHub
    if (contactH4s[1]) contactH4s[1].textContent = t.linkedinLabel; // LinkedIn
    if (contactH4s[2]) contactH4s[2].textContent = t.locationLabel; // Localização

    const labelName = document.querySelector('label[for="name"]');
    const labelEmail = document.querySelector('label[for="email"]');
    const labelSubject = document.querySelector('label[for="subject"]');
    const labelMessage = document.querySelector('label[for="message"]');
    const inputName = document.getElementById("name");
    const inputEmail = document.getElementById("email");
    const inputSubject = document.getElementById("subject");
    const inputMessage = document.getElementById("message");
    if (labelName) labelName.textContent = t.formName;
    if (labelEmail) labelEmail.textContent = t.formEmail;
    if (labelSubject) labelSubject.textContent = t.formSubject;
    if (labelMessage) labelMessage.textContent = t.formMessage;
    if (inputName) inputName.placeholder = t.formPlaceholderName;
    if (inputEmail) inputEmail.placeholder = t.formPlaceholderEmail;
    if (inputSubject) inputSubject.placeholder = t.formPlaceholderSubject;
    if (inputMessage) inputMessage.placeholder = t.formPlaceholderMessage;
    const contactBtn = document.querySelector(".contact-form button");
    if (contactBtn)
      contactBtn.innerHTML = `<i class="fas fa-paper-plane"></i> ${t.sendMessage}`;

    if (echoCmd) {
      echoCmd.textContent =
        lang === "pt" ? 'echo "Codificando..."' : 'echo "Coding..."';
    }

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      const githubLink =
        card.querySelector(".github-btn")?.getAttribute("href") || "";
      const bullets = Array.from(
        card.querySelectorAll(".project-contributions ul li")
      );
      let texts = [];
      if (githubLink.includes("ErrorSquad-Front")) {
        texts = t.project1Bullets;
      } else if (githubLink.includes("Amazon-RE-Flow")) {
        texts = t.project2Bullets;
      } else if (
        githubLink.includes("ABP2") ||
        githubLink.includes("BDLimnologico")
      ) {
        texts = t.project3Bullets;
      } else {
        texts = [];
      }
      bullets.forEach((li, i) => {
        if (texts[i]) li.textContent = texts[i];
      });
    });
  }

  function onScrollSpy() {
    let current = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) current = section.getAttribute("id");
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href === "#" + current) link.classList.add("active");
    });
    const nav = document.querySelector("nav");
    if (nav) {
      if (window.scrollY > 50) nav.style.background = "rgba(0, 0, 0, 0.95)";
      else nav.style.background = "rgba(0, 0, 0, 0.9)";
    }
  }

  const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -100px 0px" };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, observerOptions);

  document
    .querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
    .forEach((el) => {
      observer.observe(el);
    });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (navMenu) navMenu.classList.remove("active");
    });
  });

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      const name =
        formData.get("name") || document.querySelector("#name")?.value || "";
      alert(
        `Obrigado ${name}! Mensagem enviada com sucesso. Retornarei em breve!`
      );
      this.reset();
    });
  }

  function typeTerminalCommand() {
    const commands = [
      "git status",
      "npm run dev",
      "python app.py",
      "psql -d mydb",
      "code .",
      "git push origin main",
    ];
    if (!typingElement) return;
    let commandIndex = 0;
    function typeCommand() {
      const command = commands[commandIndex];
      let i = 0;
      typingElement.textContent = "";
      function typeChar() {
        if (i < command.length) {
          typingElement.textContent += command.charAt(i);
          i++;
          setTimeout(typeChar, 90);
        } else {
          setTimeout(() => {
            commandIndex = (commandIndex + 1) % commands.length;
            typeCommand();
          }, 1500);
        }
      }
      typeChar();
    }
    setTimeout(typeCommand, 800);
  }

  window.addEventListener("load", typeTerminalCommand);

  function createParticle() {
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.width = "4px";
    particle.style.height = "4px";
    particle.style.background = "#BC6FF1";
    particle.style.borderRadius = "50%";
    particle.style.pointerEvents = "none";
    particle.style.zIndex = "999";
    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.top = window.innerHeight + "px";
    particle.style.opacity = "0.7";
    document.body.appendChild(particle);
    let posY = window.innerHeight;
    const speed = Math.random() * 2 + 1;
    const drift = (Math.random() - 0.5) * 2;
    function animateParticle() {
      posY -= speed;
      particle.style.top = posY + "px";
      particle.style.left = parseFloat(particle.style.left) + drift + "px";
      if (posY < -10) {
        if (particle.parentNode) particle.parentNode.removeChild(particle);
      } else {
        requestAnimationFrame(animateParticle);
      }
    }
    animateParticle();
  }

  setInterval(createParticle, 3000);

  skillItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05) rotate(2deg)";
    });
    item.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)";
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (navMenu) navMenu.classList.remove("active");
      if (langMenu) langMenu.classList.remove("show");
    }
  });

  if (langToggle && langMenu) {
    langToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      langMenu.classList.toggle("show");
    });
    document.addEventListener("click", () => {
      langMenu.classList.remove("show");
    });
    langMenu.querySelectorAll("a").forEach((option) => {
      option.addEventListener("click", (e) => {
        e.preventDefault();
        const lang = option.getAttribute("data-lang") || "pt";
        applyLanguage(lang);
        langMenu.classList.remove("show");
      });
    });
  }

  window.addEventListener("scroll", onScrollSpy);

  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);
    onScrollSpy();
  });
})();
