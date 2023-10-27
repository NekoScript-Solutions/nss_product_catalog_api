'use strict';

const phones = require('../../../data/phones.json');
const tablets = require('../../../data/tablets.json');
const accessories = require('../../../data/accessories.json');

const items = phones
  .concat(tablets, accessories)
  .map((item) => {
    item.description = JSON.stringify(item.description);

    return item;
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
