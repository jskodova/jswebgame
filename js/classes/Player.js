class Player {
    constructor(x,y) { 
        this.position = { 
            x: x,
            y: y
        }        
        this.velocity = { 
            vx: 0,
            vy: 1
        }        
        this.height = 100;
    }        
    draw() { 
        context.fillStyle = "black";
        context.fillRect(this.position.x, this.position.y, 100, this.height);
    }
    update() { 
        this.draw();
        this.position.y += this.velocity.vy;
        this.position.x += this.velocity.vx;
        if (this.position.y + this.height + this.velocity.vy < canvas.height) {
            this.velocity.vy += gravity;
        } else this.velocity.vy = 0;
    }        
}