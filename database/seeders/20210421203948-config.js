'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Configs', [{
      site_id: 1,
      primary_color: '#007fb1',
      primary_secondary: '#007fb1',
      primary_tertiary: '#007fb1',
      primary_mygray: '#fc0fc0',
      primary_actions: '#007fb1',
      font_family: 'Krub',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Configs', null, {});
  }
};
