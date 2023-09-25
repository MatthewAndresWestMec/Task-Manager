const express = require('express');

const app = express();


const tasks = require('./task-controller');

// Static Assets
app.use(express.static("./public/"));
// Parse From Data
app.use(express.urlencoded({ extended: false}))

// Parse JSON
app.use(express.json())

// Routes/Router if url is used, use js
app.use('/api/tasks', people)


const initServer = async () => {
try{
    // await connectDB(process.env.MONGO_URL)
    app.listen(5000, () =>{
    console.log('listening on port 5000')
})}
    catch(error) {console.log(error)};
}
initServer();