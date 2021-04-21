'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Configs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      site_id: {
        type: Sequelize.INTEGER
      },
      primary_color: {
        type: Sequelize.STRING
      },
      primary_secondary: {
        type: Sequelize.STRING
      },
      primary_tertiary: {
        type: Sequelize.STRING
      },
      primary_mygray: {
        type: Sequelize.STRING
      },
      primary_actions: {
        type: Sequelize.STRING
      },
      font_family: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Configs');
  }
};