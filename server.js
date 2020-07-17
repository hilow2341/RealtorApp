const express = require("express")
const mysql = require("mysql");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session')


const user = require('./routes/Users')

const passport = require()

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  app.use( (req, res, next) => {
    console.log('req.session', req.session);
    return next();
  });

app.use(routes);

app.use('/user', user)
app.post('/user', (req, res) => {
    console.log('user signup');
    req.session.username = req.body.username;
    res.end()
  })


const connection = mysql.createConnection({
    host: "process.env.host",
    port: "3306",
    user: "process.env.username",
    database: "process.env.database",
    password: "process.env.password"
})

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });