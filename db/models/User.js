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
    console.log(`salt = ${salt}`)
    
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);

      this.password = hash;
      return next();
    });
  });
});

userSchema.statics.login = (username, password) => {
  return new Promise((resolve, reject) => {
    User.findOne({ username }, (err, user) => {
      if (err) return reject(err);
      if (!user) {
        const err = new Error('User not exist');
        return reject(err);
      }
      
      bcrypt.compare(password, user.password, (err, res) => {
        if (err) reject(err);
        if (!res) {
          const err = new Error('Passwords not match');
          return reject(err);
        }

        return resolve(user);
      });
    });
  });
}

const User = db.model('user', userSchema);

module.exports = User;
