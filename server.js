const express = require("express")

const mysql = require("mysql");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.use(routes);

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    database: "realtorap_db",
    password: "BeacHrD1213"
})

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });