const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const authorize = require('./middleware/authorize');

/*
req => middleware => response
order matters if you place the app.use after the home get, then it wont run on the home get since the
response will end before the middleware has a chance to run
// app.use(logger)

if you have several middle wares then you can call them in an array where again order will matter


*/

// gets without middleware (no app.use)

app.get('/', (req,res) => {
    res.send('Home')
})
app.get('/about', (req,res) => {
    res.send('About')
})

// gets w/ middleware

app.listen(5000,() => {console.log('listening on 5000')})
app.use('/api', [logger,authorize]);

app.get('/api/products', (req,res) => {
    console.log(res.user)
    res.send('products')
})
app.get('/api/items', (req,res) => {
    console.log(res.user)
    res.send('items')
})

/* Applies the logger to any path that includes /api
as a port of its path
This is a nice way for you to run a logger on api to stop a certain 
amount of requests but sill allow them on the home and the documentation

Old way of app.use('/api',logger);*/
