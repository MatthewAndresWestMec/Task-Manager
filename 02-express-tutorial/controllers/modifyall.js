const Task = require('../models/task');
const Person = require('../models/person');

// Put function for updating people
const toggleTask = async (req, res) => {
  try {
    let {id} = req.params
    let {taskID, add} = req.body;
    if(add){
    let task =  await Task.findOneAndUpdate({taskID: taskID}, {assigned:id})
    let person = await Person.findOneAndUpdate({id:id}, {tasksAssigned:task.taskName});
    }else{
      let task =  await Task.findOneAndUpdate({taskID: taskID}, {assigned:0})
    let person = await Person.findOneAndUpdate({id:id}, {tasksAssigned:""});
    }

    
    res.json(person);
} catch (error) {
    console.log(error);
}
 
};



module.exports = { toggleTask };

