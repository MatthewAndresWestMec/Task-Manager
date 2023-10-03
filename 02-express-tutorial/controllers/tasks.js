let { tasks } = require('../data');

// Get function for all tasks
const readTasks = (req, res) => {
    res.json({ success: true, data: tasks })
}

// Post function for creating tasks 
const createTasks = (req, res) => {
    let length = tasks.length + 1;
    const { taskName, taskDesc } = req.body;
    const taskID = length++;
    if (!taskName) {
        return res.status(400).json({ data: [], success: false, msg: 'Please enter a taskName' })
    }
    if (!taskDesc) {
        return res.status(400).json({ data: [], success: false, msg: 'Please enter a taskDesc' })
    }
    const task = { taskName: taskName, taskID: taskID, taskDesc: taskDesc};
    tasks.push(task);
    res.status(201).json({ success: true, data: [tasks] })
}

// Put function for updating tasks
const updateTasks = (req, res) => {
    const { taskID } = req.params
    const { taskName, taskDesc } = req.body
    const task = tasks.find((task) => task.taskID === Number(taskID))

    if (!task) {
        return res.json({ success: false, data: [] })
    }

    const newTasks = tasks.map((task) => {
        if (task.taskID === Number(taskID)) {

            task.taskName = taskName;
            task.taskDesc = taskDesc;
        }
        return task;
    })
    res.status(202).json({ data: newTasks, success: true })
}

// Delete function for removing tasks
const deleteTasks = (req, res) => {
    const { taskID } = req.params
    const task = tasks.find((task) => task.taskID === Number(taskID))

    if (!task) {
        return res.status(404).json({ success: false, msg: "No matching taskID found" });
    }

    tasks = tasks.filter((task) => {
        return task.taskID !== Number(taskID)
    })
    res.status(202).json({ data: tasks, success: true });
}

module.exports = { createTasks, readTasks, updateTasks, deleteTasks }