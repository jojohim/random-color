"use strict";

randomBackground();

//COLLECTS VALUES TO SET RANDOM BACKGROUND
function randomBackground() {

    const rgbColor = randomColor(); //randomColor() is object r, g, b
    document.querySelector("body").style.backgroundColor = rgbToCSS(rgbColor); //gives body return value of rgbToCSS

}
//CONVERTS AND RETURNS RGB TO CSS
function rgbToCSS(rgbColor) {

    const cssValue = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;

    return(cssValue);
}

//GENERATES AND RETURNS RANDOM COLORS
function randomColor() {

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let rgb = {
        r,
        g,
        b,
    }

    return rgb;
}
