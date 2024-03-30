# Brown field

Brown field is about updating an existing code base. Some common tasks include:

- Refactoring code
- Adding new features
- Fixing bugs
- Improving performance

Let's see how we can apply the above through a series of tasks.

## TASK, refactor

Type the following prompt:

> PROMPT: "improve the code, ensure laser, player and enemy are made into classes etc"

you should see a response similar to:

```javascript
class Player {
    constructor(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.dx = 0;
        this.dy = 0;
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

class Enemy {
    constructor(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
    
class Laser {
    constructor(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

// Load the images
const playerImg = new Image();
const enemyImg = new Image();
const laserImg = new Image();

let assetsLoaded = 0;

playerImg.onload = enemyImg.onload = laserImg.onload = () => {
    assetsLoaded++;
    if (assetsLoaded === 3) {
        // Initialize the player, enemies, and lasers
        player = new Player(canvas.width / 2, canvas.height - 50, 50, 50, playerImg);
        enemies = [
            new Enemy(200, 50, 50, 50, enemyImg),
            new Enemy(375, 50, 50, 50, enemyImg),
            new Enemy(550, 50, 50, 50, enemyImg)
        ];
        lasers = [];

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
```

You might need to prompt a few times to ensure your code works correctly. Refer to [app-v1.js](app-v1.js) for the final code of this task

1. Let's improve the code further, by typing the following prompt:

> PROMPT: "improve this code further, use a game class and add appropriate methods in there"

you should get a response similar to:

```javascript
class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.score = 0;
        this.lastFire = Date.now();
        this.fireDelay = 500;
        this.player = null;
        this.enemies = [];
        this.lasers = [];
        this.assetsLoaded = 0;
        this.loadAssets();
    }

    loadAssets() {
        const playerImg = new Image();
        const enemyImg = new Image();
        const laserImg = new Image();

        playerImg.onload = enemyImg.onload = laserImg.onload = () => {
            this.assetsLoaded++;
            if (this.assetsLoaded === 3) {
                this.player = new Player(this.canvas.width / 2, this.canvas.height - 50, 50, 50, playerImg);
                this.enemies = [
                    new Enemy(200, 50, 50, 50, enemyImg),
                    new Enemy(375, 50, 50, 50, enemyImg),
                    new Enemy(550, 50, 50, 50, enemyImg)
                ];
                this.gameLoop();
            }
        };

        playerImg.src = 'assets/player.png';
        enemyImg.src = 'assets/enemy.png';
        laserImg.src = 'assets/laser.png';
    }

    isColliding(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
                rect1.x + rect1.width > rect2.x &&
                rect1.y < rect2.y + rect2.height &&
                rect1.y + rect1.height > rect2.y;
    }

    resetGame() {
        this.player.x = this.canvas.width / 2;
        this.player.y = this.canvas.height - 50;
        this.player.dx = 0;
        this.player.dy = 0;

        this.enemies = [
            new Enemy(200, 50, 50, 50, enemyImg),
            new Enemy(375, 50, 50, 50, enemyImg),
            new Enemy(550, 50, 50, 50, enemyImg)
        ];
    }

    gameLoop() {
        // ... rest of the game loop code ...
    }
}

const game = new Game();
```

At this point, you can either copy in the gameLoop function from your existing code or you can prompt again like so:

> PROMPT: "use above class and update the entire code file to use it"

Final version of the code can be found in [app-v2.js](app-v2.js)

## TASK, add a new feature

Now that we've refactored the code, it's easier to a dd a new feature, so let's do just that.

Type the following prompt:

> PROMPT: "Add meteors, there should be 3 meteors, they should move from the top of the screen to the bottom. If a player or enemy collides with it, they should both be destroyed. Meteors has an image asset meteor.png that should be used to render it. Meteors can be destroyed by a laser and the player should be awarded 20 points for each meteor destroyed"

you should see a response similar to:

