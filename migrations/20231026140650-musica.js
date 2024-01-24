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
      faixa: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lado: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      musica: {
        type: Sequelize.STRING,
        allowNull: false
      },
      autor: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      genero: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      numero_tape: {
        type: Sequelize.String,
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
