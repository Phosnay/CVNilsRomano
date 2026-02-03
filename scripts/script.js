const cv = {
  name: "CV Nils Romano",
  link: "cv.html"
};

const projects = [
  {
    name: "Projet API",
    description: "description_pas_faites",
    link: "https://github.com/Phosnay/dofusAPIThomasB"
  },
  {
    name: "Projet 2",
    description: "description_pas_faites",
    link: "https://github.com/tonpseudo/projet-2"
  },
  {
    name: "Projet 3",
    description: "description_pas_faites",
    link: "https://github.com/tonpseudo/projet-3"
  },
  {
    name: "Projet 4",
    description: "description_pas_faites",
    link: "https://github.com/tonpseudo/projet-4"
  },
  {
    name: "Projet 5",
    description: "description_pas_faites",
    link: "https://github.com/tonpseudo/projet-5"
  },  
  {
    name: "Projet 6",
    description: "description_pas_faites",
    link: "https://github.com/tonpseudo/projet-6"
  },
  {
    name: "Projet 7",
    description: "description_pas_faites",
    link: "https://github.com/tonpseudo/projet-7"
  },
  {
    name: "Projet 8",
    description: "description_pas_faites",
    link: "https://github.com/tonpseudo/projet-8"
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
