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

let products = require('../../../data/products.json');

products = products.map(product => {
  if (!colors.includes(product.color)) {
    const itemId = product.itemId;
    const idx = itemId.lastIndexOf('-');

    product.color = normalize(product.color);
    product.itemId = itemId.substring(0, idx) + itemId.substring(idx + 1);
  }

  return product;
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', products);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null);
  },
};
