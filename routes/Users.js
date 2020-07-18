const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const cors = require("cors");

const User = require("../models/user");

process.env.SECRET_KEY = 'secret';


router.post("/signup", (req, res) => {
    console.log('req body', req.body);
    // const userData = {
    //     user: req.body.user,
    //     email: req.body.email,
    //     password: req.body.password,
    //     created: today
    // }

    // User.findOne({
    //     where: {
    //         email: req.body.email
    //     }
    // })
    //     .then(user => {
    //         if (bcrypt.compareSync(req.body.password, user.password)) {

    //         }
    //     })
});

router.post("/login", (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (bcrypt.compareSync(req.body.password, user.password)) {

            }
        })
});

module.exports = router;
