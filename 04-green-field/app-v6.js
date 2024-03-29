// this is just snippets of code, not a complete file, incorporate the changes from this snippet

// Define the lasers array and cooldown
let lasers = [];
let lastFire = Date.now();
let fireDelay = 500;  // 0.5 seconds

// Event listener for space key
window.addEventListener('keydown', function(e) {
    if (e.key === ' ' && Date.now() - lastFire > fireDelay) {
        // Create a new laser
        lasers.push({ x: player.x + player.width / 2, y: player.y, width: 5, height: 10, color: 'yellow' });

        // Update the last fire time
        lastFire = Date.now();
    }
});

// Game loop
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw lasers
    for (let i = 0; i < lasers.length; i++) {
        lasers[i].y -= 5;  // Move the laser up
        drawRect(lasers[i].x, lasers[i].y, lasers[i].width, lasers[i].height, lasers[i].color);

        // Remove the laser if it's off the screen
        if (lasers[i].y < 0) {
            lasers.splice(i, 1);
            i--;
        }
    }

    // Update player position
    player.x += player.dx;
    player.y += player.dy;

    // Draw the player
    drawRect(player.x, player.y, player.width, player.height, player.color);

    // Draw and check collisions for enemies
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
            return;
        }

        // Check for collision with lasers
        for (let j = 0; j < lasers.length; j++) {
            if (isColliding(lasers[j], enemies[i])) {
                // Remove the enemy and the laser
                enemies.splice(i, 1);
                lasers.splice(j, 1);
                break;
            }
        }
    }

    // Call the game loop again on the next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();