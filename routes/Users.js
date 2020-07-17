const express = require("express");
const users = express.Router();
const bcrypt = require("bcrypt");
const cors = require("cors");

const User = require("../models/user");
users.use(cors());

process.env.SECRET_KEY = 'secret';


users.post("/signup", (req,res) => {
    const userData = {
        user: req.body.user,
        email: req.body.email,
        password: req.body.password,
        created: today
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user =>{
            if(bcrypt.compareSync(req.body.password, user.password)){
                
            }
        })
})

