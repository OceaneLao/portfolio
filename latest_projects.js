// Display h2 title
let titleH2 = document.createElement('h2');
titleH2.textContent = "Mes derniers projets";
document.body.appendChild(titleH2).style.color = "#fff";
titleH2.style.textAlign = "center";

// Latest projects div container
let latestProjectsContainer = document.createElement('div');
latestProjectsContainer.classList.add('container');
document.body.appendChild(latestProjectsContainer);

// Card content div container  
let cardContainer = document.createElement('div');
cardContainer.classList.add('card');
document.getElementsByClassName('container')[1].appendChild(cardContainer);

// Fetch JSON file
document.addEventListener("DOMContentLoaded", function () {
    fetch('projects.json')
    .then((res) => {
       return res.json();
    })
    .then((cards) => {
        //Display card
        let cardDisplay = document.getElementsByClassName('card')[0];

        //Select JSON file element
        cards.forEach((card) => {
            let pictureCard = new Image();
            pictureCard.src = card.picture;
            
            let titleCard = document.createElement('h3');
            titleCard.textContent = card.title;
            titleCard.style.color = "#000";

            let dateCard = document.createElement('p');
            dateCard.textContent = card.date;
            dateCard.style.color = "#000";

            let descriptionCard = document.createElement('p');
            descriptionCard.textContent = card.description;
            descriptionCard.style.color = "#000";
            
            //Display JSON file elements
            cardDisplay.appendChild(pictureCard);
            cardDisplay.appendChild(titleCard);
            cardDisplay.appendChild(dateCard);
            cardDisplay.appendChild(descriptionCard);
        });
    })
    .catch((error) =>
        console.error("Unable to fetch data:", error)
    );
});

// Button See more
let buttonSeeMore = document.createElement('button');
buttonSeeMore.textContent = "Découvrir";
document.getElementsByClassName('container')[1].appendChild(buttonSeeMore);