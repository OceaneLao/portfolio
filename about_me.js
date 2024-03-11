// About container
let aboutContainer = document.createElement("div");
aboutContainer.setAttribute(
  "class",
  "aboutContainer container w-75 d-flex d-flex flex-lg-row flex-sm-column justify-content-center align-items-center ps-5 pe-5"
);
document.body.appendChild(aboutContainer).style.marginTop = "200px";
document.body.appendChild(aboutContainer).style.marginBottom = "200px";

// Display container picture, text and button
let aboutDisplay = document.createElement("div");
aboutDisplay.setAttribute(
  "class", 
  "aboutDisplay");
document.getElementsByClassName("aboutContainer")[0].appendChild(aboutDisplay);

// Display picture
let pictureAbout = document.createElement("img");
pictureAbout.src = "assets/img/Round_design.png";
document.getElementsByClassName("aboutDisplay")[0].appendChild(pictureAbout);
document
  .getElementsByClassName("aboutDisplay")[0]
  .appendChild(pictureAbout).style.maxWidth = "25%";
document
  .getElementsByClassName("aboutDisplay")[0]
  .appendChild(pictureAbout).style.maxHeight = "25%";
document
  .getElementsByClassName("aboutDisplay")[0]
  .appendChild(pictureAbout).style.marginRight = "15px";

// Title, text and button
let titleTextButton = document.createElement("div");
titleTextButton.setAttribute(
  "class",
  "titleTextButton d-flex flex-column justify-content-center align-items-center"
);
document.getElementsByClassName("aboutDisplay")[0].appendChild(titleTextButton);

// Title H2
let titleAbout = document.createElement("h2");
titleAbout.textContent = "A propos de moi";
titleAbout.setAttribute(
  "class", 
  "text-center text-light mt-1"
  );
document.getElementsByClassName("titleTextButton")[0].appendChild(titleAbout);

// Text about
let textAbout = document.createElement("p");
textAbout.setAttribute("class", "textAbout text-center");
textAbout.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
document
  .getElementsByClassName("titleTextButton")[0]
  .appendChild(textAbout).style.color = "#fff";

// Add button Contact Me container
let buttonContactMe = document.createElement("a");
buttonContactMe.setAttribute("class", "text-decoration-none");
buttonContactMe.href = "#";
buttonContactMe.textContent = "Contactez-moi";
document
  .getElementsByClassName("titleTextButton")[0]
  .appendChild(buttonContactMe).style.color = "#010028";
document
  .getElementsByClassName("titleTextButton")[0]
  .appendChild(buttonContactMe).style.backgroundColor = "#fff";
document
  .getElementsByClassName("titleTextButton")[0]
  .appendChild(buttonContactMe).style.padding = "15px 50px";
document
  .getElementsByClassName("titleTextButton")[0]
  .appendChild(buttonContactMe).style.borderRadius = "50px";
document
  .getElementsByClassName("titleTextButton")[0]
  .appendChild(buttonContactMe).style.boxShadow = "5px 5px 15px #9F23C1";
