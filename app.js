'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const initGraphql = require('./graphql');

initGraphql(app, bodyParser);

module.exports = app;
