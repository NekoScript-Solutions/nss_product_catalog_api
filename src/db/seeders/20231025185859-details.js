'use strict';

const fs = require('fs');
const path = require('path');

const dir = 'src/data/phones_details';
const details = fs.readdirSync(path.resolve(dir))
  .map((file) => require(path.resolve(dir, file)))
  .map((data) => {
    data.description = JSON.stringify(data.description);

    return data;
  });

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('details', details);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('details', null);
  },
};
