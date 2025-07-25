let currentLang = "pt";

// Traduções
const translations = {
  pt: {
    // Botões
    home: "Home",
    habilidades: "Habilidades",
    projetos: "Projetos",
    sobre: "Sobre mim",
    btnContact: "Contate me",
    language: "Idioma",
    // Seções
    habilidadesTitulo: "Habilidades Técnicas",
    projetosTitulo: "Projetos",
    sobreTitulo: "Sobre mim",
    contactTitulo: "Contate me",
    formTitulo: "Formulário de Contato",
    formSubmit: "Clique aqui para enviar",
    // Textos
    title: "Olá, eu sou o Guilherme.",
    description: "Desenvolvedor Front-end em transição para Full-stack",
    desc2:
      "Meu objetivo é criar sites rápidos, bonitos e que ofereçam a melhor experiência possível para quem usa",
    skills1: "Linguagens",
    skills2: "Desenvolvimento Web / Frameworks",
    skills3: "Ferramentas",
    skills4: "Banco de dados",
    projects1Top: "Projeto 1",
    projects1BottomTitle: "Plataforma de Cursos",
    projects1BottomDesc:
      "em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    projects2Top: "Projeto 2",
    projects2BottomTitle: "Plataforma de Cursos",
    projects2BottomDesc:
      "em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    projects3Top: "Projeto 3",
    projects3BottomTitle: "Plataforma de Cursos",
    projects3BottomDesc:
      "em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    projects4Top: "Projeto 4",
    projects4BottomTitle: "Plataforma de Cursos",
    projects4BottomDesc:
      "em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    aboutMeText1:
      "Olá! Me chamo Guilherme Bernardino Reis, tenho 18 anos e estudo Ciência da Computação no IF Sudeste MG – Campus Rio Pomba. Minha paixão por tecnologia começou na infância, explorando computadores e jogos. Desde o curso técnico em Informática, me aprofundei na programação e hoje busco me tornar um desenvolvedor Full-stack, com foco também em UI/UX Design.",
    aboutMeText2:
      "Domino HTML, CSS, JavaScript, React, Python e C++, e estou aprendendo Firebase, PHP, Node.js e TypeScript. Aprendo tanto na faculdade quanto em cursos online e projetos próprios.",
    aboutMeText3:
      "Gosto de criar interfaces modernas e intuitivas, mas também estou evoluindo no back-end. Sou organizado, comunicativo e trabalho bem em equipe — já liderei um projeto de site de notícias.",
    aboutMeText4:
      "Fora da programação, curto esportes, música, animes e jogos eletrônicos. Estou em busca de estágios, freelas ou vagas júnior que tragam experiência e oportunidades de crescimento.",
    contactFormName: "Nome",
    contactFormMensage: "Mensagem",
    contactFormExplication: "Ou me encontre pelas redes",
    credits: "Feito por Guilherme Bernardino",
  },
  en: {
    // Buttons
    home: "Home",
    habilidades: "Skills",
    projetos: "Projects",
    sobre: "About me",
    btnContact: "Contact me",
    language: "Language",
    // Sections
    habilidadesTitulo: "Technical Skills",
    projetosTitulo: "Projects",
    sobreTitulo: "About me",
    contactTitulo: "Contact me",
    formTitulo: "Contact Form",
    formSubmit: "Click here to send",
    // Texts
    title: "Hello, I'm Guilherme.",
    description: "Front-end developer transitioning to Full-stack",
    desc2:
      "My goal is to create fast, beautiful websites that offer the best possible experience for users",
    skills1: "Languages",
    skills2: "Web Development / Frameworks",
    skills3: "Tools",
    skills4: "Database",
    projects1Top: "Project 1",
    projects1BottomTitle: "Course Platform",
    projects1BottomDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    projects2Top: "Project 2",
    projects2BottomTitle: "Course Platform",
    projects2BottomDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    projects3Top: "Project 3",
    projects3BottomTitle: "Course Platform",
    projects3BottomDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    projects4Top: "Project 4",
    projects4BottomTitle: "Course Platform",
    projects4BottomDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    aboutMeText1:
      "Hello! My name is Guilherme Bernardino Reis, I'm 18 years old and I study Computer Science at IF Sudeste MG – Rio Pomba Campus. My passion for technology started in childhood, exploring computers and games. Since the technical course in Informatics, I’ve delved deeper into programming and today I seek to become a Full-stack developer, also focusing on UI/UX Design.",
    aboutMeText2:
      "I’m proficient in HTML, CSS, JavaScript, React, Python and C++, and I’m currently learning Firebase, PHP, Node.js and TypeScript. I learn both at college and through online courses and personal projects.",
    aboutMeText3:
      "I enjoy creating modern and intuitive interfaces, but I’m also improving in back-end development. I’m organized, communicative, and a good team player — I’ve already led a news website project.",
    aboutMeText4:
      "Outside of programming, I enjoy sports, music, anime, and video games. I’m looking for internships, freelance jobs, or junior positions that bring experience and growth opportunities.",
    contactFormName: "Name",
    contactFormMensage: "Message",
    contactFormExplication: "Or find me through social media",
    credits: "Made by Guilherme Bernardino",
  },
};

