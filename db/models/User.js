'use strict';

const { Schema } = require('mongoose');
const db = require('../index');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    uniqe: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  favorites: {
    type: [Schema.Types.ObjectId],
    ref: 'Recipe',
  },
},
{
  timestamps: true,
});


const User = db.model('user', userSchema);

module.exports = User;
