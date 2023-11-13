import Sequelize, { Model } from "sequelize";

class Tipos_de_tapes extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: Sequelize.STRING,
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
  }
}

export default Tipos_de_tapes;
