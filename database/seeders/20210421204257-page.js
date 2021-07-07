'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const site = await queryInterface.rawSelect('Sites', {
      where: {
        route: 'whimsinc.com.br',
      },
    }, ['id']);

    if (!site) {
      await queryInterface.bulkInsert('Pages', [{
        site_id: site.id,
        name: 'Home',
        alias: 'home',
        route: 'home',
        title: 'Site Modelo',
        modules: '[{"type":"banner","backgroundColor":"mygray","backgroundColorVariant":"dark","backgroundImage":"../../../assets/images/banner.jpg"},{"type":"text","title":"Resumo","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel egestas augue, ut ultricies dolor. Cras id leo at enim suscipit iaculis. Quisque pulvinar nulla libero, at interdum enim laoreet et. Aliquam volutpat vitae dolor ut rutrum. Cras convallis tristique auctor. Quisque felis quam, posuere sed fermentum at, dictum vel lectus. Duis in tempor sem, vulputate tempus nibh. Cras nulla quam, aliquet non pretium vitae, commodo tincidunt erat. Phasellus mattis augue tempor dui congue, aliquam molestie diam interdum. Quisque vitae elit a enim pellentesque fringilla. Maecenas quis ex in lacus ultricies porttitor. Ut luctus quam a est congue commodo. Sed tempus, tortor sed rutrum eleifend, neque tortor egestas purus, quis faucibus ipsum metus et sapien. Quisque rutrum ipsum quis condimentum congue.<br>Mauris congue odio vel orci eleifend interdum. Nam iaculis, turpis eu ullamcorper fringilla, ante justo scelerisque magna, nec scelerisque magna dolor et ipsum. Vivamus pharetra orci vitae est ultrices facilisis. Etiam sed dignissim ligula. Ut et eros ultrices, euismod justo hendrerit, porttitor turpis. Curabitur ut risus ultrices, rhoncus lorem a, facilisis lectus. Sed laoreet diam ut urna finibus ultricies. In blandit placerat odio nec consequat. Aenean efficitur turpis in leo scelerisque interdum. Ut vitae nisi nunc."},{"type":"images","title":"Cases","images":[{"name":"Nike","src":"https://logospng.org/download/nike/logo-nike-2048.png"},{"name":"Nike","src":"https://logospng.org/download/nike/logo-nike-2048.png"},{"name":"Nike","src":"https://logospng.org/download/nike/logo-nike-2048.png"},{"name":"Nike","src":"https://logospng.org/download/nike/logo-nike-2048.png"}]},{"type":"banner","backgroundColor":"mygray","backgroundColorVariant":"dark","backgroundImage":"../../../assets/images/banner.jpg"},{"type":"feedbacks","title":"Clientes","users":[{"name":"Cliente 1","comment":"Comentario do cliente 1 falando coisas ótimas."},{"name":"Cliente 2","comment":"Comentario do cliente 2 falando coisas ótimas."},{"name":"Cliente 3","comment":"Comentario do cliente 3 falando coisas ótimas."},{"name":"Cliente 4","comment":"Comentario do cliente 4 falando coisas ótimas."}]}]',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pages', null, {});
  }
};
