// Display h2 title
let titleContact = document.createElement('h2');
titleContact.textContent = "Contactez-moi";
document.body.appendChild(titleContact).style.color = "#fff";
titleContact.style.textAlign = "center";

// Contact container
let contactContainer = document.createElement('div');
contactContainer.classList.add('container');
document.body.appendChild(contactContainer);

// Display icons
let iconGithub = document.createElement('img');
iconGithub.src = 'assets/img/mdi_github.png';
document.getElementsByClassName('container')[3].appendChild(iconGithub);
document.getElementsByClassName('container')[3].appendChild(iconGithub).style.maxWidth = "15%";
document.getElementsByClassName('container')[3].appendChild(iconGithub).style.maxHeight = "15%";

let iconLinkedIn = document.createElement('img');
iconLinkedIn.src = 'assets/img/mdi_linkedin.png';
document.getElementsByClassName('container')[3].appendChild(iconLinkedIn);
document.getElementsByClassName('container')[3].appendChild(iconLinkedIn).style.maxWidth = "15%";
document.getElementsByClassName('container')[3].appendChild(iconLinkedIn).style.maxHeight = "15%";

let iconBehance = document.createElement('img');
iconBehance.src = 'assets/img/devicon-plain_behance.png';
document.getElementsByClassName('container')[3].appendChild(iconBehance);
document.getElementsByClassName('container')[3].appendChild(iconBehance).style.maxWidth = "15%";
document.getElementsByClassName('container')[3].appendChild(iconBehance).style.maxHeight = "15%";

// CONTACT FORM
let contactForm = document.createElement('form');
contactForm.setAttribute('method','post');
contactForm.setAttribute('action', 'submit');
document.getElementsByClassName('container')[3].appendChild(contactForm);

let inputName = document.createElement('input');
inputName.setAttribute('type', 'text');
inputName.setAttribute('name', 'FullName');
inputName.setAttribute('placeholder', 'Enter your name');

let inputEmail = document.createElement('input');
inputEmail.setAttribute('type', 'email');
inputEmail.setAttribute('name', 'email');
inputEmail.setAttribute('placeholder', 'Enter your email');

let textArea = document.createElement('textarea');
textArea.setAttribute('name', 'message');
textArea.setAttribute('placeholder', 'Enter your message');

let buttonSubmit = document.createElement("input");
buttonSubmit.setAttribute('type','submit');
buttonSubmit.setAttribute('value', 'Submit');

contactForm.appendChild(inputName);
contactForm.appendChild(inputEmail);
contactForm.appendChild(textArea);
contactForm.appendChild(buttonSubmit);

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let fullNameValue = inputName.value;
    let emailValue = inputEmail.value;
    let messageValue = textArea.value;

    console.log(fullNameValue, emailValue, messageValue);
})