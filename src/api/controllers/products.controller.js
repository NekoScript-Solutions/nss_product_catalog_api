'use strict';

const productsService = require('./../services/products.service');

const getAll = async (req, res) => {
  const products = await productsService.getAll(req.query);

  res.json(products);
};

const get = async (req, res) => {
  const product = await productsService.get(req.params.id);

  if (!product) {
    res.sendStatus(404);

    return;
  }

  res.json(product);
};

const getBrandNew = async (req, res) => {
  const products = await productsService.getBrandNew();

  res.json(products);
};

const getHotPrices = async (req, res) => {
  const products = await productsService.getHotPrices();

  res.json(products);
};

const getRecommended = async (req, res) => {
  const products = await productsService.getRecommended();

  res.json(products);
};

module.exports = {
  getAll,
  get,
  getBrandNew,
  getHotPrices,
  getRecommended,
};
