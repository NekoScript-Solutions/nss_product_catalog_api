'use strict';

require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DB_URL_DEV,
    dialect: 'postgres',
  },
  testing: {
    url: process.env.DB_URL_TEST,
    ssl: true,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    url: process.env.DB_URL,
    ssl: true,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    seederStorage: 'sequelize',
    logging: false,
  },
};
