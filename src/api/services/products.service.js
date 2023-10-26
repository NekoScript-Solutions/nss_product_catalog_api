'use strict';

const { Op } = require('sequelize');
const { Product } = require('../../db/models');

const getAll = async ({ offset, limit, type }) => {
  const query = { offset, limit };

  if (type) {
    query.where = {
      category: {
        [Op.eq]: type,
      },
    };
  }

  const products = await Product.findAndCountAll(query);

  products.data = products.rows;
  delete products.rows;

  return products;
};

const get = async (productId) => {
  const product = await Product.findByPk(productId);

  return product?.getItem();
};

module.exports = {
  getAll,
  get,
};
