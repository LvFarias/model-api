'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sites extends Model { }

  Sites.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    route: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Sites',
  });

  Sites.associate = (models) => {
    const { Users, Pages } = models;

    Sites.belongsTo(
      Users,
      { foreignKey: 'user_id', onDelete: 'CASCADE' }
    );

    Sites.hasMany(
      Pages,
      { foreignKey: 'site_id', onDelete: 'CASCADE' }
    );
  };

  return Sites;
};