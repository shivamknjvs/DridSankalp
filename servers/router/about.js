const express = require('express')
const User = require('../model/userSchema');
const bcrypt = require('bcryptjs')
const router = express.Router();
const authenticate = require('../middleware/authenticate')
const jwt = require('jsonwebtoken')
// router.get('/login', (req, res) =>


router.get('/about',authenticate,(req,res)=>{
     
    console.log("hello this is User");
    res.send(req.rootUser) 
})
module.exports = router