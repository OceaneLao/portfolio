// Background image body
document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2023/04/17/19/27/plum-blossom-7933169_1280.jpg')";

document.body.style.backgroundRepeat = "no-repeat";

document.body.style.backgroundSize = "cover";

// Afficher du contenu
let newTitle = document.createElement('h1');
newTitle.textContent = 'Test';
document.body.appendChild(newTitle);