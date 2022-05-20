module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'todos',
      [
        {
          subject: 'Assunto 1',
          description: 'Descrição YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem ',
          status: 'pending',
          // user_id: 1
        },
        {
          subject: 'Assunto 2',
          description: 'Descrição YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem ',
          status: 'in progress',
          // user_id: 1
        },
        {
          subject: 'Assunto 3',
          description: 'Descrição YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem ',
          status: 'done',
          // user_id: 1
        },
        {
          subject: 'Assunto 4',
          description: 'Descrição YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem ',
          status: 'pending',
          // user_id: 2
        },
        {
          subject: 'Assunto 5',
          description: 'Descrição YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem ',
          status: 'in progress',
          // user_id: 2
        },
        {
          subject: 'Assunto 6',
          description: 'Descrição YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem ',
          status: 'done',
          // user_id: 2
        },
        {
          subject: 'Assunto 7',
          description: 'Descrição YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem ',
          status: 'pending',
          // user_id: 3
        },
        {
          subject: 'Assunto 8',
          description: 'Descrição YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem ',
          status: 'in progress',
          // user_id: 3
        },
        {
          subject: 'Assunto 9',
          description: 'Descrição YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem YpsumLorem ',
          status: 'done',
          // user_id: 3
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('todos', null, {});
  },
};
