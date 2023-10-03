// const mongoose = require('mongoose');
// //function with objects in an object
// const personSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:[true,'provide name'],
//         trim:true,
//         maxLength:[20, "The name can't exceed 20 characters"]
//     },
//     age:{
//         type:Number,
//         default:5
//     }
// });

// module.export = mongoose.model('Person', personSchema)
// Model.find({complete: true})
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
    tasksAssigned: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        default: ''
      },
    ],
  },
  {
    collection: 'People', 
  }
);

module.exports = mongoose.model('Person', personSchema);