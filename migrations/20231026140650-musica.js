'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('musica', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      musica: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Album: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ano: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      editora: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      bloqueado: {
        type:Sequelize.STRING,
        allowNull: false,
        defaultValue: "N"
      }
    });

  },

  down: (queryInterface) => {
    return queryInterface.dropTable('musica');
  }
}
