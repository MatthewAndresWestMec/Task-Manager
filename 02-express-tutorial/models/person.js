
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    tasksAssigned: 
      {
        type: String,
        default: ''
      },
  },
  {
    collection: 'People', 
  }
);

module.exports = mongoose.model('Person', personSchema);