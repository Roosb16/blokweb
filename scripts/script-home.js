// JavaScript Document
console.log("hi home");


const slides = document.querySelectorAll("main section:nth-of-type(1) li");
const slidesWrapper = document.querySelector("main section:nth-of-type(1) ul");

let index = 0;


function volgendeSlide() {
    index++;
    let liWidth = slides[0].offsetWidth;


    if (index >= slides.length) {
        index = 0;
        slidesWrapper.scrollLeft = 0;
    } else {
        slidesWrapper.scrollLeft =  slidesWrapper.scrollLeft + liWidth;
    }

   

   


    // slides[index].scrollIntoView({ behavior: "smooth", inline: "center" });
}

setInterval(volgendeSlide, 3000);