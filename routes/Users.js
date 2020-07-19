const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const cors = require("cors");

const { User } = require("../models");

process.env.SECRET_KEY = 'secret';


router.post("/signup", async (req, res) => {
    console.log('req body', req.body);
    const { email, password} = req.body;
    try {
        let user = await User.findOne({ where: { email } });
        if (user) {
            res.send({error: 'User already exist'});
        } else  {
            req.body.password = await User.hashPassword(password);
            user = await User.create(req.body);
            res.status(201).send(user);
        }
    } catch (err) {
        res.status(500).send(err);
    }
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
