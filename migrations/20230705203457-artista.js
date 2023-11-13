'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('artista', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome_civil: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pseudonimo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complemento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      conta_corrente: {
        type: Sequelize.STRING,
        allowNull: false,
      },bloqueado: {
        type:Sequelize.STRING,
        allowNull: false,
        defaultValue: "N"
      } 
    });

  },

  down: (queryInterface) => {
    return queryInterface.dropTable('artista');
  }
}
