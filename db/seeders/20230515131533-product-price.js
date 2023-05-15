'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
    //  Example:
     
    */
    await queryInterface.bulkInsert('Products', [{
      name: 'John Doe',
      price: 123123,
      description: 'asdasd',
      createdAt: Date(),
      updatedAt: Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
