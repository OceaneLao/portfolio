// Créer une fonction pour afficher tout le contenu de Homepage
function homepageContent() {
  let homepageContainer = document.createElement("div");
  homepageContainer.setAttribute(
    "class",
    "homepage-container container d-flex flex-column justify-content-center"
  );

  // Afficher la div et définir des propriétés de l'image en arrière plan pour la version Desktop
  document.body.appendChild(homepageContainer).style.backgroundImage =
    "url('assets/img/Vertical_block.png')";
  homepageContainer.style.backgroundPosition = "center";
  homepageContainer.style.backgroundRepeat = "no-repeat";
  homepageContainer.style.marginTop = "50px";
  homepageContainer.style.height = "645px";
  homepageContainer.style.backgroundSize = "contain";

  //Récupérer l'élément parent pour le rendre vide : cela empêchera de répéter le même bloc lors du redimensionnement
  let displayHomepage =
    document.getElementsByClassName("homepage-container")[0];
  displayHomepage.innerHTML = "";

  // Déclarer une variable en version Mobile first et ajouter une condition
  let isMobileHomepage = window.innerWidth <= 767;
  if (isMobileHomepage) {
    //Propriétés de l'image en arrière-plan en mobile first
    homepageContainer.style.backgroundImage =
      "url('assets/img/Vertical_block_mobile_first.png')";
      homepageContainer.style.marginTop = "100px";
    homepageContainer.style.height = "600px";
  }

  // Créer et afficher le titre et le bouton contenus dans une balise div
  let homepageTitleButton = document.createElement("div");
  homepageTitleButton.setAttribute("class", "homepage-title-button");
  displayHomepage.appendChild(homepageTitleButton).style.marginLeft = "100px";

  // Créer et afficher le titre H1 (slogan)
  let homepageTitle = document.createElement("h1");
  homepageTitle.textContent = "The best moment is yet to come - BTS";
  homepageTitle.setAttribute(
    "class",
    "homepage-title col-5 text-light align-items-start mb-5"
  );
  homepageTitleButton.appendChild(homepageTitle);

  // Créer et afficher le bouton "Découvrir"
  let buttonDiscover = document.createElement("a");
  buttonDiscover.setAttribute(
    "class",
    "col-2 text-decoration-none text-center align-items-center"
  );
  buttonDiscover.href = "#";
  buttonDiscover.textContent = "Découvrir";
  homepageTitleButton.appendChild(buttonDiscover).style.color = "#010028";
  buttonDiscover.style.backgroundColor = "#fff";
  buttonDiscover.style.padding = "15px 50px";
  buttonDiscover.style.borderRadius = "50px";
  buttonDiscover.style.boxShadow = "5px 5px 15px #9F23C1";
}

// Appeler la fonction
homepageContent();
//Ajouter un gestionnaire d'évènement lors du redimensionnement
window.addEventListener("resize", function () {
  homepageContent();
});