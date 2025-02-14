const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
title:{
  type: String,
  required: true,
  unique:true
},
level: {
  type: String,
  lowercase: true,
  enum: ["easy peasy", "amateur chef", "ultrapro chef"]
},
ingredient: {
  type: [ String ],
},
cuisine: {
  type: String,
  required: true
},
dishType: {
  type: String,
  lowercase:true,
  enum:["breakfast", "main_course", "soup", "snack", "drink", "dessert", "other"]
},
image: {
  type: String,
  default: "https://images.media-allrecipes.com/images/75131.jpg"
},
duration: {
  type: Number,
  min:0
},
creator:{
  type: String
},
created: {
  type: Date,
  default:Date.now
}
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
