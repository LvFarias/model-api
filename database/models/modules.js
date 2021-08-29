'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Modules extends Model { }

  Modules.init({
    site_id: DataTypes.INTEGER,
    page_id: DataTypes.INTEGER,
    alias: DataTypes.STRING,
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    data: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Modules',
  });

  Modules.associate = (models) => {
    const { Sites, Pages } = models;

    Modules.belongsTo(
      Pages,
      { foreignKey: 'page_id', onDelete: 'CASCADE' }
    );
    Modules.belongsTo(
      Sites,
      { foreignKey: 'site_id', onDelete: 'CASCADE' }
    );
  };
  
  return Modules;
};