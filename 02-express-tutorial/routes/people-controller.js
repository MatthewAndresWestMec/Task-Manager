const express = require('express')
const router = express.Router()

const {createPeople, readPeople, deletePeople, updatePeople} = require('../controllers/people')
// routes controllers
router.get('/', readPeople)
router.post('/', createPeople)
router.put('/:id', updatePeople)
router.delete('/:id', deletePeople)

module.exports = router;