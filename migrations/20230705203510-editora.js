'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('editora', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome_editora: { 
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
    return queryInterface.dropTable('editora');
  }
}
