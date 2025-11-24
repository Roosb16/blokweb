// JavaScript Document
console.log("hi");

const menuButton = document.querySelector("header button:nth-of-type(4)");
const deNav = document.querySelector("header nav");

menuButton.onclick = toggleMenu;

function toggleMenu(){
    menuButton.classList.toggle("kruisje")
    deNav.classList.toggle("is-open")
}