'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user = await queryInterface.rawSelect('Users', {
      where: {
        email: 'cahmimos@outlook.com',
      },
    }, ['id']);

    if (!!user) {
      await queryInterface.bulkInsert('Sites', [{
        user_id: user,
        name: 'CahMimos',
        route: 'cahmimospresentes.com.br',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sites', null, {});
  }
};
