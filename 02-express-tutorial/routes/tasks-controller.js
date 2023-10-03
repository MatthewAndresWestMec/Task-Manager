const express = require('express')
const router = express.Router()

const {createTasks, readTasks, deleteTasks, updateTasks} = require('../controllers/tasks')
// routes controllers
router.get('/', readTasks)
router.post('/', createTasks)
router.put('/:taskID', updateTasks)
router.delete('/:taskID', deleteTasks)

module.exports = router;