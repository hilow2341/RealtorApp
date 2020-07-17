const sequalize = require("sequalize");
const Schema = sequalize.Schema;

const listSchema = new Schema({
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

const List = sequalize.model("List", listSchema);

module.exports = List;
