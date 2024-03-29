// this is just snippets of code, not a complete file, incorporate the changes from this snippet

// Load the images
const playerImg = new Image();
const enemyImg = new Image();
const laserImg = new Image();

let assetsLoaded = 0;

playerImg.onload = enemyImg.onload = laserImg.onload = () => {
    assetsLoaded++;
    if (assetsLoaded === 3) {
        // Start the game loop after all images are loaded
        gameLoop();
    }
};

playerImg.src = 'assets/hero.png';
enemyImg.src = 'assets/enemy.png';
laserImg.src = 'assets/laser.png';

// ...

// Function to draw an image
function drawImg(img, x, y, width, height) {
    ctx.drawImage(img, x, y, width, height);
}

// Game loop
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ...

    // Draw the player
    drawImg(playerImg, player.x, player.y, player.width, player.height);

    // Draw the enemies
    for (let i = 0; i < enemies.length; i++) {
        drawImg(enemyImg, enemies[i].x, enemies[i].y, enemies[i].width, enemies[i].height);
    }

    // Draw the lasers
    for (let i = 0; i < lasers.length; i++) {
        drawImg(laserImg, lasers[i].x, lasers[i].y, lasers[i].width, lasers[i].height);
    }

    // ...
}