```javascript
class Meteor {
    constructor(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
    
class Game {
    constructor() {
        // ...
        this.meteors = [];
        this.meteorImg = new Image();
        // ...
    }

    loadAssets() {
        // ...

        this.meteorImg.onload = () => {
            this.assetsLoaded++;
            if (this.assetsLoaded === 4) {
                this.meteors = [
                    new Meteor(100, 0, 50, 50, this.meteorImg),
                    new Meteor(300, 0, 50, 50, this.meteorImg),
                    new Meteor(500, 0, 50, 50, this.meteorImg)
                ];
                // ...
            }
        };

        this.meteorImg.src = 'assets/meteor.png';
    }

    gameLoop() {
        // ...

        for (let i = 0; i < this.meteors.length; i++) {
            this.meteors[i].y += 2;
            this.meteors[i].draw(this.ctx);

            if (this.isColliding(this.player, this.meteors[i])) {
                this.ctx.fillStyle = 'white';
                this.ctx.font = '48px sans-serif';
                this.ctx.fillText('Game Over', this.canvas.width / 2, this.canvas.height / 2);
                setTimeout(() => this.resetGame(), 3000);
                return;
            }

            for (let j = 0; j < this.lasers.length; j++) {
                if (this.isColliding(this.lasers[j], this.meteors[i])) {
                    this.meteors.splice(i, 1);
                    this.lasers.splice(j, 1);
                    this.score += 20;
                    break;
                }
            }
        }

        // ...
    }

    resetGame() {
        // ...

        this.meteors = [
            new Meteor(100, 0, 50, 50, this.meteorImg),
            new Meteor(300, 0, 50, 50, this.meteorImg),
            new Meteor(500, 0, 50, 50, this.meteorImg)
        ];
    }
}

const game = new Game();
```

At this point, you've integrated meteors into your game. You might want to change the meteor speed and other properties to make the game more interesting. You could use a prompt like so:

> PROMPT: "make the meteors move randomly with in the screen and at different speeds"

you will see instructions similar to:

```javascript
class Meteor {
    constructor(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.dx = Math.random() * 4 - 2;  // Speed in x direction, random between -2 and 2
        this.dy = Math.random() * 3 + 1;  // Speed in y direction, random between 1 and 4
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

class Game {
    // ...

    gameLoop() {
        // ...

        for (let i = 0; i < this.meteors.length; i++) {
            this.meteors[i].x += this.meteors[i].dx;
            this.meteors[i].y += this.meteors[i].dy;
            this.meteors[i].draw(this.ctx);

            // If the meteor goes off the screen, reset its position and speed
            if (this.meteors[i].x < 0 || this.meteors[i].x > this.canvas.width ||
                this.meteors[i].y < 0 || this.meteors[i].y > this.canvas.height) {
                this.meteors[i] = new Meteor(Math.random() * this.canvas.width, 0, 50, 50, this.meteorImg);
            }

            // ... rest of the code ...
        }

        // ...
    }
}

const game = new Game();
```

## TASK, fix a bug

A great use case for brown field development is fixing bugs.

We do have a bug in the game so far [app-v4.js](app-v4.js), the bug is that the game is not resetting properly after the game ends when the player collides with a meteor.

To fix, we can type a prompt like so:

> PROMPT: "when the game ends due to a player colliding with a meteor, it visually doesn't reset the game, can you tell me what the problem is?"

and the game suggests that the problem is that the loop isn't being restarted after the game ends. You should see a response similar to:

```javascript
class Game {
    constructor() {
        // ...
        this.gameOver = false;
    }

    // ...

    gameLoop() {
        // ...

        for (let i = 0; i < this.meteors.length; i++) {
            // ...

            if (this.isColliding(this.player, this.meteors[i])) {
                this.ctx.fillStyle = 'white';
                this.ctx.font = '48px sans-serif';
                this.ctx.fillText('Game Over', this.canvas.width / 2, this.canvas.height / 2);
                this.gameOver = true;
                this.canvas.addEventListener('click', () => {
                    this.resetGame();
                    this.gameOver = false;
                    window.requestAnimationFrame(() => this.gameLoop());
                }, { once: true });
                return;
            }

            // ...
        }

        // ...

        if (!this.gameOver) {
            requestAnimationFrame(() => this.gameLoop());
        }
    }
}

const game = new Game();
```

