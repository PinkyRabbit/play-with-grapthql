'use strict';

require('dotenv').config();

module.exports = [
  'mongodb://',
  process.env.DB_USER,
  ':',
  process.env.DB_PASSWORD,
  '@',
  process.env.DB_SERVER,
].join('');
