// Mobile menu toggle
document
  .querySelector(".mobile-menu-toggle")
  .addEventListener("click", function () {
    document.querySelector(".nav-menu").classList.toggle("active");
  });

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close mobile menu if open
    document.querySelector(".nav-menu").classList.remove("active");
  });
});

// Active navigation link highlighting
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all animation elements
document
  .querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
  .forEach((el) => {
    observer.observe(el);
  });

// Form submission
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name =
      formData.get("name") ||
      document.querySelector('input[placeholder="Seu nome"]').value;

    // Show success message
    alert(
      `Obrigado ${name}! Mensagem enviada com sucesso. Retornarei em breve!`
    );

    // Reset form
    this.reset();
  });

// Navbar background on scroll
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0, 0, 0, 0.95)";
  } else {
    nav.style.background = "rgba(0, 0, 0, 0.9)";
  }
});

// Terminal typing effect
function typeTerminalCommand() {
  const commands = [
    "git status",
    "npm run dev",
    "python app.py",
    "psql -d mydb",
    "code .",
    "git push origin main",
  ];

  const typingElement = document.querySelector(".typing-animation");
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
        setTimeout(typeChar, 100);
      } else {
        setTimeout(() => {
          commandIndex = (commandIndex + 1) % commands.length;
          typeCommand();
        }, 2000);
      }
    }
    typeChar();
  }

  // Start typing effect after initial delay
  setTimeout(typeCommand, 3000);
}

// Initialize terminal typing effect
window.addEventListener("load", typeTerminalCommand);

// Add some interactive particles
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
      document.body.removeChild(particle);
    } else {
      requestAnimationFrame(animateParticle);
    }
  }

  animateParticle();
}

// Create particles periodically
setInterval(createParticle, 3000);

// Enhance hover effects for skill items
document.querySelectorAll(".skill-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05) rotate(2deg)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotate(0deg)";
  });
});

// Add keyboard navigation
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelector(".nav-menu").classList.remove("active");
  }
});
// Ativar link ao rolar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href")?.includes(current)) {
      link.classList.add("active");
    }
  });
});

// ===================
// Animações on scroll
// ===================
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in-left, .slide-in-right");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    appearOnScroll.unobserve(entry.target);
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

// ===================
// Scroll spy navbar
// ===================


window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===================
// Menu Mobile
// ===================
const mobileToggle = document.querySelector(".mobile-menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (mobileToggle) {
  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

// ===================
// Navegação suave
// ===================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    navMenu.classList.remove("active");
  });
});


window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===================
// Dropdown idioma
// ===================
const langToggle = document.getElementById("lang-toggle");
const langMenu = document.getElementById("lang-menu");

if (langToggle && langMenu) {
  // Abrir/fechar
  langToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    langMenu.classList.toggle("show");
  });

  // Fechar ao clicar fora
  document.addEventListener("click", () => {
    langMenu.classList.remove("show");
  });

  // Trocar idioma
  langMenu.querySelectorAll("a").forEach((option) => {
    option.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = option.getAttribute("data-lang");
      applyLanguage(lang);
      langMenu.classList.remove("show");
    });
  });
}


