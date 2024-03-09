// Display an background image in div
let homepageContainer = document.createElement('div');
// Add class name for homepage container
homepageContainer.classList.add('container');
console.log(homepageContainer.classList.toString());
// Display homepage block picture
document.body.appendChild(homepageContainer).style.height = "650px";
document.body.appendChild(homepageContainer).style.backgroundImage = "url('assets/img/Horizontal_block_V2.png')";
document.body.appendChild(homepageContainer).style.backgroundRepeat = "no-repeat";
document.body.appendChild(homepageContainer).style.backgroundSize= "contain";
document.body.appendChild(homepageContainer).style.backgroundPosition= "center";

// Display H1 tilte on homepage container
let newTitle = document.createElement('h1');
newTitle.textContent = 'The best moment is yet to come - BTS';
newTitle.style.color = '#fff';
document.getElementsByClassName('container')[0].appendChild(newTitle);

// Add button on homepage container
let buttonDiscover = document.createElement('button');
buttonDiscover.textContent = "Découvrir";
document.getElementsByClassName('container')[0].appendChild(buttonDiscover);