'use strict';

const { Product, Item } = require('../../db/models');

const sortOptions = {
  age: ['year', 'DESC'],
  title: ['name', 'ASC'],
  price: ['price', 'ASC'],
};

const getAll = async ({ offset, limit, type, sort }) => {
  const query = { offset, limit };
  const order = sortOptions[sort];

  if (type) {
    query.where = { category: type };
  }

  if (order) {
    query.order = [order];
  }

  const products = await Product.findAndCountAll(query);

  products.products = products.rows;
  delete products.rows;

  return products;
};

const get = async (productId) => {
  const product = await Product.findByPk(productId);

  if (!product) {
    return null;
  }

  const item = await product.getItem();
  const variants = await Item.findAll({
    where: { namespaceId: item.namespaceId },
  });

  return { product, variants };
};

module.exports = {
  getAll,
  get,
};