function setLanguage(lang) {
  // Buttons
  document.getElementById("btn-apresentation").innerText =
    translations[lang].home;
  document.getElementById("btn-habilities").innerText =
    translations[lang].habilidades;
  document.getElementById("btn-projects").innerText =
    translations[lang].projetos;
  document.getElementById("language").innerText = translations[lang].idioma;
  document.getElementById("btn-aboutMe").innerText = translations[lang].sobre;
  document.getElementById("btn-contact").innerText =
    translations[lang].btnContact;
  document.getElementById("language").innerText = translations[lang].language;

  // Sections
  document.querySelector(".s-Habilities h2").innerText =
    translations[lang].habilidadesTitulo;
  document.querySelector(".s-Projects h2").innerText =
    translations[lang].projetosTitulo;
  document.querySelector(".s-About-me h2").innerText =
    translations[lang].sobreTitulo;
  document.querySelector(".s-Contact-me h2").innerText =
    translations[lang].contactTitulo;
  document.querySelector(".s-Contact-me h3").innerText =
    translations[lang].formTitulo;
  document.querySelector(".submit-button").value =
    translations[lang].formSubmit;

  // Texts
  document.getElementById("a-title").innerText = translations[lang].title;
  document.getElementById("a-desc").innerText = translations[lang].description;
  document.getElementById("a-desc2").innerText = translations[lang].desc2;

  document.getElementById("h-programingLanguages").innerText =
    translations[lang].skills1;
  document.getElementById("h-develop").innerText = translations[lang].skills2;
  document.getElementById("h-tools").innerText = translations[lang].skills3;
  document.getElementById("h-database").innerText = translations[lang].skills4;

  document.getElementById("p-projects1Top").innerText =
    translations[lang].projects1Top;
  document.getElementById("p-projects2Top").innerText =
    translations[lang].projects2Top;
  document.getElementById("p-projects3Top").innerText =
    translations[lang].projects3Top;
  document.getElementById("p-projects4Top").innerText =
    translations[lang].projects4Top;
  document.getElementById("p-projects1BottomTitle").innerText =
    translations[lang].projects1BottomTitle;
  document.getElementById("p-projects2BottomTitle").innerText =
    translations[lang].projects2BottomTitle;
  document.getElementById("p-projects3BottomTitle").innerText =
    translations[lang].projects3BottomTitle;
  document.getElementById("p-projects4BottomTitle").innerText =
    translations[lang].projects4BottomTitle;
  document.getElementById("p-projects1BottomDesc").innerText =
    translations[lang].projects1BottomDesc;
  document.getElementById("p-projects2BottomDesc").innerText =
    translations[lang].projects2BottomDesc;
  document.getElementById("p-projects3BottomDesc").innerText =
    translations[lang].projects3BottomDesc;
  document.getElementById("p-projects4BottomDesc").innerText =
    translations[lang].projects4BottomDesc;

  document.getElementById("a-aboutMeText1").innerText =
    translations[lang].aboutMeText1;
  document.getElementById("a-aboutMeText2").innerText =
    translations[lang].aboutMeText2;
  document.getElementById("a-aboutMeText3").innerText =
    translations[lang].aboutMeText3;
  document.getElementById("a-aboutMeText4").innerText =
    translations[lang].aboutMeText4;

  document.getElementById("c-contactFormExplication").innerText =
    translations[lang].contactFormExplication;
  document.getElementById("c-credits").innerText = translations[lang].credits;

  const nameInput = document.getElementById("name");
  const mensageInput = document.getElementById("mensage");

  dropdown.classList.add("hidden");
}
