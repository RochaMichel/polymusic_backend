'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('gravadora', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome_gravadora: {
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
    return queryInterface.dropTable('gravadora');
  }
}
