const Sequelize = require("sequelize");
const db = {}
//const realtorstore_db = require("../schema/realtorstore_db.sql")
// eslint-disable-next-line no-const-assign
var sequelize = new Sequelize('realtorstore_db', 'root', 'BeacHrD1213', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    // SQLite only
    storage: 'path/to/database.sqlite'
  });


db.Sequelize = Sequelize;

module.exports = Sequelize;