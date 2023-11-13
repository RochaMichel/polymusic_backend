'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('perfil_acesso', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome_perfil: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      laltera_artistas: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lcria_artistas: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lexclui_artistas: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lvisualiza_artistas: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      laltera_editoras: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lcria_editoras: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lexclui_editoras: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lvisualiza_editoras: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      laltera_etiquetas: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lcria_etiquetas: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lexclui_etiquetas: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lvisualiza_etiquetas: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      laltera_gravadoras: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lcria_gravadoras: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lexclui_gravadoras: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lvisualiza_gravadoras: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      laltera_nomes: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lcria_nomes: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lexclui_nomes: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lvisualiza_nomes: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      laltera_tapes: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lcria_tapes: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lexclui_tapes: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lvisualiza_tapes: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      laltera_tipo_tapes: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lcria_tipo_tapes: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lexclui_tipo_tapes: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lvisualiza_tipo_tapes: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      laltera_usuario: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lcria_usuario: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lexclui_usuario: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lvisualiza_usuario: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      laltera_perfil_acesso: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lcria_perfil_acesso: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lexclui_perfil_acesso: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lvisualiza_perfil_acesso: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      laltera_musica: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lcria_musica: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lexclui_musica: {
        type:Sequelize.BOOLEAN,
        allowNull: true,
      },
      lvisualiza_musica: {
        type:Sequelize.BOOLEAN,
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
    return queryInterface.dropTable('perfil_acesso');
  }
}
