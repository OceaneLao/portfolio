// Display h2 title
let titleH2 = document.createElement('h2');
titleH2.textContent = "Mes derniers projets";
document.body.appendChild(titleH2).style.color = "#fff";
titleH2.style.textAlign = "center";

// Card div container
let cardContainer = document.createElement('div');
cardContainer.classList.add('cardContainer');
document.body.appendChild(cardContainer);

// Fetch JSON file
document.addEventListener("DOMContentLoaded", function () {
    fetch('projects.json')
    .then((res) => {
       return res.json();
    })
    .then((cards) => {
        let cardDisplay = document.getElementsByClassName('cardContainer')[0];

        //Select JSON file element
        cards.forEach((card) => {
            let pictureCard = new Image();
            pictureCard.src = card.picture;
            
            let titleCard = document.createElement('h3');
            titleCard.textContent = card.title;
            titleCard.style.color = "#fff";

            let dateCard = document.createElement('p');
            dateCard.textContent = card.date;
            dateCard.style.color = "#fff";

            let descriptionCard = document.createElement('p');
            descriptionCard.textContent = card.description;
            descriptionCard.style.color = "#fff";
            
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