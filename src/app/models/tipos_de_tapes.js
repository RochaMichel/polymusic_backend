import Sequelize, { Model } from "sequelize";
import Detail from "./detail";

class Tipos_de_tapes extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: Sequelize.STRING,
        bloqueado: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "tipos_de_tapes",
      }
    );
  }
  static associate() {
    this.hasOne(Detail, { foreignKey: 'idTipoTape', sourceKey: 'id'})
  }
}

export default Tipos_de_tapes;
