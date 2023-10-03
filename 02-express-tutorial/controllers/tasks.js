const Task = require('../models/task');

// Get function for all tasks
const readTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json({ success: true, data: tasks });
  } catch (error) {
    res.status(500).json({ success: false, msg: 'Error fetching tasks' });
  }
};

// Post function for creating tasks
const createTasks = async (req, res) => {
  try {
    const { taskName, taskDesc } = req.body;

    if (!taskName || !taskDesc) {
      return res.status(400).json({ data: [], success: false, msg: 'Please enter a taskName and taskDesc' });
    }
    const allTasks = await Task.find({});
    const task = await Task.create({ taskName: taskName, taskDesc: taskDesc, taskID: allTasks.length + 1 });
    res.status(201).json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, msg: 'Error creating task' });
  }
};

// Put function for updating tasks
const updateTasks = async (req, res) => {
  try {
    let { taskID } = req.params
    let { taskName, taskDesc } = req.body;
    let changeTask = Task.findOne({ taskID: taskID })

    if (!taskName) {
     taskNameaskName = changeTask.TaskName;
      console.log('notask name')
    }
    if (!taskDesc) {
      taskDesc = changeTask.TaskDesc;
      console.log('notask desc')

    }


    let task = await Task.findOneAndUpdate({ taskID: taskID }, { taskName: taskName, taskDesc: taskDesc });
    res.json(task);
  } catch (error) {
    console.log(error);
  }
};

// Delete function for removing tasks
const deleteTasks = async (req, res) => {
  try {
    let { taskID } = req.params
    // let changeTask = Task.findOne({taskID:taskID})

    let task = await Task.findOneAndDelete({ taskID: taskID });
    res.json(task);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createTasks, readTasks, updateTasks, deleteTasks };
// let { tasks } = require('../data');

// // Get function for all tasks
// const readTasks = (req, res) => {
//     res.json({ success: true, data: tasks })
// }

// // Post function for creating tasks
// const createTasks = (req, res) => {
//     let length = tasks.length + 1;
//     const { taskName, taskDesc } = req.body;
//     const taskID = length++;
//     if (!taskName) {
//         return res.status(400).json({ data: [], success: false, msg: 'Please enter a taskName' })
//     }
//     if (!taskDesc) {
//         return res.status(400).json({ data: [], success: false, msg: 'Please enter a taskDesc' })
//     }
//     const task = { taskName: taskName, taskID: taskID, taskDesc: taskDesc};
//     tasks.push(task);
//     res.status(201).json({ success: true, data: [tasks] })
// }

// // Put function for updating tasks
// const updateTasks = (req, res) => {
//     const { taskID } = req.params
//     const { taskName, taskDesc } = req.body
//     const task = tasks.find((task) => task.taskID === Number(taskID))

//     if (!task) {
//         return res.json({ success: false, data: [] })
//     }

//     const newTasks = tasks.map((task) => {
//         if (task.taskID === Number(taskID)) {

//             task.taskName = taskName;
//             task.taskDesc = taskDesc;
//         }
//         return task;
//     })
//     res.status(202).json({ data: newTasks, success: true })
// }

// // Delete function for removing tasks
// const deleteTasks = (req, res) => {
//     const { taskID } = req.params
//     const task = tasks.find((task) => task.taskID === Number(taskID))

//     if (!task) {
//         return res.status(404).json({ success: false, msg: "No matching taskID found" });
//     }

//     tasks = tasks.filter((task) => {
//         return task.taskID !== Number(taskID)
//     })
//     res.status(202).json({ data: tasks, success: true });
// }

// module.exports = { createTasks, readTasks, updateTasks, deleteTasks }