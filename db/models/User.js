'use strict';

const { Schema } = require('mongoose');
const bcrypt = require('bcrypt');
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

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);

      this.password = hash;
      return next();
    });
  })
});

const User = db.model('user', userSchema);

module.exports = User;
