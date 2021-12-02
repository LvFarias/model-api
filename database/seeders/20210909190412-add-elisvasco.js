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
              { network: 'envelope', link: 'elisreginavg@gmail.com' },
              { network: 'whatsapp', link: 'https://wa.me/5511983911313' },
              { network: 'instagram', link: 'https://www.instagram.com/elisvasco/' },
            ]),
            logo: 'https://res.cloudinary.com/whims-inc/image/upload/v1631225755/ElisVasco/logo_ei17cj.png',
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
                backgroundImage: 'http://res.cloudinary.com/whims-inc/image/upload/v1638402154/Whims%20Inc/teste_pyb7nk.jpg'
              }),
              createdAt: new Date(),
              updatedAt: new Date(),
            }, {
              site_id: site,
              page_id: page,
              alias: 'sobre-mim',
              type: 'title-subject-text',
              title: 'Sobre Mim',
              data: JSON.stringify({
                image: 'http://res.cloudinary.com/whims-inc/image/upload/v1638404277/Whims%20Inc/teste_taj22c.jpg',
                subject: 'Sou Elis, formada em Psicologia e especialista em Terapia Cognitivo-Comportamental.',
                text: `Sou filha, esposa, mãe e mais alguns outros papéis que nós mulheres desempenhamos ao longo da vida. Aqui no site e no meu Instagram @elisvasco, dedico-me a falar sobre os temas:<br>\n<br>\nAutoestima e Autoconhecimento<br>\nAmadurecimento<br>\nEmagrecimento e Obesidade<br>\nMaternidade e Educação<br>\nRelacionamentos<br>\nSaúde Emocional<br>\n<br>\nEu atendo de forma on-line para o processo de psicoterapia.<br>\n<br>\nDessa maneira não temos limitações geográficas, conecto-me com você onde estiver.<br>\n<br>\nAcredito que todo ser humano é uma potência, e somos totalmente capazes e responsáveis por criar nossa realidade. Estou totalmente entregue e disposta a auxiliar você nesse caminho da construção da realidade que você quer viver.<br>\n<br>\nSinto-me feliz por ter você aqui. Espero de verdade somar na sua vida através do meu trabalho e do meu conhecimento.<br>\n<br>\nSeja muito bem-vindo!`,
              }),
              createdAt: new Date(),
              updatedAt: new Date(),
            }, {
              site_id: site,
              page_id: page,
              alias: 'primeiro-atendimento',
              title: 'Primeiro atendimento',
              type: 'backgroud-image-text',
              data: JSON.stringify({
                image: 'http://res.cloudinary.com/whims-inc/image/upload/v1638402524/Whims%20Inc/teste_xvm78v.jpg',
                text: `O primeiro atendimento com um psicólogo pode ser cercado de dúvidas. O processo terapêutico costuma ser permeado por um imaginário quase místico. Mas, na realidade, não há mágica (nem nada de místico). Também não precisamos responder tudo nos primeiros 50 minutos. Esse primeiro contato é como uma introdução, um teste para ver se um “vai com a cara” do outro.<br>\n<br>\nAs outras sessões seguem uma agenda diferente, mas isso eu explico quando você iniciar seu processo!<br>\n<br>\nVou contar como é o primeiro atendimento COMIGO. Claro que cada psicólogo tem seus métodos, mas não costuma ser muito diferente!<br>\n<br>\n1-) Provavelmente vamos começar nos apresentando e com algum tipo de conversa informal, justamente para ajudar você a relaxar!<br>\n<br>\n2-) Não se preocupe em saber “o que precisa falar”! Este primeiro contato é um momento de conhecimento e eu vou fazer algumas perguntas que vão ajudar você a saber por onde começar.<br>\n<br>\n3-) Costumo começar com o que motivou a procura pela terapia, se já fez algum processo terapêutico antes, o que mais incomoda você ou causa sofrimento, exploro seus sintomas, busco dados importantes da sua história de vida e principalmente: O que você espera alcançar com a terapia? Com isso, eu posso elaborar um plano terapêutico adequado à sua condição e as suas expectativas.<br>\n<br>\n4-) Nesse primeiro contato que eu vou contar como vai ser nosso trabalho, explicar a abordagem que eu sigo, sobre o sigilo profissional e deixar você à vontade para fazer todas as perguntas que julgar necessárias.<br>\n<br>\nAs vezes nosso vínculo se estabelece já aqui, as vezes não! E não há problema nenhum precisar de mais sessões para se sentir à vontade na terapia!<br>\n<br>\nRespeite seu tempo, e você vai perceber que com o amadurecimento da nossa relação, será mais fácil — e natural — falar sobre seus incômodos e dificuldades.`,
              }),
              createdAt: new Date(),
              updatedAt: new Date(),
            }, {
              site_id: site,
              page_id: page,
              alias: 'atendimento-on-line',
              title: 'Atendimento On-line',
              type: 'sub-text-image',
              data: JSON.stringify({
                subModules: [
                  {
                    image: 'http://res.cloudinary.com/whims-inc/image/upload/v1638311808/Whims%20Inc/teste_wwbnrr.jpg',
                    text: '“Terapia é um lugar de encontro, que acontece onde quer que se encontre lugar”.<br>\n<br>\n<b>Como funciona?</b><br>\n<br>\n- Você marca um horário comigo (por WhatsApp, ou e-mail, ou direct do Instagram).<br>\n- Combinamos o melhor meio (Google meet, Zoom, WhatsApp, Skype).<br>\n- O atendimento dura 50 minutos.<br>\n- O pagamento é realizado antes do atendimento, através de depósito ou transferência bancária.<br>\n<br>\n<b>O que mais é necessário?</b><br>\n<br>\n- Um ambiente privado.<br>\n- Uma boa conexão de internet (estável).<br>\n- Se for possível, um par de fones de ouvido.',
                  }, {
                    image: 'http://res.cloudinary.com/whims-inc/image/upload/v1638311803/Whims%20Inc/teste_v2x9ki.jpg',
                    text: 'A Terapia Online foi regulamentada no Brasil em 2018, pela Resolução nº 11/2018 do Conselho Federal de Psicologia (CFP). Antes da pandemia de coronavírus, e da necessidade de distanciamento social, muita gente nem sabia que era possível realizar atendimentos desta forma.<br>\n<br>\nNa terapia online, somente paciente e o psicólogo tem acesso à sessão, que pode ser realizada via alguma plataforma de atendimento, aplicativos de comunicação e por chamadas de vídeo. Nenhuma sessão é gravada, respeitando o princípio da confidencialidade entre psicólogo e cliente. Os registros e prontuários são elaborados como os da sessão presencial.<br>\n<br>\nPara realizar atendimentos online, o psicólogo – além de cumprir com as exigências tradicionais para atuação profissional – precisa ter um cadastro específico no E-Psi, uma plataforma do CFP, que garante um processo seguro de verificação e credenciamento, além de ser bem rigoroso quanto ao cumprimento do código de ética.<br>\n<br>\nA possibilidade de atendimento virtual dispensa as preocupações com deslocamento, horários apertados, etc. Sem falar nas ocasiões de viagens longas ou mudança de país, que evitam a suspensão do atendimento ou a troca do profissional que o paciente está vinculado e habituado.<br>\n<br>\nNão é possível declarar qual modalidade de terapia - presencial ou online - é melhor.<br>\n<br>\nEntre os muitos fatores que determinam isso, o principal é a preferência pessoal de cada um. O fato é que não há diferença na qualidade do atendimento, no comprometimento do profissional, no sigilo e na efetividade do tratamento.<br>\n<br>\nVale a pena tentar a modalidade online.<br>\n<br>\n<b>O que não dá, é deixar de lado o cuidado com sua saúde mental.</b><br>\n<br>\nElis Regina Vasco Gomes<br>\nCRP 06/92087- SP',
                  },
                ],
              }),
              createdAt: new Date(),
              updatedAt: new Date(),
            }, {
              site_id: site,
              page_id: page,
              alias: 'para-te-ajudar',
              title: 'Para te ajudar',
              type: 'images',
              data: JSON.stringify({
                images: [
                  {
                    name: 'Imagem do Insta',
                    link: 'https://www.instagram.com/p/CW4Ilafsave/',
                    src: 'http://res.cloudinary.com/whims-inc/image/upload/v1638310370/Whims%20Inc/teste_rht0tg.jpg',
                  }, {
                    name: 'Imagem do Insta',
                    link: 'https://www.instagram.com/p/CW6nceHrb58/',
                    src: 'http://res.cloudinary.com/whims-inc/image/upload/v1638310371/Whims%20Inc/teste_ce0zir.jpg',
                  }, {
                    name: 'Imagem do Insta',
                    link: 'https://www.instagram.com/p/CWwZHOuL2uf/',
                    src: 'http://res.cloudinary.com/whims-inc/image/upload/v1638310373/Whims%20Inc/teste_j1dvqd.jpg',
                  }, {
                    name: 'Imagem do Insta',
                    link: 'https://www.instagram.com/p/CWsj-RwLMe_/',
                    src: 'http://res.cloudinary.com/whims-inc/image/upload/v1638310374/Whims%20Inc/teste_gzykci.jpg',
                  }, {
                    name: 'Imagem do Insta',
                    link: 'https://www.instagram.com/p/CWoqBN7r7Fn/',
                    src: 'http://res.cloudinary.com/whims-inc/image/upload/v1638310376/Whims%20Inc/teste_ctgnpb.jpg',
                  }, {
                    name: 'Imagem do Insta',
                    link: 'https://www.instagram.com/p/CWVVWy8r7Xb/',
                    src: 'http://res.cloudinary.com/whims-inc/image/upload/v1638310377/Whims%20Inc/teste_r0eak5.jpg',
                  }, {
                    name: 'Imagem do Insta',
                    link: 'https://www.instagram.com/p/CWEeB-dL58B/',
                    src: 'http://res.cloudinary.com/whims-inc/image/upload/v1638310378/Whims%20Inc/teste_aekznt.jpg',
                  }, {
                    name: 'Imagem do Insta',
                    link: 'https://www.instagram.com/p/CWMfPKmlQjq/',
                    src: 'http://res.cloudinary.com/whims-inc/image/upload/v1638310380/Whims%20Inc/teste_snn8qb.jpg',
                  }, {
                    name: 'Imagem do Insta',
                    link: 'https://www.instagram.com/p/CV-8_CYLgkJ/',
                    src: 'http://res.cloudinary.com/whims-inc/image/upload/v1638310381/Whims%20Inc/teste_kuwbfy.jpg',
                  }, {
                    name: 'Imagem do Insta',
                    link: 'https://www.instagram.com/p/CW9LSderOSj/',
                    src: 'http://res.cloudinary.com/whims-inc/image/upload/v1638407130/Whims%20Inc/teste_gkee4k.jpg',
                  }, {
                    name: 'Imagem do Insta',
                    link: 'https://www.instagram.com/p/CW6nceHrb58/',
                    src: 'http://res.cloudinary.com/whims-inc/image/upload/v1638407132/Whims%20Inc/teste_pi1rut.jpg',
                  }, {
                    name: 'Imagem do Insta',
                    link: 'https://www.instagram.com/p/CWZKrBErZaS/',
                    src: 'http://res.cloudinary.com/whims-inc/image/upload/v1638407133/Whims%20Inc/teste_h7uywp.jpg',
                  }
                ]
              }),
              createdAt: new Date(),
              updatedAt: new Date(),
              // },{
              //   site_id: site,
              //   page_id: page,
              //   alias: 'entre-contato',
              //   title: 'Entre em Contato',
              //   type: 'form',
              //   data: JSON.stringify({
              //     fields: [
              //       {
              //         name: 'Nome',
              //         type: 'text',
              //         required: true,
              //       }, {
              //         name: 'Email',
              //         type: 'email',
              //         required: true,
              //       }, {
              //         name: 'Assunto',
              //         type: 'text',
              //         required: true,
              //       }, {
              //         name: 'Mensagem',
              //         type: 'textarea',
              //         required: true,
              //       },
              //     ],
              //     image: 'https://res.cloudinary.com/whims-inc/image/upload/v1626826707/ElisVasco/contato_s19f4m.jpg',
              //     emailTo: 'elisreginavg@gmail.com',
              //     emailSubject: 'Menssagem vindo do site',
              //     buttonName: 'Enviar',
              //   }),
              //   createdAt: new Date(),
              //   updatedAt: new Date(),
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
