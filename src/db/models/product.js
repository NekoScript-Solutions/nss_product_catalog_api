'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      models.Product.HasOne(models.Details);
    }
  }

  Product.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    category: DataTypes.STRING,
    itemId: DataTypes.STRING,
    name: DataTypes.STRING,
    fullPrice: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    screen: DataTypes.STRING,
    capacity: DataTypes.STRING,
    color: DataTypes.STRING,
    ram: DataTypes.STRING,
    year: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: false,
  });

  return Product;
};
