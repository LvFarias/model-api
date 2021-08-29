'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const site = await queryInterface.rawSelect('Sites', {
      where: {
        route: 'cahmimospresentes.com.br',
      },
    }, ['id']);

    if(!!site) {
      const page = await queryInterface.rawSelect('Pages', {
        where: {
          site_id: site,
        },
      }, ['id']);

      if (!!page) {
        await queryInterface.bulkInsert('Configs', [{
          site_id: site,
          page_id: page,
          socialList: JSON.stringify([
            { network: 'instagram', link: 'https://www.instagram.com/cahmimoss2/' },
            { network: 'facebook', link: 'https://www.facebook.com/Cahmimoss2/' },
            { network: 'whatsapp', link: 'https://wa.me/5511961905462?text=Ol%C3%A1%2C+eu+quero+fazer+um+pedido.' },
          ]),
          tel: '(11) 9.6190-5462',
          email: 'cahmimoss2@outlook.com',
          city: 'São Paulo',
          state: 'SP',
          deliveryInfo: 'Entrega em todas as regiões de SP',
          schedules: JSON.stringify([
            'De seg a sexta das 10 as 17 hs',
            'Sábado das 9 as 14 hs ',
            'Horário de entregas com agendamento',
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        }], {});
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Configs', null, {});
  }
};
