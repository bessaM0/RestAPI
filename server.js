const express = require('express');
const app = express();
const connectDB = require('./db');

//routes

app.get('/', (req, res) => { 
    res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

connectDB();

