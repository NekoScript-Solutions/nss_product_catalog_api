'use strict';

const phones = require('../../data/phones.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', phones);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null);
  },
};
