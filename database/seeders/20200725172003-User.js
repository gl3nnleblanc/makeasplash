'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
     await queryInterface.bulkInsert('Users', [
        {
          id: 1,
          name: 'XxxJohn_DoexxX',
          email: 'johndoe@john.doe',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          username: 'Alice_Bobson',
          password: 'haha xp'
          createdAt: new Date(),
          updatedAt: new Date(),
        }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
