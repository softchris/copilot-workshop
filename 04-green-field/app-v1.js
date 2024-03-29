// Get the canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define the player's ship
const player = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    width: 50,
    height: 50,
    color: 'green'
};

// Define the enemies
const enemies = [
    { x: 200, y: 50, width: 50, height: 50, color: 'red' },
    { x: 375, y: 50, width: 50, height: 50, color: 'red' },
    { x: 550, y: 50, width: 50, height: 50, color: 'red' }
];

// Function to draw a rectangle
function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

// Game loop
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the player
    drawRect(player.x, player.y, player.width, player.height, player.color);

    // Draw the enemies
    for (let i = 0; i < enemies.length; i++) {
        drawRect(enemies[i].x, enemies[i].y, enemies[i].width, enemies[i].height, enemies[i].color);
    }

    // Call the game loop again on the next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();