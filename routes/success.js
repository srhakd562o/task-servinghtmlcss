const path = require('path');
const express = require('express');
//const rootDir = require('express')
const router = express.Router();
router.get('/success', (req, res, next)=>{
    //console.log('In  another the middlware')
    
    //res.send('<h1>Hello from Express</h1>');
    res.sendFile(path.join(__dirname,'..','views','success.html'));

});

module.exports = router;

