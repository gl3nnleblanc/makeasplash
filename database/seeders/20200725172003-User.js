'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
     await queryInterface.bulkInsert('People', [
        {
          name: 'John Doe',
          email: 'jdoe@com.com
        },
        {
          name: 'Alice Bobson',
          email: 'abobson@pudl.com
        }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('People', null, {});
  }
};