## TASK, improve performance

For all apps, but especially for games, you want to improve performance. One way to do this is to reduce the number of calculations you do in each frame.

Let's see how we can do this.

Type the following prompt:

> PROMPT: "how can I improve the performance in this code?"

You should see a response similar to:

```text
Here are a few suggestions to improve the performance of your game:

1. **Use offscreen canvas for static elements:** You can draw static elements like the background, score, and other UI elements onto an offscreen canvas. Then, during each game loop, you can draw the offscreen canvas onto the main canvas. This can reduce the amount of drawing you need to do in each game loop.

2. **Reduce array operations:** Operations like `splice` can be expensive because they need to reindex the array. Instead of using `splice` to remove elements from the `lasers`, `enemies`, and `meteors` arrays, you could add an `active` property to the `Laser`, `Enemy`, and `Meteor` classes. When a laser, enemy, or meteor is destroyed, set its `active` property to `false`. Then, in the `gameLoop` method, only draw and update lasers, enemies, and meteors that are active.

3. **Use requestAnimationFrame wisely:** `requestAnimationFrame` should be the last call in your `gameLoop` function. It's better to perform all your calculations and updates first, and then request the next animation frame.

4. **Avoid creating unnecessary objects:** In your `gameLoop` method, you're creating a new `Meteor` object whenever a meteor goes off the screen. Instead, you could reset the position and speed of the existing meteor.

5. **Use bitwise operators for integer values:** Bitwise operators can sometimes be faster for integer values. For example, instead of dividing by 2, you can use the right shift operator (`>> 1`).

6. **Avoid using the `new` keyword in the game loop:** Creating new objects in the game loop can cause garbage collection, which can cause frame rate drops. Try to create all the objects you need before the game loop starts, and reuse them as much as possible.

Remember, these are micro-optimizations and might not make a noticeable difference in a small game like this. The best way to find performance bottlenecks is to use the performance profiling tools in your browser's developer tools.
```

Ok, so it suggested performance profiling tools, to see if we actually have a performance issue. Let's try that.

Type the following prompt:

> PROMPT: "how can I user performance profiling in Chrome"

"To use the Performance Profiling tool in Google Chrome, follow these steps:

1. Open Google Chrome and navigate to your game.

2. Open the Developer Tools. You can do this by right-clicking anywhere on the page and selecting "Inspect", or by using the shortcut `Ctrl+Shift+I` on Windows or `Cmd+Option+I` on Mac.

3. In the Developer Tools panel, click on the "Performance" tab.

4. Click on the "Record" button (the circle at the top left of the panel) or press `Ctrl+E` to start recording a performance profile.

5. Play your game as you normally would. Try to reproduce the performance issue you're experiencing.

6. Click the "Record" button again or press `Ctrl+E` to stop recording.

7. The panel will now show a timeline of what happened while you were recording. You can use this timeline to see where your game might be spending too much time.

- The "Summary" view gives you an overview of where time was spent (e.g., scripting, rendering, painting).
- The "Bottom-Up" and "Call Tree" views show you which functions were called and how much time was spent in each function.
- The "Event Log" view shows you a chronological log of events that occurred while you were recording.

8. You can click on an event in the timeline or in one of the views to get more information about that event.

Remember, performance profiling can slow down your game, so the performance while profiling might not be representative of the performance under normal conditions. However, it can still give you valuable insights into where your game might have performance bottlenecks."

## Challenge

TODO

## Solution

You will find the solution is [solution.js](./solution.js)

```bash
npx http-server -p 5000
```

you should see something like so:

![TODO](img)