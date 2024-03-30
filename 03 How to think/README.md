# How to think

In this section, we will teach you how to use GitHub Copilot efficiently. First, let's establish some ground rules. Copilot is not a magic wand, you need to keep working on your code.

In this section, we will therefore improve our code gradually. We will start with a simple API and gradually improve it.

## TASK, gradually improve the API

show how to gradually improve something. Start with a simple API and gradually improve it.

> PROMPT: "generate an express api with one route that returns a list of users" as a comment in the file [demo.js](./demo.js), you should see an outcome similar to:

    ```js
    // generate an express api with one route that returns a list of users

    const express = require('express');
    const app = express();

    app.get('/users', (req, res) => {
        res.json([
            { name: 'Alice' },
            { name: 'Bob' },
            { name: 'Charlie' },
        ]);
    });

    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
    ```

Improve the code by typing the following prompt in the Chat window,

> PROMPT: "improve the code" 
you should see a response similar to:

    ```js
    const express = require('express');
    const app = express();
    const port = 3000;
    
    let users = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
        // Add more users as needed
    ];
    
    app.get('/users', (req, res) => {
        res.json(users);
    });
    
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
    
    const express = require('express');
    
    const app = express();
    
    app.get('/users', (req, res) => {
        res.json([
            { name: 'Alice' },
            { name: 'Bob' },
            { name: 'Charlie' },
        ]);
        }
    );
    
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
    ```

Type the following prompt:

> PROMPT: "how would you improve the code further", let's see what it says and what we can learn from it.

> This is a great way to get ideas on what to do next. This shows how we gradually arrive at a better solution.

## Solution

TODO