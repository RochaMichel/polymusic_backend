import Sequelize, { Model } from "sequelize";
import Artista from "./artista";
import Etiqueta from "./etiqueta";
import Gravadora from "./gravadora";
import Tipos_de_tapes from "./tipos_de_tapes";

class Tapes extends Model {
  static init(sequelize) {
    super.init(
      {
        numero_tape: Sequelize.STRING,
        titulo: Sequelize.STRING,
        artista: Sequelize.INTEGER,
        gravadora: Sequelize.INTEGER,
        etiqueta: Sequelize.INTEGER,
        produtor_musical: Sequelize.STRING,
        tipo_tape: Sequelize.INTEGER,
        tipos_midia: Sequelize.STRING,
        stream: Sequelize.BOOLEAN,
        bloqueado: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "tapes",
      }
    );
  }
  static associate() {
    this.hasOne(Artista       ,  { foreignKey: 'id'    , sourceKey: 'artista'})
    this.hasOne(Etiqueta      ,  { foreignKey: 'id'    , sourceKey: 'etiqueta'})
    this.hasOne(Gravadora     ,  { foreignKey: 'id'    , sourceKey: 'gravadora'})
    this.hasOne(Tipos_de_tapes,  { foreignKey: 'id'    , sourceKey: 'tipo_tape'})
  }
}

export default Tapes;
