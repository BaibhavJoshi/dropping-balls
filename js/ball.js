import { getDistance, handleCollision } from "./utility.js";

let friction = 0.82;
let gravity = 0.2;

export default class Ball{
    
    constructor(x, y, radius, color, ctx){
        this.x = x;
        this.y = y;
        this.velocity = {
            x:0.1,
            y:0.1
        };
        this.radius = radius;
        this.color = color;
        this.ctx = ctx;
        this.mass = 1;
    }

    update(balls){

        this.draw();

        // Ball to ball collision

        for(let i = 0; i < balls.length; i++){
            if(balls[i] === this){
                continue;
            } else {
                // check for collision
                if(getDistance(this.x, this.y, balls[i].x, balls[i].y) <= this.radius + balls[i].radius){
                    handleCollision(this, balls[i]);
                }
            }
        }


        // Bouncy wall and gravity stuff

        if(this.y + this.radius + this.velocity.y > innerHeight){
            this.velocity.y = -this.velocity.y * friction;
        } else {
            this.velocity.y += gravity;
        }

        if(this.x + this.radius + this.velocity.x > innerWidth || this.x - this.radius + this.velocity.x < 0){
            this.velocity.x = -this.velocity.x * friction;
        } else {
            this.velocity.x *= 0.99;
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;

    }

    draw(){

        this.ctx.beginPath(); 
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();

    }

}