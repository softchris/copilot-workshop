// const express = require('express');
const app = express();
const port = 3000;

let users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    // Add more users as needed
];

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