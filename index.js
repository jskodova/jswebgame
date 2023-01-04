const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1536;
canvas.height = 752;

const gravity = 0.5;

class Sprite {
    constructor({position, imageSrc}) {
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
        }
    draw() {
        context.drawImage(this.image, this.position.x, this.position.y)
    }  
    update() {
        console.log("bg loaded");
        this.draw();
    } 
}
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
let y = 100;
const player = new Player(0,0);
const player2 = new Player(300,100);

const keys = {
    d: {
        pressed:false
    },
    a: {
        pressed:false
    }
}

const background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: "./images/bg.jpg",
})

function animate() {
    window.requestAnimationFrame(animate);
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.save();
    context.translate(0, -80);
    context.scale(0.3, 0.3);
    background.update();
    context.restore();

    player.update();
    player2.update();

    player.velocity.vx = 0;
    if (keys.d.pressed === true) player.velocity.vx = 3;
        else if (keys.a.pressed === true) player.velocity.vx = -3;
}
animate();
window.addEventListener("keydown", (event) => { 
    switch (event.key) {
        case "d":
            keys.d.pressed = true;
            break;
        case "a":
            keys.a.pressed = true;
            break;
        case "w":
            player.velocity.vy = -15;
            break;

}})
window.addEventListener("keyup", (event) => { 
    switch (event.key) {
        case "d":
            keys.d.pressed = false;
            break;
        case "a":
            keys.a.pressed = false;
            break;

}})
let clicked = false;
window.addEventListener("click", (event) => {
    if (!clicked) {
    audio.Main.play();
    }
 }) 
