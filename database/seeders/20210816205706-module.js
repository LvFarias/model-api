'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const site = await queryInterface.rawSelect('Sites', {
      where: {
        route: 'cahmimospresentes.com.br',
      },
    }, ['id']);

    if (!!site) {
      const page = await queryInterface.rawSelect('Pages', {
        where: {
          site_id: site,
        },
      }, ['id']);

      if (!!page) {
        await queryInterface.bulkInsert('Modules', [
          {
            site_id: site,
            page_id: page,
            alias: 'home',
            type: 'banner',
            data: JSON.stringify({
              backgroundImage: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/CahMimos/banner.jpg'
            }),
            createdAt: new Date(),
            updatedAt: new Date(),
          }, {
            site_id: site,
            page_id: page,
            alias: 'nossa-historia',
            type: 'text',
            title: 'Nossa História',
            data: JSON.stringify({
              image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/CahMimos/nossa_historia.jpg',
              text: `A Cah Mimos é uma empresa especializada em presentes e brindes corporativos, que surgiu a partir de um sonho de cuidar de pessoas, e entrou no mercado para trazer inovação, qualidade e agilidade em suas datas comemorativas atuando de forma eficaz e com todo carinho necessário transmitindo sempre sentimentos em forma de presente.`,
              subs: [
                {
                  title: 'Missão',
                  text: 'Estar “sempre presente” na vida das pessoas, proporcionando momentos felizes com nossos presentes especiais.'
                }, {
                  title: 'Visão',
                  text: 'Ser a escolha numero 1 para presentes e datas comemorativas em São Paulo e Grande São Paulo, atingindo todas as idades e perfis.'
                }, {
                  title: 'Valores',
                  text: 'Somos uma empresa comprometida, que deseja não apenas ter clientes mas fazer deles parceiros e amigos. Para isso mantemos um serviço de qualidade e um atendimento cuidadoso repleto, sempre, de muito carinho em nossas entregas e confecções...'
                }
              ]
            }),
            createdAt: new Date(),
            updatedAt: new Date(),
          }, {
            site_id: site,
            page_id: page,
            alias: 'catalogo',
            type: 'list',
            title: 'Catálogo',
            data: JSON.stringify({
              action: 'https://wa.me/5511961905462?text=Ol%C3%A1%2C+eu+quero+fazer+um+pedido.',
              list: [
                {
                  name: 'CESTA AMAR',
                  image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/product_1.jpg',
                  desc: 'Contem: 1 urso de pelúcia, 1 Nutella 180g, 1 barra de chocolate 80% cacau, 4 bombom Ouro Branco e 1 barra de chocolate ao leite, dentro de uma caixa cartonada com alça.',
                  price: 140
                }, {
                  name: 'CESTA NINAR',
                  image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/product_2.jpg',
                  desc: 'Contem: 1 livro do bebê, 1 conjunto de agasalho, calca, touca e luva antialérgicos, 1 toalha de banho, 3 panos de boca e 3 fraldas, dentro de uma linda caixa personalizada.',
                  price: 240
                }, {
                  name: 'CESTA ALEGRAR',
                  image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/product_3.jpg',
                  desc: 'Contem: 1 Gin Tanqueray & Tonic, 1 bisnaga de creme de parmesão, 100g de palitos de parmesão, 1 sache easy drink (sabor variados), estojo em acrílico com especiarias para Gin, 1 chocolate orgânico Mendoá.',
                  price: 135
                }, {
                  name: 'CESTA CELEBRAR',
                  image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/product_4.jpg',
                  desc: 'Contem: 1 Chandon Baby, 1 caixa com 7 docinhos, 1 caderneta personalizada, 1 bolo de 500g, 100g de salgados variados.',
                  price: 160
                }, {
                  name: 'CESTA RECORDAR',
                  image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/product_5.jpg',
                  desc: 'Contem: 1 Vinho Artesanal, queijo brie, queijo gouda, damasco, queijo parmesão, queimo emmental, presunto Pharma, figo, morango, tâmaras, salame, palitos de parmesão, nozes, castanhas, queijo provolone, 1 geleia de pimenta.',
                  price: 170
                }, {
                  name: 'CESTA FESTEJAR',
                  image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/product_6.jpg',
                  desc: 'Contem: 1 Cerveja artesanal, 1 caixa de Ferrero Roche, 1 bisnaga de creme de parmesão, 1 tabua de madeira, 100g de nozes no pote de vidro, 100g de castanha no pote de vidro, uvas, tomate cereja, damasco, queijo gouda, palitos de muçarela, azeitonas, torradas finas e queijo emmental e salame.',
                  price: 150
                }, {
                  name: 'CESTA ADMIRAR',
                  image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/product_7.jpg',
                  desc: 'Contem: 1 Buquê de flor (opcional), 1 suco de 200ml, 2 croissants, 4 carolinas, 2 pães de mel, muçarela, salame, 1 pão de parmesão, morango, pera, 1 mini bolo, 100g de pão de queijo, e 100g de castanhas. (opcional, acréscimo de 35,00)',
                  price: 130
                }, {
                  name: 'CESTA DESPERTAR',
                  image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/product_8.jpg',
                  desc: 'Contem: 2 saches de chá importados, 1 sache de café dripp, 1 sache de chocolate quente, torradinhas, 1 suco de 200ml, salame, presunto Pharma, 1 mini bolo, uvas, morangos, 1 iogurte, damascos, 1 pão integral, 1 pão de parmesão, 1 geleia de framboesa, castanhas, biscoitos amanteigados, bolinhos de chuva em 1 tabua de madeira.',
                  price: 145
                }, {
                  name: 'CESTA ADOÇAR',
                  image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/product_9.jpg',
                  desc: 'Contem: 1 xicara de porcelana, 1 café gourmet bagio aromatizado com caramelo ou trufado, 1 suco de tangerina, 1 brownie, 100gr de dadinhos de tapioca, 50ml de geleia de pimenta ou mel, 50ml de geleia de frutas vermelhas, 100gr de biscoitos amanteigados, 100gr de bolinho de chuva, torradinha, 1 mini rapadura, 1 coador de café individual, 1 bolsa de palha com fita de cetim, Buquê de flores opcional 35,00.',
                  price: 185
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
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_1.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 2',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_2_z.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 3',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_3_a.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 4',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_4.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 5',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_5.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 6',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_6.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 7',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_7.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 9',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_9.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 8',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_8.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 11',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_11_y.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 10',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_10.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 12',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_12_w.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 14',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_14.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 13',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_13_e.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 15',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_15.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 16',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_16.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 17',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_17_n.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 18',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_18_a.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 19',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_19_o.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 20',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_20_v.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                }, {
                  name: 'Imagem 21',
                  src: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/image_21_b.jpg',
                  link: 'https://www.instagram.com/cahmimoss2/'
                },
              ]
            }),
            createdAt: new Date(),
            updatedAt: new Date(),
          }, {
            site_id: site,
            page_id: page,
            alias: 'materias',
            title: 'Matérias',
            type: 'posts',
            data: JSON.stringify({
              posts: [
                {
                  journal: 'Revista Economia',
                  logo: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/journal_2.jpg',
                  title: 'Presente com sentimento: Cah Mimos faz sucesso com venda de cestas personalizadas',
                  image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626825976/CahMimos/materia_2.jpg',
                  link: 'https://revistaeconomia.com.br/new/presente-com-sentimento-cah-mimos-faz-sucesso-com-venda-de-cestas-personalizadas/'
                }
              ]
            }),
            createdAt: new Date(),
            updatedAt: new Date(),
          }, {
            site_id: site,
            page_id: page,
            alias: 'comentarios',
            title: 'Comentários',
            type: 'feedbacks',
            data: JSON.stringify({
              users: [
                {
                  name: 'Karol Rodrigues',
                  comment: `Conheci as cestas da Cah Mimos sem querer e logo virei cliente. Um atendimento diferenciado com atenção, presteza e cuidado nos detalhes. Meu primeiro pedido foi no Dias das mulheres e hj as cestas da minha equipe são feitas por ela.  Tudo fresquinho com toque especial de carinho. Super indico e recomendo.🥰`
                }, {
                  name: 'Lana Basque',
                  comment: `De última hora a Carol me salvou no dia dos pais, consegui fazer a manhã do meu marido muito mais feliz`
                }, {
                  name: 'Fernanda Vassoller',
                  comment: `Obrigada Cah Mimos pela parceria e por captar tao bem sempre a mensagem que queremos passar, tem feito muita diferença, em nossas ações.`
                }, {
                  name: 'Marlucy Lopes',
                  comment: `Conheci a Cah por indicação de uma amiga e me apaixonei!! Cestas personalizadas, criativas e maravilhosas, feitas com mto carinho e prestando atenção em cada detalhe! A partir daí meus amigos, funcionários e familiares tiveram a sorte de sempre ganharem presentes maravilhosos independente da ocasião!!`
                }, {
                  name: 'Barbara Constantino',
                  comment: `Os produtos e o atendimento da Cah Mimos são maravilhosos. Dá para sentir que tudo é feito com muito carinho e cuidado. A qualidade começa desde o atendimento até a chegada da cesta em casa, é um prazer poder contar com uma marca dessas.`
                }, {
                  name: 'Silvia Leo',
                  comment: `CAHMIMOS, e uma empresa que surpreende com os detalhes, capricho e atendimento personalizado. Gerenciam com bastante rapidez e conseguem personalizar o a atendimento de uma forma única. Amo de paixão.`
                },
              ]
            }),
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        ], {});
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pages', null, {});
  }
};
