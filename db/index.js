'use strict';

const mongoose = require('mongoose');
const db       = require('../configs/db');
// const logger   = require('../libs/logger');

mongoose.set('useCreateIndex', true);

const connectionOptions = {
  useNewUrlParser: true, // https://stackoverflow.com/q/51165536/7196144
  auto_reconnect: true,
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30,
}

mongoose.Promise = global.Promise;

mongoose.main_connection = mongoose.createConnection(db, connectionOptions);

mongoose.main_connection.on('reconnect', function (ref) {
  console.error('Основная база данных перезагрузилась');
  // logger.error('Основная база данных перезагрузилась');
});

mongoose.main_connection.on('error', err => {
  if (err) {
    // logger.error(`mongoose.js. Error main_con ${JSON.stringify(err)}`);
    throw new Error('Could not connect with MongoDB database.');
  }
});

module.exports = mongoose.main_connection;
