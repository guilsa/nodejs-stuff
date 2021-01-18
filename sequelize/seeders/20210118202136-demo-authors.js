'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

   await queryInterface.bulkInsert('Authors', [{
     firstName: 'Bhaskar',
     lastName: 'Sunkara',
     avatarUrl: 'https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/okqmq9d38hg5e016hl5p9n25hb._US230_.jpg',
     createdAt: new Date(),
     updatedAt: new Date(),
    }])
    
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
