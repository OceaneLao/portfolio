// HEADER
let header = document.createElement("header");
header.setAttribute(
  "class",
  "d-flex justify-content-center align-items-center align-center pt-3 pb-3 fixed-top"
);
document.body.appendChild(header).style.backgroundColor = "#010028";
document.body.appendChild(header).style.color = "#fff";

// HEADER LIST NAVBAR with title and URL (link)
let menu = [
  {
    title: "Accueil",
    url: "/accueil",
  },
  {
    title: "Mes derniers projets",
    url: "/latest-projects",
  },
  {
    title: "A propos de moi",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

// Use loop method to browse an array (list)
for (let i = 0; i < menu.length; i++) {
  let liMenu = document.createElement("li");

  // Create a link
  let link = document.createElement("a");
  link.href = menu[i].url;
  link.textContent = menu[i].title;

  liMenu.appendChild(link);
  header.appendChild(liMenu).style.listStyleType = "none";
  link.setAttribute(
    "class", 
    "ms-3 me-3 text-light text-decoration-none"
    );
}
