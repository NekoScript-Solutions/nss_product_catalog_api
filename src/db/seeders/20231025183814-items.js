'use strict';

const colors = [
  'black',
  'blue',
  'coral',
  'gold',
  'graphite',
  'green',
  'midnight',
  'midnightgreen',
  'pink',
  'purple',
  'red',
  'rosegold',
  'sierrablue',
  'silver',
  'skyblue',
  'spaceblack',
  'spacegray',
  'starlight',
  'white',
  'yellow',
];

function normalize(str) {
  return str.replace(/[ -]/, '');
}

const phones = require('../../../data/phones.json');
const tablets = require('../../../data/tablets.json');
const accessories = require('../../../data/accessories.json');

const items = phones
  .concat(tablets, accessories)
  .map((item) => {
    item.description = JSON.stringify(item.description);

    item.colorsAvailable = item.colorsAvailable.map(c => normalize(c));

    if (!colors.includes(item.color)) {
      const id = item.id;
      const idx = id.lastIndexOf('-');

      item.color = normalize(item.color);
      item.id = id.substring(0, idx) + id.substring(idx + 1);
    }

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
