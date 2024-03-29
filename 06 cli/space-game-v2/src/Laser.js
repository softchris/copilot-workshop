export class Laser {
    constructor(x, y, width, height, image, type ="friendly") {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.type = type;
    }

    draw(ctx) {
        if (this.image) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            console.log('No image found for laser', this.type);
        }
        
    }
}