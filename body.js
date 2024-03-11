// Function to set the background according to the width of the screen
function setBodyBackground() {
  let isMobile = window.innerWidth <= 767;
  let backgroundImage = "url('assets/img/Background_V1.png')";

  document.body.style.backgroundImage = backgroundImage;

// Condition for mobile first display
  if (isMobile) {
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundRepeat = "repeat";
  } else {
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
  }
}

// Call the function when loading the page
setBodyBackground();

// Add a window resizing event manager
window.addEventListener("resize", setBodyBackground);