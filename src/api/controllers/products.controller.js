'use strict';

const productsService = require('./../services/products.service');

const getAll = async (req, res) => {
  const products = await productsService.getAll(req.query);

  res.json(products);
};

const get = async (req, res) => {
  const product = await productsService.get(req.params.productId);

  if (!product) {
    res.sendStatus(404);

    return;
  }

  res.json(product);
};

module.exports = {
  getAll,
  get,
};
