'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('acervo_musical', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_musica: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_tape: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      faixa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bloqueado: {
        type:Sequelize.STRING,
        allowNull: false,
        defaultValue: "N"
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('acervo_musical');
  }
}
