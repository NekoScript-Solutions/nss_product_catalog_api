'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Details extends Model {
    static associate(models) {
      models.Details.BelongsTo(models.Product);
    }
  }

  Details.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    namespaceId: DataTypes.STRING,
    name: DataTypes.STRING,
    capacityAvailable: DataTypes.ARRAY(DataTypes.STRING),
    capacity: DataTypes.STRING,
    priceRegular: DataTypes.INTEGER,
    priceDiscount: DataTypes.INTEGER,
    colorsAvailable: DataTypes.ARRAY(DataTypes.STRING),
    color: DataTypes.STRING,
    images: DataTypes.ARRAY(DataTypes.STRING),
    description: DataTypes.JSON,
    screen: DataTypes.STRING,
    resolution: DataTypes.STRING,
    processor: DataTypes.STRING,
    ram: DataTypes.STRING,
    camera: DataTypes.STRING,
    zoom: DataTypes.STRING,
    cell: DataTypes.ARRAY(DataTypes.STRING),
  }, {
    sequelize,
    modelName: 'Details',
    tableName: 'details',
    timestamps: false,
  });

  return Details;
};
