// this is just snippets of code, not a complete file, incorporate the changes from this snippet

// Game loop
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Display the score
    ctx.fillStyle = 'white';
    ctx.font = '24px sans-serif';
    ctx.fillText('Score: ' + score, canvas.width - 150, 30);

    // ...

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

    // Check if all enemies are destroyed
    if (enemies.length === 0) {
        // Display "You Won" message
        ctx.fillStyle = 'white';
        ctx.font = '48px sans-serif';
        ctx.fillText('You Won', canvas.width / 2, canvas.height / 2);

        // Add click listener to reset the game
        canvas.addEventListener('click', resetGame, { once: true });

        return;
    }

    // Call the game loop again on the next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();