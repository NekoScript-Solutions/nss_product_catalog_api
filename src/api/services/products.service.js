'use strict';

const { Product, Item, sequelize } = require('../../db/models');

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

const get = async (id) => {
  const product = await Product.findByPk(id);

  if (!product) {
    return null;
  }

  const item = await product.getItem();
  const variants = await Item.findAll({
    where: { namespaceId: item.namespaceId },
  });

  return { product, variants };
};

const getBrandNew = () => {
  return Product.findAll({
    limit: 10,
    order: [
      ['year', 'DESC'],
    ],
  });
};

const getHotPrices = () => {
  return Product.findAll({
    limit: 10,
    order: [
      [sequelize.literal('"fullPrice" - "price"'), 'DESC'],
    ],
  });
};

const getRecommended = () => {
  return Product.findAll({
    limit: 10,
    order: sequelize.random(),
  });
};

module.exports = {
  getAll,
  get,
  getBrandNew,
  getHotPrices,
  getRecommended,
};
