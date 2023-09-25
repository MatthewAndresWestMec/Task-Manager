const express = require('express');
const path = require('path');

const app = express();

// local host server with express
app.use(express.static(path.join(__dirname, 'pubic')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public/index.html"));
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public/about.html"));
})

app.all('*', (req, res) => {
    res.status(404).send('RESOURCE NOT FOUND')
})

app.listenerCount(5000,() =>{
    console.log("Listening on http://localhost:5000")
})
