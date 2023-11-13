import Sequelize, { Model } from "sequelize";

class Etiqueta extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_etiqueta: Sequelize.STRING,
        bloqueado: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "etiqueta",
      }
    );
  }
  static associate() {
  }
}

export default Etiqueta;
