'use strict';

const cors = require('cors');
const morgan = require('morgan')

module.exports = (app) => {
  if (process.env.NODE_ENV === 'development') {
    const options = {
      origin: 'http://localhost:3000',
      creditnails: true,
    };

    app.use(cors(options));

    app.use(morgan('tiny'));
  }
};
