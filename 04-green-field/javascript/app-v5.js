// this is just snippets of code, not a complete file, incorporate the changes from this snippet
// Function to reset the game
function resetGame() {
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

    // Update player position
    player.x += player.dx;
    player.y += player.dy;

    // Draw the player
    drawRect(player.x, player.y, player.width, player.height, player.color);

    // Draw the enemies
    for (let i = 0; i < enemies.length; i++) {
        drawRect(enemies[i].x, enemies[i].y, enemies[i].width, enemies[i].height, enemies[i].color);

        // Check for collision with player
        if (isColliding(player, enemies[i])) {
            // Display game over message
            ctx.fillStyle = 'white';
            ctx.font = '48px sans-serif';
            ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);

            // Reset the game after a delay
            setTimeout(resetGame, 3000);

            // Stop the game loop
            return;
        }
    }

    // Call the game loop again on the next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();