'use strict';

const { Product } = require('../../db/models');

const getAll = () => {
  return Product.findAll();
};

const get = () => {
};

module.exports = {
  getAll,
  get,
};
