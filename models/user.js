const Sequelize = require("sequelize");
const db = require("../database/db");
const { sequelize } = require("../database/db");
const { timeStamp } = require("console");

module.exports = db.sequelize.define(
    "user",{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }

);