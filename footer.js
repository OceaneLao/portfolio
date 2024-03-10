// FOOTER
let footer = document.createElement('footer');
footer.setAttribute(
    'class',
    'footer d-flex justify-content-center alugne-items-center align-center pt-5 pb-3 text-light'
);
document.body.appendChild(footer).style.backgroundColor = "#010028";

// Add paragraph
let footerContent = document.createElement('p');
footerContent.textContent = 'LAO Océane - 2024';
document.getElementsByClassName('footer')[0].appendChild(footerContent);