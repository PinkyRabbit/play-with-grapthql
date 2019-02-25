'use strict';

const jwt = require('jsonwebtoken');

module.exports = (app) => {
  app.use(async (req, res, next) => {
    const token = req.headers['authorization'];
    console.log(token);
    return next();
  });
};
