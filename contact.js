// Créer et afficher le titre H2
let titleContact = document.createElement("h2");
titleContact.textContent = "Contactez-moi";
titleContact.setAttribute("id", "contact");
titleContact.setAttribute("class", "text-center text-light mt-5 mb-1");
document.body.appendChild(titleContact);

// Créer une balise div contenant le bloc Contact
let contactContainer = document.createElement("div");
contactContainer.setAttribute(
  "class",
  "contact-container container d-flex flex-column justify-content-center align-items-center text-center text-light"
);
document.body.appendChild(contactContainer);

// Créer une balise div contenant le bloc des icônes
let iconsDiv = document.createElement("div");
iconsDiv.setAttribute("class", "iconsDiv mt-3 mb-3");
document.getElementsByClassName("contact-container")[0].appendChild(iconsDiv);

// Créer un Array avec img src (path) et a href (url)
let icons = [
  {
    url: "#",
    path: "assets/img/mdi_github.png",
  },
  {
    url: "#",
    path: "assets/img/mdi_linkedin.png",
  },
  {
    url: "#",
    path: "assets/img/devicon-plain_behance.png",
  },
];
// Sélectionner le div iconsDiv
let iconsDisplay = document.getElementsByClassName("iconsDiv")[0];
// Utiliser la méthode forEach pour parcourir le tableau
icons.forEach((icon) => {
  // Créer les images des icônes
  let displayIcons = document.createElement("img");
  displayIcons.src = icon.path;
  displayIcons.style.maxWidth = "15%";
  displayIcons.style.maxHeight = "15%";
  displayIcons.setAttribute("class", "ms-3 me-3");

  // Créer les liens a href
  let linksIcons = document.createElement("a");
  linksIcons.href = icon.url;

  linksIcons.appendChild(displayIcons);
  iconsDisplay.appendChild(linksIcons);
});

// Créer et afficher le paragraphe Info Contact
let contactText = document.createElement("p");
contactText.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
document.getElementsByClassName("container")[3].appendChild(contactText);

// Créer et afficher le formulaire de contact
let contactForm = document.createElement("form");
contactForm.setAttribute("method", "post");
contactForm.setAttribute("action", "submit");
contactForm.setAttribute("class", "contactForm w-lg-75 w-sm-100");
document.getElementsByClassName("container")[3].appendChild(contactForm);

let inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.setAttribute("name", "FullName");
inputName.setAttribute("class", "w-100 rounded mb-3 ps-3 pt-2 pb-2");
inputName.setAttribute("placeholder", "Enter your name");

let inputEmail = document.createElement("input");
inputEmail.setAttribute("type", "email");
inputEmail.setAttribute("name", "email");
inputEmail.setAttribute("class", "w-100 rounded mb-3 ps-3 pt-2 pb-2");
inputEmail.setAttribute("placeholder", "Enter your email");

let textArea = document.createElement("textarea");
textArea.setAttribute("name", "message");
textArea.setAttribute("class", "w-100 rounded mb-3 ps-3 pt-2");
textArea.setAttribute("placeholder", "Enter your message");

// Créer et afficher le bouton "Envoyer"
let buttonSubmit = document.createElement("button");
buttonSubmit.setAttribute("class", "text-decoration-none text-center");
buttonSubmit.href = "#";
buttonSubmit.textContent = "Envoyer";
document
  .getElementsByClassName("contactForm")[0]
  .appendChild(buttonSubmit).style.color = "#010028";
buttonSubmit.style.backgroundColor = "#fff";
buttonSubmit.style.padding = "15px 50px";
buttonSubmit.style.borderRadius = "50px";
buttonSubmit.style.boxShadow = "5px 5px 15px #9F23C1";

contactForm.appendChild(inputName);
contactForm.appendChild(inputEmail);
contactForm.appendChild(textArea).style.height = "150px";
contactForm.appendChild(buttonSubmit);

// Créer un gestionnaire d'évènement lors de l'envoi du formulaire
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let fullNameValue = inputName.value;
  let emailValue = inputEmail.value;
  let messageValue = textArea.value;

  console.log(fullNameValue, emailValue, messageValue);
});