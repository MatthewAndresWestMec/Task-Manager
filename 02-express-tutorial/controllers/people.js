let { people } = require('../data');

// Get function for all people
const readPeople = (req, res) => {
    res.json({ success: true, data: people })
}

// Post function for creating people 
const createPeople = (req, res) => {
    let length = people.length + 1;
    const { name } = req.body;
    const id = length++;
    if (!name) {
        return res.status(400).json({ data: [], success: false, msg: 'Please enter a name' })
    }
    const person = { name: name, id: id };
    people.push(person);
    res.status(201).json({ success: true, data: [people] })
}

// Put function for updating people
const updatePeople = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res.json({ success: false, data: [] })
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {

            person.name = name;
        }
        return person;
    })
    res.status(202).json({ data: newPeople, success: true })
}

// Delete function for removing people
const deletePeople = (req, res) => {
    const { id } = req.params
    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res.status(404).json({ success: false, msg: "No matching id found" });
    }

    people = people.filter((person) => {
        return person.id !== Number(id)
    })
    res.status(202).json({ data: people, success: true });
}

module.exports = { createPeople, readPeople, updatePeople, deletePeople }