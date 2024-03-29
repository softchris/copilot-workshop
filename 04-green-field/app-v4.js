// this is just snippets of code, not a complete file, incorporate the changes from this snippet

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
            // Remove the enemy from the enemies array
            enemies.splice(i, 1);

            // Stop the game loop
            return;
        }
    }

    // Call the game loop again on the next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();