'use strict';

const productsService = require('./../services/products.service');

const getAll = async (_, res) => {
  const products = await productsService.getAll();

  res.json(products);
};

const get = (req, res) => {
  const product = productsService.get(+req.params.productId);

  res.json(product);
};

module.exports = {
  getAll,
  get,
};
