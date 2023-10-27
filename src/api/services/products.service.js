'use strict';

const { Product, Item } = require('../../db/models');

const getAll = async ({ offset, limit, type }) => {
  const query = { offset, limit };

  if (type) {
    query.where = {
      category: type,
    };
  }

  const products = await Product.findAndCountAll(query);

  products.products = products.rows;
  delete products.rows;

  return products;
};

const get = async (productId) => {
  const product = await Product.findByPk(productId);
  const item = await product?.getItem();

  if (!item) {
    return null;
  }

  const variants = await Item.findAll({
    where: {
      namespaceId: item.namespaceId,
    },
  });

  return { product, variants };
};

module.exports = {
  getAll,
  get,
};
