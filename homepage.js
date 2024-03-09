// Display an background image in div
let homepageContainer = document.createElement('div');
// Add class name for homepage container
homepageContainer.setAttribute('class', 'container d-flex flex-column justify-content-center');
// Display homepage block picture
document.body.appendChild(homepageContainer).style.marginTop = "50px";
document.body.appendChild(homepageContainer).style.height = "645px";
document.body.appendChild(homepageContainer).style.backgroundImage = "url('assets/img/Vertical_block.png')";
document.body.appendChild(homepageContainer).style.backgroundRepeat = "no-repeat";
document.body.appendChild(homepageContainer).style.backgroundSize= "contain";
document.body.appendChild(homepageContainer).style.backgroundPosition= "center";

// Display homepage content
let homepageContent = document.createElement('div');
homepageContent.setAttribute(
    'class',
    'homepage-content'
)
document.getElementsByClassName('container')[0].appendChild(homepageContent).style.marginLeft = "100px";

// Display H1 tilte on homepage container
let newTitle = document.createElement('h1');
newTitle.textContent = 'The best moment is yet to come - BTS';
newTitle.setAttribute(
    'class',
    'col-5 text-light align-items-start mb-5'
    )
document.getElementsByClassName('homepage-content')[0].appendChild(newTitle);

// Add button on homepage container
let buttonDiscover = document.createElement('a');
buttonDiscover.setAttribute('class',
    'col-2 text-decoration-none text-center align-items-center'
    );
buttonDiscover.href = "#";
buttonDiscover.textContent = "Découvrir";
document.getElementsByClassName('homepage-content')[0].appendChild(buttonDiscover).style.color = "#010028";
document.getElementsByClassName('homepage-content')[0].appendChild(buttonDiscover).style.backgroundColor = "#fff";
document.getElementsByClassName('homepage-content')[0].appendChild(buttonDiscover).style.padding = "20px 50px";
document.getElementsByClassName('homepage-content')[0].appendChild(buttonDiscover).style.borderRadius = "50px";