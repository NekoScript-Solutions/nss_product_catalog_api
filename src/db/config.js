'use strict';

require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DB_URL_LOCAL,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  production: {
    url: process.env.DB_URL,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: true,
      rejectUnauthorized: false,
    },
    seederStorage: 'sequelize',
    logging: false,
  },
};
