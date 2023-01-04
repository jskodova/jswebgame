const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1536;
canvas.height = 752;

const floorCollisions2D = []
for (let i=0; i < floorCollisions.length; i += 139) {
    floorCollisions2D.push(floorCollisions.slice(i, i + 139));
}

const CollisionBlocks = []
floorCollisions2D.forEach((row, y) => {
    row.forEach((collision, x) => {
        if (collision === 7846) {
            console.log("drawing a block");
            CollisionBlocks.push(
                new CollisionBlock({ 
                position: {
                    x: x * 50,
                    y: y * 50,
                    },  
                })
            )
        }
    })
})
console.log(CollisionBlocks);

const gravity = 0.5;

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
    imageSrc: "./images/map.png",
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

    CollisionBlocks.forEach(collisionBlock => {
    collisionBlock.update();
    });

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