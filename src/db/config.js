'use strict';

require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DB_URL_DEV,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  testing: {
    url: process.env.DB_URL_TEST,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: true,
      rejectUnauthorized: false,
    },
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
