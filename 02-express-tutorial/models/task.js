const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    taskDesc: {
      type: String,
      required: true,
    },
    taskID: {
      type: Number,
    
    },
    assigned: {
      type: Boolean,
      default: false,
    }
  },
  {
    collection: 'Tasks', // Specify the collection name
  }
);

module.exports = mongoose.model('Task', taskSchema);
