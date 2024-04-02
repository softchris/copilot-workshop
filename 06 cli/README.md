# CLI

You're likely to run a lot of command on the command line. A great feature of GitHub Copilot is that it can help you with the commands you need to run using the command `@terminal`

Given out space game, there are a few things that could be of interest to you. For example, you might want to:

- Run the game
- Install dependencies
- Run tests
- Build the game
- Deploy the game
- Run the game in development mode

Now of course, asking about the above you might get more than just the command but also some explanation.

## TASK, run the game

You've been running the game so far by calling `npx http-server .` in the terminal, which sets up a server for you to run the game.

It's easy to forget the command, so we can ask our AI tool for how to run the game, or any project with a prompt like so:

> PROMPT: "how do I run this project?"

You should get an outcome showing you how to run the game including the use of `npx http-server .`.

## TASK, install dependencies

Now this project is a front-end project, so you might not have any dependencies to install or you might have some. But one case where you for sure needs to install dependencies is when you're running tests. So let's focus on that use case.

> PROMPT: "how do I set up my project so I can install dependencies for running tests?"

You should get an outcome showing you how to create a Node.js project and install Jest as a dependency.

let's see if we can add some tests to our project. Let's ask Copilot to create some tests for us.

### Create tests

> PROMPT: "can you suggest some suitable tests for this project? and create them using jest"

Great, we have a set of tests, can we run the tests next?

## TASK, run tests

To run tests, we know we will be using the terminal, so let's introduce the `@terminal` command to run the tests.

> PROMPT: "@terminal how can I run tests for this project?"

You should see run instructions for the tests and running them via the terminal.

## TASK, build the game

At this point, our game is pretty simple, it's one `index.html` file and one `app.js` file. But as the game grows, we might want to divide the code into multiple files and bundle them together. This is where a build step comes in.

Type a prompt like so: 

> PROMPT: "split upp app.js in separate files, use es6 modules, also suggest bundler and bundler configuration"

You should get a response with:

- how to split up the code into separate files
- Basic configuration for a bundler like Webpack and possibly browserify.

For our next step, we need to figure out how we can run both tests, build and run the game.

## TASK, set up your project

Type a prompt similar to:

> PROMPT: "how do I install and run webpack"

You should get a response containing:

- how to install webpack.
- run instructions.

At this point, I ran into a problem and I feed that as a prompt to Webpack to fix

> PROMPT: "Cannot use import statement outside a module, using jest"

You should see a response with a fix for the problem.

Ran into another problem, the import needed fixing in the test file. You can try to fix that by asking Copilot for help.

## Task - adding feature

Now that we've set up our project, we can start adding features to our game. This is a great place to introduce the @workspace command.

The real win of using @workspace is that it looks on your whole solution when suggesting code instead of just your current file.

> PROMPT: "@workspace, make it so the enemy fighters are firing a green laser at the player, for every laser that hits the player, the player should lose a life, players starts with 3 lives. Laser image is called green-laser.png"

Let's show the entire Copilot response so you see how the code fits into the rest of the project:

RESPONSE:

Determining workspace structure

Deciding which workspace information to collect

Gathering workspace info

To implement this, you'll need to modify the `Enemy`, `Laser`, and `Player` classes. Here's a basic idea of how you can do it:

1. **Enemy.js**
```javascript
import { Laser } from './Laser.js';

export class Enemy {
    constructor() {
        // other properties...
        this.laserImage = 'green-laser.png';
    }

    fire() {
        return new Laser(this.laserImage, this.position);
    }

    // other methods...
}
```

2. **Laser.js**
```javascript
export class Laser {
    constructor(image, position) {
        this.image = image;
        this.position = position;
    }

    // other methods...
}
```

3. **Player.js**
```javascript
export class Player {
    constructor() {
        // other properties...
        this.lives = 3;
    }

    loseLife() {
        this.lives--;
    }

    // other methods...
}
```

4. **Game.js**
```javascript
import { Player } from './Player.js';
import { Enemy } from './Enemy.js';

export class Game {
    constructor() {
        this.player = new Player();
        this.enemies = [new Enemy(), new Enemy(), new Enemy()]; // example enemies
    }

    checkCollisions() {
        for (let enemy of this.enemies) {
            for (let laser of enemy.lasers) {
                if (this.player.position === laser.position) { // replace with actual collision detection
                    this.player.loseLife();
                }
            }
        }
    }

    // other methods...
}
```

This is a simplified example and doesn't include actual collision detection. You'll need to replace the collision detection logic in `checkCollisions` with your own. Also, you'll need to add a method to update the game state and redraw the game, and call `checkCollisions` in that method.

## Solution

Solution can be found here [Space game v2 folder](./space-game-v2) folder.

Here's the commands:

- Run the game: `npm start`
- Build the game: `npm run build`
- Run tests: `npm test`
- Watch mode, if you want to writ code and have it be rebuild, run tests etc: `npm run watch`

Make sure to have installed Node.js and run `npm install` before running the commands.

## Demo

![CLI demo](./copilot-cli-gif.gif)