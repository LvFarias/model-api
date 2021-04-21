'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Configs extends Model { }

  Configs.init({
    site_id: DataTypes.INTEGER,
    primary_color: DataTypes.STRING,
    primary_secondary: DataTypes.STRING,
    primary_tertiary: DataTypes.STRING,
    primary_mygray: DataTypes.STRING,
    primary_actions: DataTypes.STRING,
    font_family: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Configs',
  });

  Configs.associate = (models) => {
    const { Sites } = models;

    Configs.belongsTo(
      Sites,
      { foreignKey: 'site_id', onDelete: 'CASCADE'  }
    );
  };

  return Configs;
};