const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

if (app.get('env') !== 'test') {
  app.use(logger('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

// 404 handler
app.use((req, res, next) => {
  res
    .status(404)
    .send({
      message: 'Not Found'
    });
});

// Error handler
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({
      message: err.message,
      stack: app.get('env') === 'development' ? err.stack : null
    });
});

module.exports = app;
