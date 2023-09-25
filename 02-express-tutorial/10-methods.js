const express = require('express')
const app = express()
let {people} = require('./data')

//  static assets - ppl
app.use(express.static('./public'))

/*Parse from data built in middleware function in express that parses incoming request. 
If you check req.body without it then you will see that the value is undefined.*/
app.use(express.urlencoded({ false: true}))

//  Parse from data works similiarly to the url encoded but handles the json
app.use(express.json()); //for json

app.get('/api/people', (req, res) => {
    res.json({success:true, data:people})
})//retrieval function

app.post('/api/people', (req, res) => {
    console.log(body)
    const {name} = req.body
    // if name exists
    if(name){
        return res.status(201).json({success:true, person:name})
    }
    // if new person doesnt have name no else due to json automatically terminating
    res.status(404).json({success: false, msg:"Invalid name"})
})//adds people

// Above is for javascript.html
// Below is for index.html

app.post('/login', (req, res) => {
    console.log(req.body)
    const {name} = req.body
    if(name){
        return res.status(201).json({success:true, person:name})
    }
    res.send("provide credentials")
})

/* Part 1: Above 

The above part brings in the public folder from before and then handles the index and 
javascript version.
 I placed he JS for the form in a separate js file in the public folder
 sow we can see that load alongside the html. THe /api/people can be tested by
 going to the URL, but the use is in the script.js where we call the data with 
 async await.
 
 The get for the api/people is for our testing but then the post
 will be for the request from the script.js*/

//  Testing Postman: 
app.post('/api/postman/people', (req,res) => {
    let length = people.length+1;
        const {name} = {
        name:req.body
    } 
    const {id} = {
        id: length++
    }
    if(!name){
        return res.status(400).json({data:[], success: false, msg:'Enter Name'})
    }
    res.status(201).json({success:true, data: [...people,name,id]}); //return name as object
})
// PUT Request id = param
app.put('/api/postman/:id', (req,res) => {
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=> person.id === Number(id)) 
    if(!person){
        return express.json({success: false, data:[]})
    }
    const newPeople = people.map((person)=>{
        if(person.id == Number(id)){
            person.name = name
        }
        return person;
    })
    res.status(201).json({success:true, data: newPeople})
})

app.listen(5000, () =>{
    console.log('listening on port 5000')
})

// DELETE request
app.delete('/api/people/:id', (req,res) => {
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