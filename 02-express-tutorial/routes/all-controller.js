const express = require('express')
const router = express.Router()

const {toggleTask} = require('../controllers/modifyall')
// routes controllers

router.put('/:id', toggleTask)

module.exports = router;