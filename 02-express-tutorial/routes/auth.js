const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    const {name} = req.body;
    if(name){
        return res.json({status: 202});
    }
    res.send('provide credentials')
});

module.exports = router;