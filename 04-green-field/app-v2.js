// Get the canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

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
const enemies = [
    { x: 200, y: 50, width: 50, height: 50, color: 'red' },
    { x: 375, y: 50, width: 50, height: 50, color: 'red' },
    { x: 550, y: 50, width: 50, height: 50, color: 'red' }
];

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

// Game loop
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update player position
    player.x += player.dx;
    player.y += player.dy;

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