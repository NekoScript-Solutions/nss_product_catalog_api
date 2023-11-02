'use strict';

const { Product, Item, sequelize } = require('../../db/models');

const sortOptions = {
  age: [['year', 'DESC'], ['id', 'ASC']],
  title: [['name', 'ASC'], ['id', 'ASC']],
  price: [['price', 'ASC'], ['id', 'ASC']],
};

const getAll = async ({ offset, limit, type, sort }) => {
  const query = { offset, limit };
  const order = sortOptions[sort];

  if (type) {
    query.where = { category: type };
  }

  if (order) {
    query.order = order;
  }

  const products = await Product.findAndCountAll(query);

  products.products = products.rows;
  delete products.rows;

  return products;
};

const get = async (id, variants) => {
  if (!Number.isNaN(+id)) {
    if (variants) {
      return getProductWithVariants(id);
    }

    return Product.findByPk(id);
  }

  return Item.findByPk(id);
};

const getProductWithVariants = async (id) => {
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
      ['id', 'ASC'],
    ],
  });
};

const getHotPrices = () => {
  return Product.findAll({
    limit: 10,
    order: [
      sequelize.literal('"fullPrice" - "price"'), 'DESC',
      ['id', 'ASC'],
    ],
  });
};

const getRecommended = () => {
  return Product.findAll({
    limit: 10,
    order: [
      sequelize.random(),
      ['id', 'ASC'],
    ],
  });
};

module.exports = {
  getAll,
  get,
  getBrandNew,
  getHotPrices,
  getRecommended,
};
