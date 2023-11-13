import Sequelize, { Model } from "sequelize";


class Perfil_acesso extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_perfil: Sequelize.STRING,
        laltera_artistas: Sequelize.BOOLEAN,
        lcria_artistas: Sequelize.BOOLEAN,
        lexclui_artistas: Sequelize.BOOLEAN,
        lvisualiza_artistas: Sequelize.BOOLEAN,
        laltera_etiquetas: Sequelize.BOOLEAN,
        lcria_etiquetas: Sequelize.BOOLEAN,
        lexclui_etiquetas: Sequelize.BOOLEAN,
        lvisualiza_etiquetas: Sequelize.BOOLEAN,
        laltera_editoras: Sequelize.BOOLEAN,
        lcria_editoras: Sequelize.BOOLEAN,
        lexclui_editoras: Sequelize.BOOLEAN,
        lvisualiza_editoras: Sequelize.BOOLEAN,
        laltera_gravadoras: Sequelize.BOOLEAN,
        lcria_gravadoras: Sequelize.BOOLEAN,
        lexclui_gravadoras: Sequelize.BOOLEAN,
        lvisualiza_gravadoras: Sequelize.BOOLEAN,
        laltera_nomes: Sequelize.BOOLEAN,
        lcria_nomes: Sequelize.BOOLEAN,
        lexclui_nomes: Sequelize.BOOLEAN,
        lvisualiza_nomes: Sequelize.BOOLEAN,
        laltera_tapes: Sequelize.BOOLEAN,
        lcria_tapes: Sequelize.BOOLEAN,
        lexclui_tapes: Sequelize.BOOLEAN,
        lvisualiza_tapes: Sequelize.BOOLEAN,
        laltera_tipo_tapes: Sequelize.BOOLEAN,
        lcria_tipo_tapes: Sequelize.BOOLEAN,
        lexclui_tipo_tapes: Sequelize.BOOLEAN,
        lvisualiza_tipo_tapes: Sequelize.BOOLEAN,
        laltera_usuario: Sequelize.BOOLEAN,
        lcria_usuario: Sequelize.BOOLEAN,
        lexclui_usuario: Sequelize.BOOLEAN,
        lvisualiza_usuario: Sequelize.BOOLEAN,
        laltera_perfil_acesso: Sequelize.BOOLEAN,
        lcria_perfil_acesso: Sequelize.BOOLEAN,
        lexclui_perfil_acesso: Sequelize.BOOLEAN,
        lvisualiza_perfil_acesso: Sequelize.BOOLEAN,
        laltera_musica: Sequelize.BOOLEAN,
        lcria_musica: Sequelize.BOOLEAN,
        lexclui_musica: Sequelize.BOOLEAN,
        lvisualiza_musica: Sequelize.BOOLEAN,
        bloqueado: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "perfil_acesso",
      }
    );
  }
  static associate() {
    
  }
}

export default Perfil_acesso;
