// Display h2 title
let titleAbout = document.createElement('h2');
titleAbout.textContent = "A propos de moi";
document.body.appendChild(titleAbout).style.color = "#fff";
titleAbout.style.textAlign = "center";

// About container
let aboutContainer = document.createElement('div');
aboutContainer.classList.add('container');
document.body.appendChild(aboutContainer);

// Display picture
let pictureAbout = document.createElement('img');
pictureAbout.src = 'assets/img/Round_design.png';
document.getElementsByClassName('container')[2].appendChild(pictureAbout);
document.getElementsByClassName('container')[2].appendChild(pictureAbout).style.maxWidth = "40%";
document.getElementsByClassName('container')[2].appendChild(pictureAbout).maxHeight = "40%";

// Text about
let textAbout = document.createElement('p');
textAbout.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
document.getElementsByClassName('container')[2].appendChild(textAbout).style.color = "#fff";