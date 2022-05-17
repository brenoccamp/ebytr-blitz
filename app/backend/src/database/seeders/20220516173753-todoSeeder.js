module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'todos',
      [
        {
          subject: 'Task 1 to test user1',
          description: 'Task pending added for test seeders and other behaviors',
          status: 'pending',
          user_id: 1
        },
        {
          subject: 'Task 2 to test user1',
          description: 'Task in progress added for test seeders and other behaviors',
          status: 'in progress',
          user_id: 1
        },
        {
          subject: 'Task 3 to test user1',
          description: 'Task done added for test seeders and other behaviors',
          status: 'done',
          user_id: 1
        },
        {
          subject: 'Task 1 to test user2',
          description: 'Task pending added for test seeders and other behaviors',
          status: 'pending',
          user_id: 2
        },
        {
          subject: 'Task 2 to test user2',
          description: 'Task in progress added for test seeders and other behaviors',
          status: 'in progress',
          user_id: 2
        },
        {
          subject: 'Task 3 to test user2',
          description: 'Task done added for test seeders and other behaviors',
          status: 'done',
          user_id: 2
        },
        {
          subject: 'Task 1 to test user3',
          description: 'Task pending added for test seeders and other behaviors',
          status: 'pending',
          user_id: 3
        },
        {
          subject: 'Task 2 to test user3',
          description: 'Task in progress added for test seeders and other behaviors',
          status: 'in progress',
          user_id: 3
        },
        {
          subject: 'Task 3 to test user3',
          description: 'Task done added for test seeders and other behaviors',
          status: 'done',
          user_id: 3
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('todos', null, {});
  },
};
