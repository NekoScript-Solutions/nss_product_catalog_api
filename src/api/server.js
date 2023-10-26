'use strict';

const path = require('path');
const cors = require('cors');
const express = require('express');

const productsRouter = require('./routes/products.route');

function server() {
  const app = express();

  app.use(cors());

  app.use('/products', productsRouter);

  app.use(express.static(path.resolve('public'), {
    index: false,
    redirect: false,
    immutable: true,
    maxAge: '7d',
  }));

  app.all('*', (_, res) => {
    res.sendStatus(404);
  });

  return app;
}

module.exports = { server };