// ===================
// Traduções
// ===================
const translations = {
  pt: {
    // Navbar
    home: "home",
    about: "sobre mim",
    skills: "habilidades",
    projects: "projetos",
    contact: "contato",
    // Hero
    heroGreeting: 'console.log("Olá, mundo!")',
    heroSubtitle: "Desenvolvedor Full Stack",
    heroDescription:
      "Meu objetivo é criar soluções robustas e escaláveis, além de experiências inovadoras para pessoas ao redor do mundo. Atualmente estudo Desenvolvimento de Software Multiplataforma na Fatec Jacareí, além de estudos autodidatas. Estou disposto a ajudar sempre com foco no trabalho em equipe utilizando uma comunicação eficaz e soluções eficientes.",
    heroBtnProjects: "Ver Projetos",
    heroBtnGithub: "GitHub",
    // About
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
    // Skills
    sectionSkillsTitle: "Habilidades",
    sectionSkillsSubtitle:
      "Tecnologias e ferramentas que utilizo no desenvolvimento",
    frontend: "Frontend",
    backend: "Backend & Banco de Dados",
    tools: "Ferramentas & Metodologias",
    // Projects
    sectionProjectsTitle: "Projetos",
    sectionProjectsSubtitle:
      "Alguns dos meus trabalhos e contribuições mais importantes",
    project1Title: "Gerenciamento Pedagógico",
    project1Desc:
      "Sistema web para visualização e gerenciamento em tempo real da grade de horários e disciplinas da Fatec Jacareí.",
    project2Title: "Projeto 2",
    project2Desc: "Sistema ETL de gerenciamento e tratamento de dados com Pandas.",
    project3Title: "Projeto 3",
    project3Desc:
      "Breve descrição do projeto 3",
    github: "GitHub",
    deploy: "Deploy",
    // Contact
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
  },
  en: {
    // Navbar
    home: "home",
    about: "about",
    skills: "skills",
    projects: "projects",
    contact: "contact",
    // Hero
    heroGreeting: 'console.log("Hello, world!")',
    heroSubtitle: "Full Stack Developer",
    heroDescription:
      "My goal is to create robust and scalable solutions, as well as innovative experiences for people around the world. I am currently studying Multiplatform Software Development at Fatec Jacareí, along with self-taught studies. I am always willing to help, focusing on teamwork using effective communication and efficient solutions.",
    heroBtnProjects: "View Projects",
    heroBtnGithub: "GitHub",
    // About
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
    // Skills
    sectionSkillsTitle: "Skills",
    sectionSkillsSubtitle: "Technologies and tools I use in development",
    frontend: "Frontend",
    backend: "Backend & Database",
    tools: "Tools & Methodologies",
    // Projects
    sectionProjectsTitle: "Projects",
    sectionProjectsSubtitle:
      "Some of my most important works and contributions",
    project1Title: "Pedagogical Management",
    project1Desc:
      "Web system for real-time visualization and management of class schedules and subjects at Fatec Jacareí.",
    project2Title: "Project 2",
    project2Desc: "ETL system for data management and processing with Pandas.",
    project3Title: "Project 3",
    project3Desc:
      "Brief description of project 3",
    github: "GitHub",
    deploy: "Deploy",
    // Contact
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
  },
};

