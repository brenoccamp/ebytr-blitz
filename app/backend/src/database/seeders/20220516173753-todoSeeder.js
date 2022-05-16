module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          subject: 'Task 1 to test user1',
          description: 'Task pending added for test seeders and other behaviors',
          status: 'pending',
          userId: 1
        },
        {
          subject: 'Task 2 to test user1',
          description: 'Task in progress added for test seeders and other behaviors',
          status: 'in progress',
          userId: 1
        },
        {
          subject: 'Task 3 to test user1',
          description: 'Task done added for test seeders and other behaviors',
          status: 'done',
          userId: 1
        },
        {
          subject: 'Task 1 to test user2',
          description: 'Task pending added for test seeders and other behaviors',
          status: 'pending',
          userId: 2
        },
        {
          subject: 'Task 2 to test user2',
          description: 'Task in progress added for test seeders and other behaviors',
          status: 'in progress',
          userId: 2
        },
        {
          subject: 'Task 3 to test user2',
          description: 'Task done added for test seeders and other behaviors',
          status: 'done',
          userId: 2
        },
        {
          subject: 'Task 1 to test user3',
          description: 'Task pending added for test seeders and other behaviors',
          status: 'pending',
          userId: 3
        },
        {
          subject: 'Task 2 to test user3',
          description: 'Task in progress added for test seeders and other behaviors',
          status: 'in progress',
          userId: 3
        },
        {
          subject: 'Task 3 to test user3',
          description: 'Task done added for test seeders and other behaviors',
          status: 'done',
          userId: 3
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
