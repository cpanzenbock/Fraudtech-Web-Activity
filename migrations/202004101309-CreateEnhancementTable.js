'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { // create a new table called 'request'
    return queryInterface.createTable('requests', {
      requestID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      user: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      feature: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      stakeholders: {
        allowNull: true,
        type: Sequelize.STRING(4096),
      },
      engagements: {
        allowNull: true,
        type: Sequelize.STRING(4096),
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(4096),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      usageNumbers: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      // TODO add field for attachments
    });
  },
  down: (queryInterface, Sequelize) => { // drop table
    return queryInterface.dropTable('requests');
  }
}
