// Your code goes here


//MOUSEOVER
let title = document.querySelector(".main-navigation h1");
title.addEventListener("mouseover", e => {
    title.style.fontSize = "8rem";
    e.stopPropagation();
});
title.addEventListener("mouseout", e => {
    title.style.color = "orange";
    e.stopPropagation();
})

//FIX NAVBAR RELOAD
let navbar = Array.from(document.querySelector(".nav"));
navbar.forEach(anchor => {
    anchor.addEventListener("click", e => {
        e.preventDefault();
    });
});


//KEYDOWN
window.addEventListener("keydown", () => {
    alert("A key was pressed.");
});


//WHEEL
window.addEventListener("wheel", () => {
    let destinationText = document.querySelector(".destination p");
    destinationText.style.color = "red";
});

//DRAG/DROP
let bodyContent = document.querySelector(".text-content");
document.addEventListener("drag", e => {
    bodyContent.style.backgroundColor = "red";
}, false);



//LOAD
window.addEventListener("load", () => {
    alert("Page has finished loading. All aboard the fun bus!");
});

//FOCUS
let signUpBtn = document.querySelectorAll(".nav-link");
signUpBtn[0].addEventListener("focus", () => {
    signUpBtn[0].style.color = "pink";
});
console.log(signUpBtn);

//RESIZE
window.addEventListener("resize", () => {
    alert("Window was resized");
});

//SCROLL
window.addEventListener("scroll", () => {
    let contentDestination = document.querySelector(".content-destination");
    contentDestination.style.color = "blue";
});


//SELECT
let welcomeText = document.querySelector("textarea");
welcomeText.addEventListener("select", e => {
    welcomeText.style.fontSize = "4rem";
});

//DOUBLE CLICK
let busImg = document.querySelector(".intro img");
busImg.addEventListener("dblclick", () => {
    busImg.style.visibility = "hidden";
});