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

class Meteor {
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
        this.meteors = [];
        this.meteorImg = new Image();
        this.gameOver = false;
        this.loadAssets();
        this.setupEventListeners();
    }

    isColliding(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
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

    loadAssets() {
        this.playerImg.onload = this.meteorImg.onload = this.enemyImg.onload = this.laserImg.onload = () => {
            this.assetsLoaded++;
            if (this.assetsLoaded === 4) {
                this.player = new Player(this.canvas.width / 2, this.canvas.height - 50, 50, 50, this.playerImg);
                this.enemies = [
                    new Enemy(200, 50, 50, 50, this.enemyImg),
                    new Enemy(375, 50, 50, 50, this.enemyImg),
                    new Enemy(550, 50, 50, 50, this.enemyImg)
                ];
                this.meteors = [
                    new Meteor(100, 0, 50, 50, this.meteorImg),
                    new Meteor(300, 0, 50, 50, this.meteorImg),
                    new Meteor(500, 0, 50, 50, this.meteorImg)
                ];
                this.gameLoop();
            }
        };

        this.meteorImg.src = 'assets/meteor.png';
        this.playerImg.src = 'assets/player.png';
        this.enemyImg.src = 'assets/enemy.png';
        this.laserImg.src = 'assets/laser.png';
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
                this.gameOver = true;
                this.canvas.addEventListener('click', () => {
                    this.resetGame();
                    this.gameOver = false;
                    window.requestAnimationFrame(() => this.gameLoop());
                }, { once: true });
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
            this.gameOver = true;
            this.canvas.addEventListener('click', () => {
                this.resetGame();
                this.gameOver = false;
                window.requestAnimationFrame(() => this.gameLoop());
            }, { once: true });
            return;
        }

        if (this.meteors.length < 2) {
            this.meteors.push(new Meteor(Math.random() * this.canvas.width, 0, 50, 50, this.meteorImg));
        }

        for (let i = 0; i < this.meteors.length; i++) {
            this.meteors[i].x += this.meteors[i].dx;
            this.meteors[i].y += this.meteors[i].dy;
            this.meteors[i].draw(this.ctx);

            // If the meteor goes off the screen, reset its position and speed
            if (this.meteors[i].x < 0 || this.meteors[i].x > this.canvas.width ||
                this.meteors[i].y < 0 || this.meteors[i].y > this.canvas.height) {
                this.meteors[i] = new Meteor(Math.random() * this.canvas.width, 0, 50, 50, this.meteorImg);
            }

            if (this.isColliding(this.player, this.meteors[i])) {
                this.ctx.fillStyle = 'white';
                this.ctx.font = '48px sans-serif';
                this.ctx.fillText('Game Over', this.canvas.width / 2, this.canvas.height / 2);
                this.gameOver = true;
                this.canvas.addEventListener('click', () => {
                    this.resetGame();
                    this.gameOver = false;
                    window.requestAnimationFrame(() => this.gameLoop());
                }, { once: true });
                return;
            }

            for (let j = 0; j < this.lasers.length; j++) {
                if (this.isColliding(this.lasers[j], this.meteors[i])) {
                    this.meteors.splice(i, 1);
                    this.lasers.splice(j, 1);
                    this.score += 20;
                    break;
                }
            }
        }

        if (!this.gameOver) {
            requestAnimationFrame(() => this.gameLoop());
        }
    }

    resetGame() {
        console.log('resetting game');
        this.player.x = this.canvas.width / 2;
        this.player.y = this.canvas.height - 50;
        this.player.dx = 0;
        this.player.dy = 0;
        this.score = 0;

        this.enemies = [
            new Enemy(200, 50, 50, 50, this.enemyImg),
            new Enemy(375, 50, 50, 50, this.enemyImg),
            new Enemy(550, 50, 50, 50, this.enemyImg)
        ];

        this.meteors = [
            new Meteor(100, 0, 50, 50, this.meteorImg),
            new Meteor(300, 0, 50, 50, this.meteorImg),
            new Meteor(500, 0, 50, 50, this.meteorImg)
        ];
    }
}

const game = new Game();