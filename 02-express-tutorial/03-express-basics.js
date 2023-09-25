const express = require('express');
const app = express();
// local host server with express
app.get('/', (req, res) => {
    console.log('User Hit Resource');
    res.status(200).send('Home Page Found')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page Found')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>RESOURCE NOT FOUND</h1>')
})

app.listenerCount(5000,() =>{
    console.log("Listening on http://localhost:5000")
})

/*
app.get
app.post
app.put
app.delete
app.patch
app.all
app.use
app.listen

*/