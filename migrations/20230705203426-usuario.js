'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('usuario', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      usuario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cpf: {
        type:Sequelize.STRING,
        allowNull: true,
      },
      perfil_acesso: {
        type:Sequelize.INTEGER,
        allowNull: true,
      },
      telefone_comercial: {
        type:Sequelize.STRING,
        allowNull: true,
      },
      telefone_celular: {
        type:Sequelize.STRING,
        allowNull: true,
      },
      site: {
        type:Sequelize.STRING,
        allowNull: true,
      },
      cep: {
        type:Sequelize.STRING,
        allowNull: true,
      },
      logradouro: {
        type:Sequelize.STRING,
        allowNull: true,
      },
      numero: {
        type:Sequelize.STRING,
        allowNull: true,
      },
      complemento: {
        type:Sequelize.STRING,
        allowNull: true,
      },
      bairro: {
        type:Sequelize.STRING,
        allowNull: true,
      },
      uf: {
        type:Sequelize.STRING,
        allowNull: true,
      },
      cidade: {
        type:Sequelize.STRING,
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
    return queryInterface.dropTable('usuario');
  }
}
