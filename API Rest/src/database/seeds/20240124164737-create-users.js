const bcryptjs = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'seed test',
      email: 'seedtest@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'seed test 2',
      email: 'seedtest2@gmail.com',
      password_hash: await bcryptjs.hash('654321', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'seed test 3',
      email: 'seedtest3@gmail.com',
      password_hash: await bcryptjs.hash('333333', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }
    ], {});
  },

  async down() { }
};
