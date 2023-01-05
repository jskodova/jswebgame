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