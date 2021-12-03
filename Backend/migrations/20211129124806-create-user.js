'use strict';
module.exports = {
  up: async (queryInterface, DATATYPES) => {
    await queryInterface.createTable('Userinfo', {
      userId: {
        type: DATATYPES.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
      username: {
        type: DATATYPES.STRING,
        allowNull: false
      },
      user_mail: {
        type: DATATYPES.STRING,
        allowNull: false
      },
      password: {
        type: DATATYPES.STRING,
        allowNull: false
      },
      phone_no: {
        type: DATATYPES.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: DATATYPES.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DATATYPES.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Userinfo');
  }
};