const Sequelize = require("sequelize");
const db = require("../database/db");
const { sequelize } = require("../database/db");


const listSchema = db.sequelize.define("listings",{
  address: { type: String, required: true },
  city: { type: String },
  state: { type: [String], required: true },
  zip: { type: String, required: true },
  price: { type: String, required: true },
  baths: { type: String, required: true },
  zip: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
  
});



module.exports = listSchema;
