const express = require('express')
const User = require('../model/userSchema');
const bcrypt = require('bcryptjs')
const router = express.Router();
const jwt = require('jsonwebtoken')
// router.get('/login', (req, res) => {
//     res.send(`hello this is login page`)
// })


router.post('/login', async (req, res) => {

    try {
        var { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({
                error: 'something missing'
            })
        }

        const userLogin = await User.findOne({ email: email })
     //    password = JSON.stringify(password)
        if (userLogin) {

            const isMatch =await bcrypt.compare(password, userLogin.password);
            const token =await userLogin.generateAuthToken();
            
            if (isMatch) {
                res.status(201).json({ message: "Login succefully" })
            }
            else {
                res.status(400).json({  error: 'invalid credential' })
            }
        }
        else {
            res.status(400).json({ error: 'invalid credential email'
            })
        } 

    }
    catch (err) {
        console.log(err)
    }

})

module.exports = router