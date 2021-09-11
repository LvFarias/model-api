'use strict';

const { jwt } = require("../../src/libs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'Elis Vasco',
      avatar: 'asasa',
      email: 'elisreginavg@gmail.com',
      password: jwt.bashPassword('ElisVasco@2021'),
      token: '',
      type: 'client',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    
    const user = await queryInterface.rawSelect('Users', {
      where: { email: 'elisreginavg@gmail.com' },
    }, ['id']);

    if (!!user) {
      await queryInterface.bulkInsert('Sites', [{
        user_id: user,
        name: 'ElisVasco',
        route: 'elisvasco.com.br',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});

      const site = await queryInterface.rawSelect('Sites', {
        where: { route: 'elisvasco.com.br' },
      }, ['id']);
  
      if (!!site) {
        await queryInterface.bulkInsert('Pages', [{
          site_id: site,
          name: 'Home',
          alias: 'home',
          route: 'home',
          title: 'Elis Vasco',
          createdAt: new Date(),
          updatedAt: new Date(),
        }], {});

        const page = await queryInterface.rawSelect('Pages', {
          where: { site_id: site },
        }, ['id']);
  
        if (!!page) {
          await queryInterface.bulkInsert('Configs', [{
            site_id: site,
            page_id: page,
            socialList: JSON.stringify([
              { network: 'whatsapp', link: 'https://wa.me/5511983911313' },
              { network: 'instagram', link: 'https://www.instagram.com/elisvasco/' },
            ]),
            logo: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/ElisVasco/banner.jpg',
            tel: '(11) 9.8391-1313',
            email: 'elisreginavg@gmail.com',
            city: 'São Paulo',
            state: 'SP',
            deliveryInfo: '',
            schedules: '[]',
            createdAt: new Date(),
            updatedAt: new Date(),
          }], {});

          await queryInterface.bulkInsert('Modules', [
            {
              site_id: site,
              page_id: page,
              alias: 'home',
              type: 'banner',
              data: JSON.stringify({
                backgroundImage: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/ElisVasco/banner.jpg'
              }),
              createdAt: new Date(),
              updatedAt: new Date(),
            }, {
              site_id: site,
              page_id: page,
              alias: 'quem-somos',
              type: 'title-subject-text',
              title: 'Quem Somos',
              data: JSON.stringify({
                image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/ElisVasco/banner.jpg',
                subject: 'Um pouco sobre a Elis',
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum massa a nisl interdum consequat. Morbi imperdiet pulvinar sagittis. Donec non semper tortor. Praesent molestie ligula a lectus finibus semper. Cras et aliquam dui, et elementum urna. Donec nec turpis a neque eleifend fringilla non eget mauris. Donec at lectus eu neque semper tempor eget convallis mi. Nulla finibus leo in mi lacinia tincidunt. Curabitur id ullamcorper dolor.
                <br><br>
                Maecenas molestie risus vitae ligula lobortis rutrum. Fusce tristique ornare velit nec cursus. Curabitur pellentesque, metus at tincidunt lobortis, elit lorem tincidunt metus, eget mattis lorem urna ut nisi. Proin rhoncus elit nisi, ut rutrum diam efficitur eget. Proin nec eleifend nisl. Nullam aliquet libero vel maximus aliquet. Ut hendrerit auctor mollis. Pellentesque pulvinar suscipit pretium. Vivamus ut risus molestie, tristique lacus ac, bibendum dui. Sed non erat ullamcorper, ornare enim a, interdum ex. Ut scelerisque est interdum tempor varius. Etiam eu lorem consectetur, porta nulla vel, posuere lorem. Suspendisse sed orci ac erat fringilla tincidunt.`,
              }),
              createdAt: new Date(),
              updatedAt: new Date(),
            }, {
              site_id: site,
              page_id: page,
              alias: 'motivacao',
              title: 'Motivação',
              type: 'citation-image',
              data: JSON.stringify({
                image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/ElisVasco/banner.jpg',
                text: `A nossa civilização é em grande parte responsável pelas nossas desgraças. Seríamos muito mais felizes se a abandonássemos e retornássemos às condições primitivas.`,
                citation: `Sigmund Freud`,
              }),
              createdAt: new Date(),
              updatedAt: new Date(),
            }, {
              site_id: site,
              page_id: page,
              alias: 'materia',
              title: 'Matéria',
              type: 'post',
              data: JSON.stringify({
                image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/ElisVasco/banner.jpg',
                headline: 'Materia sobre algo',
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum massa a nisl interdum consequat. Morbi imperdiet pulvinar sagittis. Donec non semper tortor. Praesent molestie ligula a lectus finibus semper. Cras et aliquam dui, et elementum urna. Donec nec turpis a neque eleifend fringilla non eget mauris. Donec at lectus eu neque semper tempor eget convallis mi. Nulla finibus leo in mi lacinia tincidunt. Curabitur id ullamcorper dolor.
                <br><br>
                Maecenas molestie risus vitae ligula lobortis rutrum. Fusce tristique ornare velit nec cursus. Curabitur pellentesque, metus at tincidunt lobortis, elit lorem tincidunt metus, eget mattis lorem urna ut nisi. Proin rhoncus elit nisi, ut rutrum diam efficitur eget. Proin nec eleifend nisl. Nullam aliquet libero vel maximus aliquet. Ut hendrerit auctor mollis. Pellentesque pulvinar suscipit pretium. Vivamus ut risus molestie, tristique lacus ac, bibendum dui. Sed non erat ullamcorper, ornare enim a, interdum ex. Ut scelerisque est interdum tempor varius. Etiam eu lorem consectetur, porta nulla vel, posuere lorem. Suspendisse sed orci ac erat fringilla tincidunt.
                <br><br>
                Fusce lectus neque, imperdiet sed commodo ut, tincidunt et erat. Maecenas tincidunt, velit in fringilla cursus, ante nulla elementum turpis, quis commodo ipsum lectus aliquet tortor. Nam nec libero convallis, convallis velit ut, convallis dui. Praesent eget urna suscipit, interdum augue nec, accumsan risus. Suspendisse venenatis ligula ullamcorper augue vulputate condimentum. Donec auctor justo elementum, viverra tellus sit amet, gravida justo. Vestibulum porttitor orci at placerat ultricies. Vestibulum ornare justo sed porttitor efficitur. Nam congue sapien quis turpis volutpat vulputate. Suspendisse a mauris sed urna hendrerit mattis. Proin consequat imperdiet nisi, nec efficitur massa auctor et.`,
              }),
              createdAt: new Date(),
              updatedAt: new Date(),
            }, {
              site_id: site,
              page_id: page,
              alias: 'planos',
              type: 'plans',
              title: 'Planos',
              data: JSON.stringify({
                list: [
                  {
                    name: 'Consulta psiquiátrica',
                    image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/ElisVasco/banner.jpg',
                    plan_name: 'consulta-psiquiatrica',
                    duration: 1,
                    price: 100,
                  }, {
                    name: 'Consulta psiquiátrica longa',
                    image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/ElisVasco/banner.jpg',
                    plan_name: 'consulta-psiquiatrica-longa',
                    duration: 2,
                    price: 200,
                  }, {
                    name: 'Terapia particular',
                    image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/ElisVasco/banner.jpg',
                    plan_name: 'terapia-particular',
                    duration: 3,
                    price: 300,
                  },
                ]
              }),
              createdAt: new Date(),
              updatedAt: new Date(),
            }, {
              site_id: site,
              page_id: page,
              alias: 'galeria',
              title: 'Galeria',
              type: 'images',
              data: JSON.stringify({
                images: [
                  {
                    name: 'Imagem 1',
                    src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/ElisVasco/banner.jpg',
                    link: 'https://www.instagram.com/elisvasco/'
                  }, {
                    name: 'Imagem 2',
                    src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/ElisVasco/banner.jpg',
                    link: 'https://www.instagram.com/elisvasco/'
                  }, {
                    name: 'Imagem 3',
                    src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/ElisVasco/banner.jpg',
                    link: 'https://www.instagram.com/elisvasco/'
                  }, {
                    name: 'Imagem 4',
                    src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/ElisVasco/banner.jpg',
                    link: 'https://www.instagram.com/elisvasco/'
                  }, {
                    name: 'Imagem 5',
                    src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/ElisVasco/banner.jpg',
                    link: 'https://www.instagram.com/elisvasco/'
                  }, {
                    name: 'Imagem 6',
                    src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/ElisVasco/banner.jpg',
                    link: 'https://www.instagram.com/elisvasco/'
                  }
                ]
              }),
              createdAt: new Date(),
              updatedAt: new Date(),
            
            }, {
              site_id: site,
              page_id: page,
              alias: 'entre-contato',
              title: 'Entre em Contato',
              type: 'form',
              data: JSON.stringify({
                fields: [
                  {
                    name: 'Nome',
                    type: 'text',
                    required: true,
                  }, {
                    name: 'Email',
                    type: 'email',
                    required: true,
                  }, {
                    name: 'Assunto',
                    type: 'text',
                    required: true,
                  }, {
                    name: 'Mensagem',
                    type: 'textarea',
                    required: true,
                  },
                ],
                image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/ElisVasco/banner.jpg',
                emailTo: 'elisreginavg@gmail.com',
                emailSubject: 'Menssagem vindo do site',
                buttonName: 'Enviar',
              }),
              createdAt: new Date(),
              updatedAt: new Date(),
            }
          ], {});
        }
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', { email: 'elisreginavg@gmail.com' }, {});
    await queryInterface.bulkDelete('Sites', { route: 'elisvasco.com.br' }, {});
  }
};
