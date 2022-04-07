'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'first_name'
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'last_name'
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    }), { timestamps: false }},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users')
  }
};
