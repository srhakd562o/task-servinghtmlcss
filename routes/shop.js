const path = require('path');
const express = require('express');
//const rootDir = require('express')
const router = express.Router();
router.get('/', (req, res, next)=>{
    //console.log('In  another the middlware')
    
    //res.send('<h1>Hello from Express</h1>');
    res.sendFile(path.join(__dirname,'..','views','shop.html'));

});

module.exports = router;

