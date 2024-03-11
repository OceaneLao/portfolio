// Function to set the homepage background image according to the width of the screen
function setHomepageBackgroundImage() {
  let isMobile = window.innerWidth <= 767;

  let homepageContainer = document.createElement("div");
  homepageContainer.setAttribute(
    "class",
    "container d-flex flex-column justify-content-center"
  );

  let homepageBackgroundImage = "url('assets/img/Vertical_block.png')";
  document.body.appendChild(homepageContainer).style.backgroundImage =
    homepageBackgroundImage;
  if (isMobile) {
  } else {
    document.body.appendChild(homepageContainer).style.backgroundPosition =
      "center";
    document.body.appendChild(homepageContainer).style.backgroundRepeat =
      "no-repeat";
    document.body.appendChild(homepageContainer).style.marginTop = "50px";
    document.body.appendChild(homepageContainer).style.height = "645px";
    document.body.appendChild(homepageContainer).style.backgroundSize =
      "contain";
  }

  // Display homepage content
  let homepageContent = document.createElement("div");
  homepageContent.setAttribute("class", "homepage-content");
  document
    .getElementsByClassName("container")[0]
    .appendChild(homepageContent).style.marginLeft = "100px";
}

setHomepageBackgroundImage();

window.addEventListener("resize", setHomepageBackgroundImage);

// Display H1 tilte on homepage container
let newTitle = document.createElement("h1");
newTitle.textContent = "The best moment is yet to come - BTS";
newTitle.setAttribute("class", "col-5 text-light align-items-start mb-5");
document.getElementsByClassName("homepage-content")[0].appendChild(newTitle);

// Add button on homepage container
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
document
  .getElementsByClassName("homepage-content")[0]
  .appendChild(buttonDiscover).style.backgroundColor = "#fff";
document
  .getElementsByClassName("homepage-content")[0]
  .appendChild(buttonDiscover).style.padding = "15px 50px";
document
  .getElementsByClassName("homepage-content")[0]
  .appendChild(buttonDiscover).style.borderRadius = "50px";
document
  .getElementsByClassName("homepage-content")[0]
  .appendChild(buttonDiscover).style.boxShadow = "5px 5px 15px #9F23C1";
