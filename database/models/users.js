'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model { }

  Users.init({
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
  });

  Users.associate = (models) => {
    const { Sites } = models;
    
    Users.hasMany(
      Sites,
      { foreignKey: 'user_id', onDelete: 'CASCADE' }
    );
  };

  return Users;
};