const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const gravity = 0.5;

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
        if (this.position.y + this.height + this.velocity.vy < canvas.height) {
            this.velocity.vy += gravity;
        } else this.velocity.vy = 0;
    }        
}
let y = 100;
const player = new Player(0,0);
const player2 = new Player(300,100);

function animate() {
    window.requestAnimationFrame(animate);
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    player.update();
    player2.update();
}
animate();
window.addEventListener("keydown", (event) => { 
    switch (event.key) {
        case "d":
            console.log("moving to the right");
        break;

}
)
