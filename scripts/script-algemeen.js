// JavaScript Document
console.log("hi");

const menuButton = document.querySelector("header nav:nth-of-type(2) button");
const deNav = document.querySelector("header nav:nth-of-type(2)");

menuButton.onclick = toggleMenu;

function toggleMenu(){
    deNav.classList.toggle("is-open")
    menuButton.classList.toggle("is-open")
}