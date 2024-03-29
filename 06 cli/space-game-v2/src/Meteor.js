export class Meteor {
    constructor(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.dx = Math.random() * 4 - 2;  // Speed in x direction, random between -2 and 2
        this.dy = Math.random() * 3 + 1;  // Speed in y direction, random between 1 and 4
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}