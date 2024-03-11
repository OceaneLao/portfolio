// Display h2 title
let titleLatestProjects = document.createElement("h2");
titleLatestProjects.textContent = "Mes derniers projets";
titleLatestProjects.setAttribute(
    'class',
    'text-center text-light mt-5 mb-5'
    );
document.body.appendChild(titleLatestProjects);

// Latest projects div container
let latestProjectsContainer = document.createElement("div");
latestProjectsContainer.setAttribute(
    "class",
    "latestProjectsContainer container w-lg-75 w-sm-100 d-flex flex-wrap justify-content-center align-items-center"
    );
document.body.appendChild(latestProjectsContainer);

// Fetch JSON file
document.addEventListener("DOMContentLoaded", function () {
  fetch("projects.json")
    .then((res) => {
      return res.json();
    })
    .then((cards) => {
      //Select JSON file element
      cards.forEach((card) => {
        //Display card
        let cardDisplay = document.createElement("div");
        cardDisplay.setAttribute(
            "class", 
            "cardDisplay flex-column col-6 text-light text-left"
            );
        document
          .getElementsByClassName("container")[1]
          .appendChild(cardDisplay);

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

        //Display JSON file elements
        cardDisplay.appendChild(pictureCard);
        cardDisplay.appendChild(titleCard);
        cardDisplay.appendChild(dateCard);
        cardDisplay.appendChild(descriptionCard);
      });
    })
    .catch((error) => console.error("Unable to fetch data:", error));
});

// Add button See More container
let displayButtonSeeMore = document.createElement('div');
displayButtonSeeMore.setAttribute(
  "class",
  "buttonSeeMore d-flex justify-content-center align-items-center"
  );
document.body.appendChild(displayButtonSeeMore);

let buttonSeeMore = document.createElement("a");
buttonSeeMore.setAttribute(
  "class", 
  "text-decoration-none mt-3"
  );
buttonSeeMore.href = "#";
buttonSeeMore.textContent = "En voir plus";
document
  .getElementsByClassName('buttonSeeMore')[0]
  .appendChild(buttonSeeMore).style.color = "#010028";
document
  .getElementsByClassName('buttonSeeMore')[0]
  .appendChild(buttonSeeMore).style.backgroundColor = "#fff";
document
  .getElementsByClassName('buttonSeeMore')[0]
  .appendChild(buttonSeeMore).style.padding = "15px 50px";
document
  .getElementsByClassName('buttonSeeMore')[0]
  .appendChild(buttonSeeMore).style.borderRadius = "50px";
document
  .getElementsByClassName('buttonSeeMore')[0]
  .appendChild(buttonSeeMore).style.boxShadow = "5px 5px 15px #9F23C1";
  document
  .getElementsByClassName('buttonSeeMore')[0]
  .appendChild(buttonSeeMore).style.position = "center";