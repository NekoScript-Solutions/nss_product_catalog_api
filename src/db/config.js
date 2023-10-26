'use strict';

require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DB_URL_DEV,
    dialect: 'postgres',
  },
  testing: {
    url: process.env.DB_URL_TEST,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: true,
      rejectUnauthorized: false,
    },
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
