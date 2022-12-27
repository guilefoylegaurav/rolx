const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const requireLogin = require('../utility/requireLogin.js')

const mongoose = require('mongoose');
const db = require('../utility/db.js');
const User = require("../models/user");
const Ad = require("../models/ad");

router.post('/signup', (req, res) => {
    const { name, email, phone, password, bio } = req.body;
    if (!email || !name || !password ||!phone ||!bio) {
        res.status(422).json({ error: "Some arguments are missing" });
    }

    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "A user already exists with this email" });
            }
            bcrypt.hash(password, 12)
                .then((hashedPassword) => {
                    const user = new User({
                        name,
                        email,
                        password:hashedPassword,
                        phone, 
                        bio
                    });
                    user.save()
                        .then(() => {
                            res.json({ message: "Saved successfully" })
                            
                        })
                        .catch((error) => {
                            console.log(error);
                        });


                })


        });
})


router.post('/login', (req, res) => {
    const {email, password} = req.body
    if(!email||!password){
        return res.status(422).json({error:"Email or password is missing"});
    }
    User.findOne({email:email})
        .then(savedUser => {
            if(!savedUser){
                return res.status(422).json({error:"No accounts exists with this email"})
            }        
            bcrypt.compare(password, savedUser.password)
                .then( (matches) => {
                    if(matches){
                        const token = jwt.sign({_id:savedUser._id}, process.env.jwt_secret)
                        res.json({token, user:savedUser})
                    }
                    else{
                        return res.status(422).json({error:"Invalid password or email"})
                    }
                })
                .catch( (error) => {
                    console.log(error)
                })
        })

})

router.get('/userData', requireLogin, (req, res) => {
    const {authorization} = req.headers;
    const id = jwt.decode(authorization.replace("Bearer ",""))
    User.findById(id).lean().exec( (error, users) => {
        if(!error){
            return res.end(JSON.stringify(users))
        }
        else{
            res.status(404).send(error)
        }
        
    })
})

module.exports = router;