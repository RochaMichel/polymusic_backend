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
      percentual_artistico: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      novo_numero: {
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
      data_lancamento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stream: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      smi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      prateleira: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
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
    return queryInterface.dropTable('tapes');
  }
}
