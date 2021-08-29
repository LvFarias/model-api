'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Configs extends Model { }

  Configs.init({
    site_id: DataTypes.INTEGER,
    page_id: DataTypes.INTEGER,
    socialList: DataTypes.TEXT,
    tel: DataTypes.STRING,
    email: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    deliveryInfo: DataTypes.STRING,
    schedules: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Configs',
  });

  Configs.associate = (models) => {
    const { Sites, Pages } = models;

    Configs.belongsTo(
      Sites,
      { foreignKey: 'site_id', onDelete: 'CASCADE'  }
    );
    Configs.belongsTo(
      Pages,
      { foreignKey: 'page_id', onDelete: 'CASCADE'  }
    );
  };

  return Configs;
};