// HEADER
let header = document.createElement("header");
header.setAttribute(
  "class",
  "header-display d-flex justify-content-lg-center justify-content-end align-items-lg-center pt-3 pb-3 fixed-top text-light me-3"
);
document.body.appendChild(header).style.backgroundColor = "#010028";

function displayHeader() {
  // HEADER LIST NAVBAR with title and URL (link)
  let menu = [
    {
      title: "Homepage",
      url: "#",
    },
    {
      title: "Mes derniers projets",
      url: "#latest-projects",
    },
    {
      title: "A propos de moi",
      url: "#about",
    },
    {
      title: "Contact",
      url: "#contact",
    },
  ];

  // Use loop method to browse an array (list)
  for (let i = 0; i < menu.length; i++) {
    let liMenu = document.createElement("li");

    // Create a link
    let link = document.createElement("a");
    link.href = menu[i].url;
    link.textContent = menu[i].title;

    liMenu.appendChild(link);
    header.appendChild(liMenu).style.listStyleType = "none";
    link.setAttribute("class", "ms-3 me-3 text-light text-decoration-none");

    // Déclarer une variable en version Mobile First et ajouter une condition
    let isMobileHeader = window.innerWidth <= 767;
    if (isMobileHeader) {
      // Récupérer l'élément parent pour le rendre vide : cela permettra de modifier le contenu à l'intérieur et éviter de répéter les éléments à l'intérieur
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

      //Menu navbar en version Mobile First
      let displayMenuMobileFirst = null;
      //Créer une condition lorsque l'icône Menu Burger est cliqué
      iconMenu.addEventListener("click", function () {
        if (!displayMenuMobileFirst) {
          displayMenuMobileFirst = document.createElement("div");
          displayMenuMobileFirst.setAttribute(
            "class",
            "display-menu-mobile-first container d-flex justify-content-center align-items-center"
          );
          displayMenuMobileFirst.style.position = "fixed";
          displayMenuMobileFirst.style.top = "0px";
          displayMenuMobileFirst.style.backgroundImage =
            "url('assets/img/Background_V1.png')";
          displayMenuMobileFirst.style.backgroundSize = "cover";
          displayMenuMobileFirst.style.height = "700px";
          displayMenuMobileFirst.style.width = "100%";
          displayMenuMobileFirst.style.backgroundRepeat = "no-repeat";
          displayMenuMobileFirst.style.backgroundPosition = "center";
          document.body.appendChild(displayMenuMobileFirst);

          //Afficher les onglets en version mobile first
          let ulMenuMobileFirst = document.createElement("ul");
          ulMenuMobileFirst.setAttribute("class", "p-0 m-0 text-center");

          for (let i = 0; i < menu.length; i++) {
            let liMenuMobileFirst = document.createElement("li");
            liMenuMobileFirst.setAttribute("class", "mt-1 mb-1");

            // Create a link
            let link = document.createElement("a");
            link.href = menu[i].url;
            link.textContent = menu[i].title;

            displayMenuMobileFirst.appendChild(ulMenuMobileFirst);
            ulMenuMobileFirst.appendChild(liMenuMobileFirst);
            liMenuMobileFirst.appendChild(link);

            liMenuMobileFirst.style.listStyleType = "none";
            link.setAttribute("class", "text-light text-decoration-none");

            //Créer un gestionnaire d'évènement lorsqu'un onglet est cliqué, celui-ci amène à une ancre et l'affichage s'enlève 
            link.addEventListener("click", function(){
              displayMenuMobileFirst.remove();
            });
          }

        } else {
          displayMenuMobileFirst.remove();
          displayMenuMobileFirst = null;
        }
      });
    }
  }
}
displayHeader();