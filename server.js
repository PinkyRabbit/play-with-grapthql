'use strict';

require('dotenv').config();

const app = require('./app');
const db  = require('./db');

const port = process.env.PORT || 3000;

db
  .on('connected', () => {
    console.log('Database connected');
    app.listen(port, () => {
      console.log(`Server is listening ${port} port...`);
    });
  })
  .on('error', (err) => {
    throw(err);
  });
