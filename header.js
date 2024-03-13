// Créer la balise header contenant le bloc de l'en-tête de la page
let header = document.createElement("header");
header.setAttribute(
  "class",
  "header-display d-flex justify-content-lg-center justify-content-end align-items-lg-center pt-3 pb-3 fixed-top text-light me-3"
);
document.body.appendChild(header).style.backgroundColor = "#010028";

// Créer une fonction contenant l'affichage du header
function displayHeader() {
  // Créer une liste (li) contenant les onglets avec les liens (a href)
  let menu = [
    {
      title: "Accueil",
      url: "/accueil",
    },
    {
      title: "Mes derniers projets",
      url: "/latest-projects",
    },
    {
      title: "A propos de moi",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  // Utilisation du for pour parcourir le tableau
  for (let i = 0; i < menu.length; i++) {
    // Créer la liste des onglets
    let liMenu = document.createElement("li");

    // Créer des liens (a href)
    let link = document.createElement("a");
    link.href = menu[i].url;
    link.textContent = menu[i].title;

    liMenu.appendChild(link);
    header.appendChild(liMenu).style.listStyleType = "none";
    link.setAttribute("class", "ms-3 me-3 text-light text-decoration-none");

    // Déclarer une variable en version Mobile First et ajouter une condition pour le redimensionnement
    let isMobileHeader = window.innerWidth <= 767;
    if (isMobileHeader) {
      // Récupérer l'élément parent pour le rendre vide : cela permettra de modifier le contenu à l'intérieur et d'éviter de répéter les éléments à l'intérieur
      let headerIconBurgerDisplay =
        document.getElementsByClassName("header-display")[0];
      headerIconBurgerDisplay.innerHTML = "";
      // Les onglets ne s'affichent pas
      liMenu.style.display = "none";

      // Importer une icône de Font Awesome
      let iconMenu = document.createElement("i");
      iconMenu.setAttribute("class", "fa fa-bars fa-2x");
      iconMenu.setAttribute("aria-hidden", "true");
      headerIconBurgerDisplay.appendChild(iconMenu);

      iconMenu.addEventListener("click", function () {
        // alert("test");
      });
    }
  }
}
displayHeader();
