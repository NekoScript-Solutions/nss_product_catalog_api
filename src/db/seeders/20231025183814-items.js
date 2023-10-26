'use strict';

const phones = require('../../data/phones.json');
const tablets = require('../../data/tablets.json');
const accessories = require('../../data/accessories.json');

const items = phones.concat(tablets, accessories)
  .map((product) => {
    product.description = JSON.stringify(product.description);

    return product;
  });

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items', items);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('items', null);
  },
};
