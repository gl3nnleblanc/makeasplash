'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
    */
     await queryInterface.bulkInsert('Events', [{
         id: 1,
         name: 'Sleepover at Josh\'s house',
         description: 'LEts get shmoozed xd',
         date: new Date(),
         createDate: new Date(),
         createdAt: new Date(),
         updatedAt: new Date(),
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
