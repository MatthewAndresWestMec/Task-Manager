const express = require('express');
const app = express();
const morgan = require('morgan')

// app.use(express.static('./public'))

app.use(morgan('short'))

app.get('/', (req,res) => {
    res.send('welcome home')
})
app.get('/about', (req,res) => {
    res.send('About')
})
app.get('/api/products', (req,res) => {
    res.send('Products')
})
app.get('/api/items', (req,res) => {
    res.send('Items')
})
app.all('*', (req,res) => {res.send('thats nothing')})

app.listen(5000,()=>{
    console.log('listening on 5000')
})