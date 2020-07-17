const Sequelize = require("sequelize");
const db = require("../client/src/database/db");
const { sequelize } = require("../client/src/database/db");
const { timeStamp } = require("console");

module.exports = db.Sequelize.define(
    "user",
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       user:{
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        created:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
    
    );