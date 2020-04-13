'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { // create a new table called 'enhancements'
    return queryInterface.createTable('Enhancements', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      // TODO add extra fields as appropriate to match the enhancement form.
    });
  },
  down: (queryInterface, Sequelize) => { // drop table
    return queryInterface.dropTable('Enhancements');
  }
}
