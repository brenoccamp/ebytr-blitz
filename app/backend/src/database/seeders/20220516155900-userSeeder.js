module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'User_1',
          email: 'user1@user.com',
          password: '$2a$12$tjQRHwdhnh8tCv9su.drqeGX/YNqWJJiP.EIpmtbeg6hy5XlxyK2S' //user1_password
        },
        {
          username: 'User_2',
          email: 'user2@user.com',
          password: '$2a$12$pghOXshitwOg/PuIJjCS2ugrWUmcd4dKVYtuJCvo1pnxQ08ZbR/Na' //user2_password
        },
        {
          username: 'User_2',
          email: 'user3@user.com',
          password: '$2a$12$M4YCleJsD/V6Fd0w8U2Snexh7sy41z9A2.Vpmhrorp9ZCVWgN.liK' //user3_password
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
