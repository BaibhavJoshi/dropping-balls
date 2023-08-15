// Imports

import {getRandomInt, getRandomColor, getDistance} from "./utility.js"
import Ball from "./ball.js";

// Setup

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

// Objects

let colors = [
    "#3D5B81",
    "#9BC0D9",
    "#5A82FC",
    "#EE6B4D",
    "#293241"
];

let mouse = {
    x : undefined,
    y : undefined
};


// Reset Button

let resetButton = document.createElement("BUTTON");
const buttonText = document.createTextNode("RESET");
resetButton.id = "resetButton";
resetButton.classList.add("resetButton");
resetButton.style.position = "relative";
resetButton.appendChild(buttonText);
ctx.canvas.parentNode.appendChild(resetButton);

let buttonX = canvas.width/2 - 105;
let buttonY = 50;

resetButton.style.left = buttonX + "px";
resetButton.style.top = buttonY + "px";

resetButton.style.backgroundColor = getRandomColor(colors);



// Event Listeners

window.addEventListener("resize", function(event){
    this.location.reload();
});

window.addEventListener("mousemove", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

document.getElementById("resetButton").addEventListener("click", function(event){
    location.reload();
});

// Initialization

let numBalls = 10;

let balls = [];

for(let i = 0; i <= numBalls; i++){

    let x = getRandomInt(100, canvas.width - 100);
    let y = getRandomInt(200, canvas.height/2);
    let radius = 40;

    // Making sure they don't spawn at the same place

    for(let j = 0; j < balls.length; j++){
        if(i === 0){
            continue;
        } else {
            if(getDistance(x, y, balls[j].x, balls[j].y) <= 2*radius){
                x = getRandomInt(100, canvas.width - 100);
                y = getRandomInt(200, canvas.height/2);
                j = -1;
            }
        }
    }


    balls.push(new Ball(x, y, radius, getRandomColor(colors), ctx));
}


// Animation loop

function animate(){
    requestAnimationFrame(animate);
    
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let i = 0; i <= numBalls; i++){
        balls[i].update(balls);
    }

}



animate();





