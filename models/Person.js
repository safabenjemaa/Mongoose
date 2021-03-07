const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: {type: String, required: true},
  age: {type : Number},
  favoriteFoods: {type: String},
});

module.exports = Person = mongoose.model("Person", PersonSchema);
