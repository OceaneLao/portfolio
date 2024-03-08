// Header
let header = document.createElement('header');
document.body.appendChild(header).style.backgroundColor = '#010028';
document.body.appendChild(header).style.color = "white";

// Header list in navbar
let menu = [
    'Accueil', 
    'Mes dernières réalisations', 
    'A propos de moi', 
    'Me contacter'
];
// Use loop method
for (let i = 0; i < menu.length; i++) {
    let liMenu = document.createElement('li');
    liMenu.innerText = menu[i];
    header.appendChild(liMenu).style.listStyleType = "none";
}