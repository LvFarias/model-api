'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const site = await queryInterface.rawSelect('Sites', {
      where: {
        route: 'cahmimospresentes.com.br',
      },
    }, ['id']);

    if (!!site) {
      await queryInterface.bulkInsert('Pages', [{
        site_id: site,
        name: 'Cah Mimos',
        alias: 'home',
        route: 'home',
        title: 'Cah Mimos',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pages', null, {});
  }
};
