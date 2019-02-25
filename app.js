'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const initDevs      = require('./middleware/development');
const authorization = require('./middleware/authorization');
const initGraphql   = require('./graphql');

initDevs(app);
authorization(app);
initGraphql(app, bodyParser);

module.exports = app;
