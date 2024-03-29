// @ts-check
import { Laser } from './Laser.js';

export class Enemy {
    constructor(x, y, width, height, image, laserImg) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.laserImg = laserImg;
        this.lasers = [];
        
        setInterval(() => {
            this.fire();
        }, 1000 + Math.random() * 3000); // Random time between 1 and 4 seconds
       
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    fire() {
        this.lasers.push(new Laser(
            this.x + this.width / 2, 
            this.y, 
            5, 
            10, 
            this.laserImg, "enemy")
        );
    }
}