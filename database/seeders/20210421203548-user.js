'use strict';

const { jwt } = require("../../src/libs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'Luan Vasco',
      avatar: 'asasa',
      email: 'luan.vfarias@gmail.com',
      password: jwt.bashPassword('Teste123'),
      token: '',
      type: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', { email: 'luan.vfarias@gmail.com' }, {});
  }
};
