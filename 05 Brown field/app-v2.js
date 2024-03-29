// @ts-check

class Player {
    constructor(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.dx = 0;
        this.dy = 0;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

class Enemy {
    constructor(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

class Laser {
    constructor(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.score = 0;
        this.lastFire = Date.now();
        this.fireDelay = 500;
        this.player = null;
        this.enemies = [];
        this.lasers = [];
        this.playerImg = new Image();
        this.enemyImg = new Image();
        this.laserImg = new Image();
        this.assetsLoaded = 0;
        this.loadAssets();
        this.setupEventListeners();
      
    }

    loadAssets() {
       

        this.playerImg.onload = this.enemyImg.onload = this.laserImg.onload = () => {
            this.assetsLoaded++;
            if (this.assetsLoaded === 3) {
                this.player = new Player(this.canvas.width / 2, this.canvas.height - 50, 50, 50, this.playerImg);
                this.enemies = [
                    new Enemy(200, 50, 50, 50, this.enemyImg),
                    new Enemy(375, 50, 50, 50, this.enemyImg),
                    new Enemy(550, 50, 50, 50, this.enemyImg)
                ];
                this.gameLoop();
            }
        };

        this.playerImg.src = 'assets/player.png';
        this.enemyImg.src = 'assets/enemy.png';
        this.laserImg.src = 'assets/laser.png';
    }

    setupEventListeners() {
        window.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'w': this.player.dy = -2; break;
                case 'a': this.player.dx = -2; break;
                case 's': this.player.dy = 2; break;
                case 'd': this.player.dx = 2; break;
                case ' ': 
                    console.log('space');
                    if (Date.now() - this.lastFire > this.fireDelay) {
                        this.lasers.push(new Laser(this.player.x + this.player.width / 2, this.player.y, 5, 10, this.laserImg));
                        this.lastFire = Date.now();
                    }
                    break;
            }
        });

        window.addEventListener('keyup', (e) => {
            switch(e.key) {
                case 'w':
                case 's': this.player.dy = 0; break;
                case 'a':
                case 'd': this.player.dx = 0; break;
            }
        });
    }

    isColliding(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
    }

    resetGame() {
        this.player.x = this.canvas.width / 2;
        this.player.y = this.canvas.height - 50;
        this.player.dx = 0;
        this.player.dy = 0;

        this.enemies = [
            new Enemy(200, 50, 50, 50, this.enemyImg),
            new Enemy(375, 50, 50, 50, this.enemyImg),
            new Enemy(550, 50, 50, 50, this.enemyImg)
        ];
    }

    gameLoop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'white';
        this.ctx.font = '24px sans-serif';
        this.ctx.fillText('Score: ' + this.score, this.canvas.width - 150, 30);

        for (let i = 0; i < this.lasers.length; i++) {
            this.lasers[i].y -= 5;
            this.lasers[i].draw(this.ctx);

            if (this.lasers[i].y < 0) {
                this.lasers.splice(i, 1);
                i--;
            }
        }

        this.player.x += this.player.dx;
        this.player.y += this.player.dy;
        this.player.draw(this.ctx);

        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].draw(this.ctx);

            if (this.isColliding(this.player, this.enemies[i])) {
                this.ctx.fillStyle = 'white';
                this.ctx.font = '48px sans-serif';
                this.ctx.fillText('Game Over', this.canvas.width / 2, this.canvas.height / 2);
                setTimeout(() => this.resetGame(), 3000);
                return;
            }

            for (let j = 0; j < this.lasers.length; j++) {
                if (this.isColliding(this.lasers[j], this.enemies[i])) {
                    this.enemies.splice(i, 1);
                    this.lasers.splice(j, 1);
                    this.score += 50;
                    break;
                }
            }
        }

        if (this.enemies.length === 0) {
            this.ctx.fillStyle = 'white';
            this.ctx.font = '48px sans-serif';
            this.ctx.fillText('You Won', this.canvas.width / 2, this.canvas.height / 2);
            this.canvas.addEventListener('click', () => {
                this.resetGame();
                window.requestAnimationFrame(() => this.gameLoop());
            }, { once: true });
            return;
        }

        requestAnimationFrame(() => this.gameLoop());
    }
}

const game = new Game();