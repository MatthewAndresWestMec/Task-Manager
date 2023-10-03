let TASK = require('./models/task');
let PERSON = require('./models/person');
const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
const connectDB = require('./db/connect');

const people = [
  {
      name: "John Smith",
      id: 1,
      age: "12",
      tasksAssigned: []
  },
  {
      name: "Emily Johnson",
      id: 2,
      age: "19",
      tasksAssigned: []
  },
  {
      name: "Michael Brown",
      id: 3,
      age: "45",
      tasksAssigned: []
  },
  {
      name: "Sarah Davis",
      id: 4,
      age: "17",
      tasksAssigned: []
  },
  {
      name: "William Wilson",
      id: 5,
      age: "29",
      tasksAssigned: []
  }
];

const tasks = [
  {
      taskName: "Walk the Dog",
      taskID: 1,
      taskDesc: "walk the dog in the park",
      assigned: false
  },
  {
      taskName: "Eat Lunch",
      taskID: 2,
      taskDesc: "eat a sandwich",
      assigned: false
  },
  {
      taskName: "Buy Groceries",
      taskID: 3,
      taskDesc: "buy ingredients",
      assigned: false
  },
  {
      taskName: "Eat Dinner",
      taskID: 4,
      taskDesc: "eat spaghetti",
      assigned: false
  },
  {
      taskName: "Feed the Dog",
      taskID: 5,
      taskDesc: "feed the dog",
      assigned: false
  },
  {
      taskName: "Clean the House",
      taskID: 6,
      taskDesc: "tidy up the rooms",
      assigned: false
  },
  {
      taskName: "Go for a Run",
      taskID: 7,
      taskDesc: "run for 30 minutes",
      assigned: false
  },
  {
      taskName: "Read a Book",
      taskID: 8,
      taskDesc: "read for an hour",
      assigned: false
  },
  {
      taskName: "Write Emails",
      taskID: 9,
      taskDesc: "respond to emails",
      assigned: false
  },
  {
      taskName: "Do Laundry",
      taskID: 10,
      taskDesc: "wash and fold clothes",
      assigned: false
  },
  {
      taskName: "Work on Project",
      taskID: 11,
      taskDesc: "dedicate time to the project",
      assigned: false
  },
  {
      taskName: "Call Friend",
      taskID: 12,
      taskDesc: "catch up with a friend",
      assigned: false
  },
  {
      taskName: "Study for Exam",
      taskID: 13,
      taskDesc: "prepare for the upcoming exam",
      assigned: false
  },
  {
      taskName: "Water Plants",
      taskID: 14,
      taskDesc: "water the indoor plants",
      assigned: false
  },
  {
      taskName: "Go to the Gym",
      taskID: 15,
      taskDesc: "exercise at the gym",
      assigned: false
  },
  {
      taskName: "Cook Dinner",
      taskID: 16,
      taskDesc: "prepare a delicious meal",
      assigned: false
  },
  {
      taskName: "Watch a Movie",
      taskID: 17,
      taskDesc: "enjoy a film",
      assigned: false
  },
  {
      taskName: "Take a Walk",
      taskID: 18,
      taskDesc: "stroll in the park",
      assigned: false
  },
  {
      taskName: "Learn a New Skill",
      taskID: 19,
      taskDesc: "pick up a new hobby",
      assigned: false
  },
  {
      taskName: "Plan Vacation",
      taskID: 20,
      taskDesc: "research vacation destinations",
      assigned: false
  }
];

// module.exports = {tasks, people}; 

async function pushData(){
    await connectDB(process.env.MONGO_URI);
    for(let i = 0; i < tasks.length; i++){
        const data = new TASK(
            tasks[i]
        )
        await data.validate();
        await data.save();
    }

    for(let i = 0; i < people.length; i++){
        const data = new PERSON(
            people[i]
        )
        await data.validate();
        await data.save();
    }
}

pushData();