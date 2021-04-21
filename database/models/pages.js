'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pages extends Model { }

  Pages.init({
    site_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    alias: DataTypes.STRING,
    route: DataTypes.STRING,
    title: DataTypes.STRING,
    modules: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Pages',
  });

  Pages.associate = (models) => {
    const { Sites } = models;

    Pages.belongsTo(
      Sites,
      { foreignKey: 'site_id', onDelete: 'CASCADE' }
    );
  };
  
  return Pages;
};