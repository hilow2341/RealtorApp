const express = require("express")
const mysql = require("mysql");
const session = require('express-session');
const path  = require('path');
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;

const user = require('./routes/Users');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);
app.use('/user', user)

// If no API routes are hit, send the React app
app.get("/",(req, res) =>
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
);

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});