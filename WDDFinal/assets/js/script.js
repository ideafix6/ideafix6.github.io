
// Code for navBar behavior
let hiddenBar = document.getElementById("hiddenbar");
let navBar = document.getElementById("navbar");
let lastScrollPos = window.scrollY;

document.onscroll = function() {
    if (window.scrollY < lastScrollPos) {
        navDown();
    } else {
        navUp();
    }
    lastScrollPos = window.scrollY;
}

hiddenBar.onmouseover = navUp;
navBar.onmouseleave = navDown;


function navUp() {
    navBar.style.top = "0px";
    hiddenBar.classList.add("hidden");
}

function navDown() {
    navBar.style.top = "-50px";
    hiddenBar.classList.remove("hidden");
}


// Coding picture wheel behavior
//          want random timing for movement - minimum of 3s with max of 10s.
var boxSelect, style, sideLength, currentOffset, imageNum, maxOffset, result

function cycleRow(box) {
    boxSelect = document.getElementById("caro" + box); // gets window we want
    style = getComputedStyle(boxSelect); // gets style of window
    sideLength = boxSelect.offsetWidth; // finds our side length to be able to multiply offset later
    currentOffset = parseInt(style.left); // gets our current position
    imageNum = document.querySelectorAll("#caro" + box + " img").length //gets number of images
    maxOffset = -1 * (imageNum-1) * sideLength
    if (currentOffset > maxOffset) {
        boxSelect.style.left = currentOffset - sideLength + "px";
    } else {boxSelect.style.left = "0px";}

}

carousel();

function carousel() {
    cycleRow(Math.ceil(4*Math.random()));
    setTimeout(carousel, 2000);

}


// Fixes glitch where carosel misaligns on resize
window.onresize = function() {
    for (let i = 1; i<5; i++) {
        document.getElementById("caro" + i).style.left = "0px";
    }
}


// Adds functionality to cart popup (only says empty for now)
document.getElementById("cartNav").onclick = function() {
    document.getElementById("cartPopup").style.left = "75%";
}

document.querySelector("#cartButton").onclick = function() {
    document.getElementById("cartPopup").style.left = "100%";
}

// Adds description on hover to catalogue cards
    // Card 1 - Home Decor
document.getElementById("homeDecor").onmouseover = function() {
    document.querySelector("#homeDecor .textHolder").style.top = "0%";
}

document.getElementById("homeDecor").onmouseleave = function() {
    document.querySelector("#homeDecor .textHolder").style.top = "85%";
}

    // Card 2 - Restaurant Decor
document.getElementById("restaurantDecor").onmouseover = function() {
    document.querySelector("#restaurantDecor .textHolder").style.top = "0%";
}

document.getElementById("restaurantDecor").onmouseleave = function() {
    document.querySelector("#restaurantDecor .textHolder").style.top = "85%";
}


    // Card 3 - Custom House Numbers
document.getElementById("customHouseNumbers").onmouseover = function() {
    document.querySelector("#customHouseNumbers .textHolder").style.top = "0%";
}

document.getElementById("customHouseNumbers").onmouseleave = function() {
    document.querySelector("#customHouseNumbers .textHolder").style.top = "85%";
}


    // Card 4 - Branded Signs
document.getElementById("corporateSignage").onmouseover = function() {
    document.querySelector("#corporateSignage .textHolder").style.top = "0%";
}

document.getElementById("corporateSignage").onmouseleave = function() {
    document.querySelector("#corporateSignage .textHolder").style.top = "85%";
}