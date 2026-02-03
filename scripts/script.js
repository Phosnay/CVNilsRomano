const cv = {
  name: "CV Nils Romano",
  link: "cv.html"
};

const projects = [
  {
    name: "Projet Nova",
    description: "Projet sur 1 an visant à créer une application web (seul)",
    link: "https://github.com/Phosnay/ProjetNovaSPA"
  },
    {
    name: "Projet Fil Rouge (front)",
    description: "Projet en équipe de 3 visant à créer une application web complète",
    link: "https://github.com/MartinChrrr/front-pfr"
  },  
  {
    name: "Projet Fil Rouge (back)",
    description: "Projet en équipe de 3 visant à créer une application web complète",
    link: "https://github.com/KohakuC/back-pfr"
  },
  {
    name: "API",
    description: "API Rest sur le jeu Dofus (seul)",
    link: "https://github.com/Phosnay/dofusAPIThomasB"
  },
  {
    name: "Django",
    description: "Projet Django avec une base de données PostgreSQL (seul)",
    link: "https://github.com/Phosnay/django"
  },
  {
    name: "Space Invaders",
    description: "Jeu Space Invaders en Python (PyGame), (2 personnes)",
    link: "https://github.com/Phosnay/spaceInvaders"
  },
  {
    name: "Flask",
    description: "Projet Flask avec une base de données SQLite (2 personnes)",
    link: "https://github.com/nino-mau/flask-devops-project"
  },
  {
    name: "SQL_requests",
    description: "Projet de requêtes SQL (seul)",
    link: "https://github.com/Phosnay/sql_requests"
  },
  {
    name: "CustomerApp",
    description: "Projet d'application client (seul)",
    link: "https://github.com/Phosnay/DiiageCustomerApp"
  }
];

// ===== CV =====
const cvContainer = document.getElementById("CV");

const cvDiv = document.createElement("div");
cvDiv.className = "project";
cvDiv.innerHTML = `
  <h3>${cv.name}</h3>
  <a href="${cv.link}">Voir le CV →</a>
`;
cvContainer.appendChild(cvDiv);

// ===== PROJECTS =====
const projectsContainer = document.getElementById("projects");

projects.forEach(p => {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>${p.description}</p>
    <a href="${p.link}" target="_blank">Voir sur GitHub →</a>
  `;
  projectsContainer.appendChild(div);
});

document.getElementById("year").textContent = new Date().getFullYear();
