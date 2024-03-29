// generate an express api with one route that returns a list of users

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
}