// Créer une fonction pour afficher tout le contenu de Homepage
let homepageContainer = document.createElement("div");
homepageContainer.setAttribute(
  "class",
  "homepage-container container d-flex flex-column justify-content-center"
);

// Propriétés de l'image en arrière plan pour le bloc Homepage
  let homepageBackgroundImage = "url('assets/img/Vertical_block.png')";
  document.body.appendChild(homepageContainer).style.backgroundImage =
    homepageBackgroundImage;
  document.body.appendChild(homepageContainer).style.backgroundPosition =
    "center";
  document.body.appendChild(homepageContainer).style.backgroundRepeat =
    "no-repeat";
  document.body.appendChild(homepageContainer).style.marginTop = "50px";
  document.body.appendChild(homepageContainer).style.height = "645px";
  document.body.appendChild(homepageContainer).style.backgroundSize = "contain";

  // Contenu de Homepage
  let homepageContent = document.createElement("div");
  homepageContent.setAttribute("class", "homepage-content");
  document
    .getElementsByClassName("container")[0]
    .appendChild(homepageContent).style.marginLeft = "100px";

  // Titre H1 Homepage / slogan
  let newTitle = document.createElement("h1");
  newTitle.textContent = "The best moment is yet to come - BTS";
  newTitle.setAttribute("class", "col-5 text-light align-items-start mb-5");
  document.getElementsByClassName("homepage-content")[0].appendChild(newTitle);

  // Bouton Homepage
  let buttonDiscover = document.createElement("a");
  buttonDiscover.setAttribute(
    "class",
    "col-2 text-decoration-none text-center align-items-center"
  );
  buttonDiscover.href = "#";
  buttonDiscover.textContent = "Découvrir";
  document
    .getElementsByClassName("homepage-content")[0]
    .appendChild(buttonDiscover).style.color = "#010028";
  buttonDiscover.style.backgroundColor = "#fff";
  buttonDiscover.style.padding = "15px 50px";
  buttonDiscover.style.borderRadius = "50px";
  buttonDiscover.style.boxShadow = "5px 5px 15px #9F23C1";