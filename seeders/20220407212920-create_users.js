'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        first_name: 'Joao',
        last_name: 'Zinho',
        age: 18,
      },
      {
        first_name: 'Maria',
        last_name: 'Zinha',
        age: 22,
      },
      {
        first_name: 'Papai',
        last_name: 'Noel',
        age: 1300,
      }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users');
  }
};
