// Afficher le titre H2
let titleLatestProjects = document.createElement("h2");
titleLatestProjects.textContent = "Mes derniers projets";
titleLatestProjects.setAttribute("id","latest-projects");
titleLatestProjects.setAttribute("class", "text-center text-light mt-5 mb-5");
document.body.appendChild(titleLatestProjects);

// Créer une balise contenant le bloc Mes Derniers Projets
let latestProjectsContainer = document.createElement("div");
latestProjectsContainer.setAttribute(
  "class",
  "latestProjectsContainer container w-lg-75 w-sm-100 d-flex flex-wrap justify-content-center align-items-center"
);
document.body.appendChild(latestProjectsContainer);

// Créer une fonction pour afficher les cards "Mes derniers projets"
function displayCards(cards) {
  // Parcourir les données dans le fichier JSON
  cards.forEach((card) => {
    // Affichage des cards
    let cardDisplay = document.createElement("div");
    cardDisplay.setAttribute(
      "id",
      "cardDisplay"
    );
    cardDisplay.setAttribute(
      "class",
      "cardDisplay flex-column col-6 text-light text-left"
    );
    document.getElementsByClassName("container")[1].appendChild(cardDisplay);

    let pictureCard = new Image();
    pictureCard.src = card.picture;
    pictureCard.style.maxWidth = "100%";
    pictureCard.style.maxHeight = "50%";

    let titleCard = document.createElement("h3");
    titleCard.textContent = card.title;

    let dateCard = document.createElement("p");
    dateCard.textContent = card.date;

    let descriptionCard = document.createElement("p");
    descriptionCard.textContent = card.description;

    // Afficher les données dans le fichier HTML
    cardDisplay.appendChild(pictureCard);
    cardDisplay.appendChild(titleCard);
    cardDisplay.appendChild(dateCard);
    cardDisplay.appendChild(descriptionCard);
  });
}

// Fetch du fichier JSON pour n'afficher que les 2 premières données
document.addEventListener("DOMContentLoaded", function () {
  fetch("projects.json")
    .then((res) => res.json())
    .then((cards) => {
      displayCards(cards.slice(0, 2));
    })
    .catch((error) => console.error("Unable to fetch data:", error));
});

// Créer et afficher le bouton "En voir plus"
let displayButtonSeeMore = document.createElement("div");
displayButtonSeeMore.setAttribute(
  "class",
  "buttonSeeMore d-flex justify-content-center align-items-center"
);
document.body.appendChild(displayButtonSeeMore);
let buttonSeeMore = document.createElement("a");
buttonSeeMore.setAttribute("class", "text-decoration-none mt-3");
buttonSeeMore.href = "#cardDisplay";
buttonSeeMore.textContent = "En voir plus";
document
  .getElementsByClassName("buttonSeeMore")[0]
  .appendChild(buttonSeeMore).style.color = "#010028";
buttonSeeMore.style.backgroundColor = "#fff";
buttonSeeMore.style.padding = "15px 50px";
buttonSeeMore.style.borderRadius = "50px";
buttonSeeMore.style.boxShadow = "5px 5px 15px #9F23C1";
buttonSeeMore.style.position = "center";

// Ajouter un gestionnaire d'évènements qui va générer les autres données dans le fichier JSON lorsque le bouton sera cliqué
buttonSeeMore.addEventListener("click", function () {
  fetch("projects.json")
    .then((res) => res.json())
    .then((cards) => {
      displayCards(cards.slice(2));
      // A surveiller si plus de projets + test
      buttonSeeMore.style.display = "none";
    })
    .catch((error) => console.error("Unable to fetch data:", error));
});