// this is just snippets of code, not a complete file, refer to app-v2.js for the full file and incorporate the changes from this snippet

function isColliding(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
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
            console.log('Collision detected!');
            // Handle collision...
        }
    }

    // Call the game loop again on the next frame
    requestAnimationFrame(gameLoop);
}