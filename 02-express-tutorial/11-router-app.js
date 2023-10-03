const express = require('express');
require('dotenv').config
require('./db/connect')
const app = express();


const tasks = require('./routes/tasks-controller');

const people = require('./routes/people-controller');

const auth = require('./routes/auth');
const connectDB = require('./db/connect');
// Static Assets
app.use(express.static("./public/"));
// Parse From Data
app.use(express.urlencoded({ extended: false}))

// Parse JSON
app.use(express.json())

// Routes/Router if url is used, use js
app.use('/api/tasks', tasks)
app.use('/api/people', people)
app.use('/login', auth)

const initServer = async () => {
try{
    // await connectDB(process.env.MONGO_URL)
    app.listen(5000, () =>{
    console.log('listening on port 5000')
})}
    catch(error) {console.log(error)};
}
initServer();