const Sequelize = require("sequelize");
const sequelize = require("sequelize");
const db = {}
// eslint-disable-next-line no-const-assign
Sequelize = require("realtorstore_db","root","",{
    host: "localhost",
    dialect: "mysql",


    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize

module.exports = db