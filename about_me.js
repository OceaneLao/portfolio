// Création d'un container pour le bloc About
let aboutContainer = document.createElement("div");
aboutContainer.setAttribute(
  "class",
  "about-container container w-lg-75 w-sm-100 d-flex flex-lg-row flex-sm-column justify-content-center align-items-center ps-lg-5 pe-lg-5"
);
document.body.appendChild(aboutContainer).style.marginTop = "200px";
document.body.appendChild(aboutContainer).style.marginBottom = "200px";

// Display container picture, text and button
let aboutDisplay = document.createElement("div");
aboutDisplay.setAttribute("class", "aboutDisplay d-lg-flex");
document.getElementsByClassName("about-container")[0].appendChild(aboutDisplay);

// Créer une fonction pour afficher tout le contenu About (image, titre, texte et bouton)
function aboutContent() {
  // Récupérer l'élément parent pour pouvoir le modifier
  let displayPicture = document.getElementsByClassName("aboutDisplay")[0];

  // Effacer le contenu de l'élément parent
  displayPicture.innerHTML = "";

  // Propriétés de l'image en version Desktop
  let pictureAbout = document.createElement("img");
  pictureAbout.src = "assets/img/Round_design.png";
  pictureAbout.style.maxWidth = "25%";
  pictureAbout.style.maxHeight = "25%";
  pictureAbout.style.marginRight = "15px";

  //Afficher l'image dans le navigateur
  displayPicture.appendChild(pictureAbout);

  // Créer une div pour contenir le titre, le texte et le bouton
  let titleTextButton = document.createElement("div");
  titleTextButton.setAttribute(
    "class",
    "titleTextButton d-flex flex-column justify-content-center align-items-center"
  );
  document
    .getElementsByClassName("aboutDisplay")[0]
    .appendChild(titleTextButton);

  // Titre H2
  let titleAbout = document.createElement("h2");
  titleAbout.textContent = "A propos de moi";
  titleAbout.setAttribute("class", "text-center text-light mt-1");
  document.getElementsByClassName("titleTextButton")[0].appendChild(titleAbout);

  // Texte à propos
  let textAbout = document.createElement("p");
  textAbout.setAttribute("class", "text-about text-center text-light");
  textAbout.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.getElementsByClassName("titleTextButton")[0].appendChild(textAbout);

  // Ajouter le bouton "Contactez-moi"
  let buttonContactMe = document.createElement("a");
  buttonContactMe.setAttribute("class", "text-decoration-none");
  buttonContactMe.href = "#";
  buttonContactMe.textContent = "Contactez-moi";
  document
    .getElementsByClassName("titleTextButton")[0]
    .appendChild(buttonContactMe);
  buttonContactMe.style.color = "#010028";
  buttonContactMe.style.backgroundColor = "#fff";
  buttonContactMe.style.padding = "15px 50px";
  buttonContactMe.style.borderRadius = "50px";
  buttonContactMe.style.boxShadow = "5px 5px 15px #9F23C1";

  // Version Mobile first
  let isMobileAbout = window.innerWidth <= 767;
  if (isMobileAbout) {
    //Propriétés de l'image en mobile first
    pictureAbout.style.maxWidth = "100%";
    pictureAbout.style.maxHeight = "100%";
    pictureAbout.style.marginRight = "0px";
    //Propriétés du bouton en mobile first
    buttonContactMe.style.padding = "15px 20px";
  }
}
// Appeler la fonction
aboutContent();
// Ajouter un gestionnaire d'évènement lors du redimensionnement
window.addEventListener("resize", function () {
  aboutContent();
});
