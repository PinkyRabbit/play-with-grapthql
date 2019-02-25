'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const initDevs = require('./middleware/development');
const initGraphql = require('./graphql');

initDevs(app);
initGraphql(app, bodyParser);

module.exports = app;
