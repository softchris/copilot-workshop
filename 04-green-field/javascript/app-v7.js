// this is just snippets of code, not a complete file, incorporate the changes from this snippet
// Define the score
let score = 0;

// ...

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

    // ...

    // Call the game loop again on the next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();