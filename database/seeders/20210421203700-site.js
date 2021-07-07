'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user = await queryInterface.rawSelect('Users', {
      where: {
        email: 'luan.vfarias@gmail.com',
      },
    }, ['id']);

    if (!user) {
    await queryInterface.bulkInsert('Sites', [{
      user_id: user.id,
      name: 'Modelo',
      route: 'whimsinc.com.br',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sites', null, {});
  }
};