// ===================
// Aplicar Idioma
// ===================
let currentLang = localStorage.getItem("lang") || "pt";
// ===================
// Função aplicar idioma
// ===================
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  const t = translations[lang];

  // Navbar
  document.querySelector('a[href="#home"]').textContent = t.home;
  document.querySelector('a[href="#about"]').textContent = t.about;
  document.querySelector('a[href="#skills"]').textContent = t.skills;
  document.querySelector('a[href="#projects"]').textContent = t.projects;
  document.querySelector('a[href="#contact"]').textContent = t.contact;

  // Hero
  document.querySelector(".hero-greeting").textContent = t.heroGreeting;
  document.querySelector(".hero-subtitle").textContent = t.heroSubtitle;
  document.querySelector(".hero-description").textContent = t.heroDescription;
  document.querySelector(".btn.btn-primary").innerHTML = `<i class="fas fa-code"></i> ${t.heroBtnProjects}`;
  document.querySelector(".btn.btn-secondary").innerHTML = `<i class="fab fa-github"></i> ${t.heroBtnGithub}`;

  // About - títulos
  document.querySelector("#about .section-title").textContent = t.sectionAboutTitle;
  document.querySelector("#about .section-subtitle").textContent = t.sectionAboutSubtitle;

  // About - parágrafos
  const aboutPs = document.querySelectorAll("#about .about-text p");
  if (aboutPs[0]) aboutPs[0].textContent = t.aboutP1;
  if (aboutPs[1]) aboutPs[1].textContent = t.aboutP2;
  if (aboutPs[2]) aboutPs[2].innerHTML = `<span style="color: var(--color-cyan)">return</span> "${t.aboutReturn}"`;

  // About - título da função
  const aboutTitleFn = document.querySelector("#about .about-text h3");
  if (aboutTitleFn) {
    aboutTitleFn.textContent = lang === "pt"
      ? "function desenvolvedor() {"
      : "function developer() {";
  }

  // Formação & Certificações
  document.querySelectorAll("#about .skill-category .skill-title")[0].textContent = t.formation;
  document.querySelectorAll("#about .skill-category .skill-name")[0].innerHTML = `${t.course}<br>${t.college}`;
  document.querySelectorAll("#about .skill-category .skill-title")[1].textContent = t.certifications;
  document.querySelector("#about .btn").textContent = t.viewCertifications;

  // Skills
  document.querySelector("#skills .section-title").textContent = t.sectionSkillsTitle;
  document.querySelector("#skills .section-subtitle").textContent = t.sectionSkillsSubtitle;
  document.querySelectorAll("#skills .skill-category .skill-title")[0].textContent = t.frontend;
  document.querySelectorAll("#skills .skill-category .skill-title")[1].textContent = t.backend;
  document.querySelectorAll("#skills .skill-category .skill-title")[2].textContent = t.tools;

  // Projects
  document.querySelector("#projects .section-title").textContent = t.sectionProjectsTitle;
  document.querySelector("#projects .section-subtitle").textContent = t.sectionProjectsSubtitle;
  document.querySelectorAll(".project-title")[0].textContent = t.project1Title;
  document.querySelectorAll(".project-description")[0].textContent = t.project1Desc;
  document.querySelectorAll(".project-title")[1].textContent = t.project2Title;
  document.querySelectorAll(".project-description")[1].textContent = t.project2Desc;
  document.querySelectorAll(".project-title")[2].textContent = t.project3Title;
  document.querySelectorAll(".project-description")[2].textContent = t.project3Desc;
  document.querySelectorAll(".github-btn").forEach(btn => btn.innerHTML = `<i class="fab fa-github"></i> ${t.github}`);
  document.querySelectorAll(".deploy-btn").forEach(btn => btn.textContent = t.deploy);

  // Contact
  document.querySelector("#contact .section-title").textContent = t.sectionContactTitle;
  document.querySelector("#contact .section-subtitle").textContent = t.sectionContactSubtitle;
  document.querySelector("#contact h3").textContent = t.contactHeading;
  const contactH4 = document.querySelectorAll("#contact h4");
  if (contactH4[0]) contactH4[0].textContent = t.githubLabel;
  if (contactH4[1]) contactH4[1].textContent = t.emailLabel;
  if (contactH4[2]) contactH4[2].textContent = t.linkedinLabel;
  if (contactH4[3]) contactH4[3].textContent = t.locationLabel;

  // Contact form labels & placeholders
  document.querySelector('label[for="name"]').textContent = t.formName;
  document.querySelector('#name').placeholder = t.formPlaceholderName;

  document.querySelector('label[for="email"]').textContent = t.formEmail;
  document.querySelector('#email').placeholder = t.formPlaceholderEmail;

  document.querySelector('label[for="subject"]').textContent = t.formSubject;
  document.querySelector('#subject').placeholder = t.formPlaceholderSubject;

  document.querySelector('label[for="message"]').textContent = t.formMessage;
  document.querySelector('#message').placeholder = t.formPlaceholderMessage;

  document.querySelector('.contact-form button').innerHTML = `<i class="fas fa-paper-plane"></i> ${t.sendMessage}`;

const echoCmd = document.getElementById("echo-cmd");
if (echoCmd) {
  echoCmd.textContent = lang === "pt"
    ? 'echo "Codificando..."'
    : 'echo "Coding..."';
}

}

// ===================
// Inicializar idioma na primeira carga
// ===================
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);
});
