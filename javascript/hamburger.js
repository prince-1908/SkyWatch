let hamburger = document.getElementById("hamburger");
let navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

const navListItems = document.getElementsByClassName("nav-list-item");
Array.from(navListItems).forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
