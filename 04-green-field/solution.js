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

playerImg.src = 'assets/player.png';
enemyImg.src = 'assets/enemy.png';
laserImg.src = 'assets/laser.png';

// Get the canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define the lasers array and cooldown
let lasers = [];
let lastFire = Date.now();
let fireDelay = 500;  // 0.5 seconds

let score = 0;



// Define the player's ship
const player = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    width: 50,
    height: 50,
    color: 'green',
    dx: 0, // Change in x (speed)
    dy: 0  // Change in y (speed)
};

// Define the enemies
let enemies = [
    { x: 200, y: 50, width: 50, height: 50, color: 'red' },
    { x: 375, y: 50, width: 50, height: 50, color: 'red' },
    { x: 550, y: 50, width: 50, height: 50, color: 'red' }
];

// Event listener for space key
window.addEventListener('keydown', function(e) {
    if (e.key === ' ' && Date.now() - lastFire > fireDelay) {
        // Create a new laser
        lasers.push({ x: player.x + player.width / 2, y: player.y, width: 5, height: 10, color: 'yellow' });

        // Update the last fire time
        lastFire = Date.now();
    }
});


function isColliding(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
}

// Event listeners for keydown and keyup
window.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'w': player.dy = -2; break;
        case 'a': player.dx = -2; break;
        case 's': player.dy = 2; break;
        case 'd': player.dx = 2; break;
    }
});

window.addEventListener('keyup', function(e) {
    switch(e.key) {
        case 'w':
        case 's': player.dy = 0; break;
        case 'a':
        case 'd': player.dx = 0; break;
    }
});

// Function to draw a rectangle
function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawImg(img, x, y, width, height) {
    ctx.drawImage(img, x, y, width, height);
}

function resetGame() {
    console.log('resetGame');
    player.x = canvas.width / 2;
    player.y = canvas.height - 50;
    player.dx = 0;
    player.dy = 0;

    enemies = [
        { x: 200, y: 50, width: 50, height: 50, color: 'red' },
        { x: 375, y: 50, width: 50, height: 50, color: 'red' },
        { x: 550, y: 50, width: 50, height: 50, color: 'red' }
    ];
}


// Game loop
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Display the score
    ctx.fillStyle = 'white';
    ctx.font = '24px sans-serif';
    ctx.fillText('Score: ' + score, canvas.width - 150, 30);

    // Update and draw lasers
    for (let i = 0; i < lasers.length; i++) {
        lasers[i].y -= 5;  // Move the laser up
        drawImg(laserImg, lasers[i].x, lasers[i].y, lasers[i].width, lasers[i].height);
        // drawRect(lasers[i].x, lasers[i].y, lasers[i].width, lasers[i].height, lasers[i].color);

        // Remove the laser if it's off the screen
        if (lasers[i].y < 0) {
            lasers.splice(i, 1);
            i--;
        }
    }

    // Check if all enemies are destroyed
    if (enemies.length === 0) {
        // Display "You Won" message
        ctx.fillStyle = 'white';
        ctx.font = '48px sans-serif';
        ctx.fillText('You Won', canvas.width / 2, canvas.height / 2);

        // Add click listener to reset the game
        canvas.addEventListener('click', () => {
            resetGame();
            window.requestAnimationFrame(gameLoop);
        
        }, { once: true });
        return;
    }


    // Update player position
    player.x += player.dx;
    player.y += player.dy;

    // Draw the player
    drawImg(playerImg, player.x, player.y, player.width, player.height);
    // drawRect(player.x, player.y, player.width, player.height, player.color);

    // Draw the enemies
    for (let i = 0; i < enemies.length; i++) {
        drawImg(enemyImg, enemies[i].x, enemies[i].y, enemies[i].width, enemies[i].height);
        // drawRect(enemies[i].x, enemies[i].y, enemies[i].width, enemies[i].height, enemies[i].color);

        // Check for collision with player
        if (isColliding(player, enemies[i])) {
            ctx.fillStyle = 'white';
            ctx.font = '48px sans-serif';
            ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);

            // Reset the game after a delay
            setTimeout(resetGame, 3000);
            // return;
        }

        // Check for collision with lasers
        for (let j = 0; j < lasers.length; j++) {
            if (isColliding(lasers[j], enemies[i])) {
                // Remove the enemy and the laser
                enemies.splice(i, 1);
                lasers.splice(j, 1);

                // Increase the score
                score += 50;

                break;
            }
        }
    }

    // Call the game loop again on the next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
// Start the game loop
gameLoop();