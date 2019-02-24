'use strict';

const { Schema } = require('mongoose');
const db = require('../index');

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  username: {
    type: String,
  },
},
{
  timestamps: true,
});



const Recipe = db.model('recipe', recipeSchema);

module.exports = Recipe;
