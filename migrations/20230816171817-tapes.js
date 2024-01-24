'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('tapes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      numero_tape: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      artista: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      gravadora: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      agregadores: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      etiqueta: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      produtor_musical: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_tape: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      stream: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      midiaDigital: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      not_stream: {
        type: Sequelize.BOOLEAN,
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
    return queryInterface.dropTable('tapes');
  }
}
