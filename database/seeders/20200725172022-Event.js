'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
    */
     await queryInterface.bulkInsert('Events', [{
         name: 'Sleepover at Josh\'s house',
         description: "lets play some scrabble!!!",
         date: new Date(),
         createDate: new Date(),
         userId: 1,
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
