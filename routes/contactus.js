const path = require('path');
const express = require('express');
//const rootDir = require('express')
const router = express.Router();
router.get('/contactus', (req, res, next)=>{
    //console.log('In  another the middlware')
    
    //res.send('<h1>Hello from Express</h1>');
    res.sendFile(path.join(__dirname,'..','views','contactus.html'));

});

router.post('/contactus', (req,res,next)=>{
    console.log(req.body);
    res.redirect('/success'); // this function is used to redirect to route
})

module.exports = router;

