'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('log', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      descricao_log: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_log: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bloqueado: {
        type:Sequelize.STRING,
        allowNull: false,
        defaultValue: "N"
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('log');
  }
}
