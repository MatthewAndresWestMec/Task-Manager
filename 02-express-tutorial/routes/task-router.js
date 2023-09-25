const express = require('express');
const router = express.Router();

// Work with the router app

let {people} = require('../data');

router.get('/',(req,res)=>{
    res.json({success: true, data:people});
})// give people
router.post('/',(req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    if(name){
        return res.status(200).json({success:true, person:name});
    }
    res.status(404).json({success:false, msg:'No person'})
}); // add people


// PUT Request id = param
router.put('/:id', (req,res) => {
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=> person.id === Number(id)) 
    if(!person){
        return res.json({success: false, data:[]})
    }
    const newPeople = people.map((person)=>{
        if(person.id == Number(id)){
            person.name = name
        }
        return person;
    })
    res.status(201).json({success:true, data: newPeople})
})

router.delete('/:id', (req,res) => {
    const{id} = req.params
    const person = people.find((person)=> person.id === Number(id))
    if(!person){
        return res.status(404).json({success: false, data:[], msg:'no matching person found'})
    }
    people = people.filter((person)=>{
        return person.id !== Number(id)
    }) //everyone but id is returned
    res.status(202).json({data: people ,success:true})
});

module.exports = router;