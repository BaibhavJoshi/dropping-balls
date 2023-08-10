let friction = 0.85;
let gravity = 1;

export default class Ball{
    
    constructor(x, y, dx, dy, radius, color, ctx){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.ctx = ctx;
        this.dy = dy;
        this.dx = dx;
    }

    update(){

        if(this.y + this.radius + this.dy > innerHeight){
            this.dy = -this.dy * friction;
        } else {
            this.dy += gravity;
        }

        if(this.x + this.radius + this.dx > innerWidth || this.x - this.radius + this.dx < 0){
            this.dx = -this.dx * friction;
        } else {
            this.dx *= 0.99;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
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