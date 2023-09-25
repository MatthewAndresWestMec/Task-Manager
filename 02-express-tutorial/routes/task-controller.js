const tasks = require('./tasks.js')
const express = require('express');
const app = express();

app.use(express.json())
console.log(tasks)