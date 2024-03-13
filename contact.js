// Créer et afficher le titre H2
let titleContact = document.createElement("h2");
titleContact.textContent = "Contactez-moi";
titleContact.setAttribute("class", "text-center text-light mt-5 mb-1");
document.body.appendChild(titleContact);

// Créer une balise div contenant le bloc Contact
let contactContainer = document.createElement("div");
contactContainer.setAttribute(
  "class",
  "container d-flex flex-column justify-content-center align-items-center text-center text-light"
);
document.body.appendChild(contactContainer);

// Créer une balise div contenant le bloc des icônes
let iconsDiv = document.createElement("div");
iconsDiv.setAttribute("class", "iconsDiv mt-3 mb-3");
document.getElementsByClassName("container")[3].appendChild(iconsDiv);

// Créer une balise image contenant l'icône Github
let iconGithub = document.createElement("img");
iconGithub.src = "assets/img/mdi_github.png";
document.getElementsByClassName("iconsDiv")[0].appendChild(iconGithub);
document
  .getElementsByClassName("iconsDiv")[0]
  .appendChild(iconGithub).style.maxWidth = "15%";
document
  .getElementsByClassName("iconsDiv")[0]
  .appendChild(iconGithub).style.maxHeight = "15%";
iconGithub.setAttribute("class", "ms-3 me-3");

// Créer une balise image contenant l'icône LinkedIn
let iconLinkedIn = document.createElement("img");
iconLinkedIn.src = "assets/img/mdi_linkedin.png";
document.getElementsByClassName("iconsDiv")[0].appendChild(iconLinkedIn);
document
  .getElementsByClassName("iconsDiv")[0]
  .appendChild(iconLinkedIn).style.maxWidth = "15%";
document
  .getElementsByClassName("iconsDiv")[0]
  .appendChild(iconLinkedIn).style.maxHeight = "15%";
iconLinkedIn.setAttribute("class", "ms-3 me-3");

// Créer une balise image contenant l'icône Behance
let iconBehance = document.createElement("img");
iconBehance.src = "assets/img/devicon-plain_behance.png";
document.getElementsByClassName("iconsDiv")[0].appendChild(iconBehance);
document
  .getElementsByClassName("iconsDiv")[0]
  .appendChild(iconBehance).style.maxWidth = "15%";
document
  .getElementsByClassName("iconsDiv")[0]
  .appendChild(iconBehance).style.maxHeight = "15%";
iconBehance.setAttribute("class", "ms-3 me-3");

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
