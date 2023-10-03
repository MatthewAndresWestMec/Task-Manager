const Person = require('../models/person');

// Get function for all people
const readPeople = async (req, res) => {
  try {
    const people = await Person.find();
    res.json({ success: true, data: people });
  } catch (error) {
    res.status(500).json({ success: false, msg: 'Error fetching people' });
  }
};

// Post function for creating people
const createPeople = async (req, res) => { 
  try {
    const { name, age } = req.body;
    
    if (!name || !age) {
      return res.status(400).json({ data: [], success: false, msg: 'Please enter a name and age' });
    }
    
    const allPeople = await Person.find({});
    const person = await Person.create({ name: name, age: age , id:allPeople.length+1 });

    res.status(201).json({ success: true, data: person });
  } catch (error) {
    res.status(500).json({ success: false, msg: 'Error creating person' });
  }
};

// Put function for updating people
const updatePeople = async (req, res) => {
  try {
    let {id} = req.params
    let {name, age} = req.body;
    let changePerson = Person.findOne({id:id})

    if(!name){
      name = changePerson.name;
        console.log('no person name')
    }
    if(!age){
      age = changePerson.age;
        console.log('no person age')

    }


    let person = await Person.findOneAndUpdate({id:id}, {name:name, age:age});
    res.json(person);
} catch (error) {
    console.log(error);
}
 
};

// Delete function for removing people
const deletePeople = async (req, res) => {
  try {
    let {id} = req.params
    // let changeTask = Task.findOne({taskID:taskID})




    let person = await Person.findOneAndDelete({id:id});
    res.json(person);
} catch (error) {
    console.log(error);
}
};

module.exports = { createPeople, readPeople, updatePeople, deletePeople };


// // let { people } = require('../data');
// const People = require('../models/person');
// // Get function for all people
// const readPeople = (req, res) => {
//     res.json({ success: true, data: people })
// }

// // Post function for creating people 
// const createPeople = (req, res) => {
//     let length = people.length + 1;
//     const { name, age } = req.body;
//     const id = length++;
//     if (!name) {
//         return res.status(400).json({ data: [], success: false, msg: 'Please enter a name' })
//     }
//     if (!age) {
//         return res.status(400).json({ data: [], success: false, msg: 'Please enter a age' })
//     }
//     const person = { name: name, id: id, age: age};
//     people.push(person);
//     res.status(201).json({ success: true, data: [people] })
// }

// // Put function for updating people
// const updatePeople = (req, res) => {
//     const { id } = req.params
//     const { name, age } = req.body
//     const person = people.find((person) => person.id === Number(id))

//     if (!person) {
//         return res.json({ success: false, data: [] })
//     }

//     const newPeople = people.map((person) => {
//         if (person.id === Number(id)) {

//             person.name = name;
//             person.age = age;
//         }
//         return person;
//     })
//     res.status(202).json({ data: newPeople, success: true })
// }

// // Delete function for removing people
// const deletePeople = (req, res) => {
//     const { id } = req.params
//     const person = people.find((person) => person.id === Number(id))

//     if (!person) {
//         return res.status(404).json({ success: false, msg: "No matching id found" });
//     }

//     people = people.filter((person) => {
//         return person.id !== Number(id)
//     })
//     res.status(202).json({ data: people, success: true });
// }

// module.exports = { createPeople, readPeople, updatePeople, deletePeople }