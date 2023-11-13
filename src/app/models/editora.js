import Sequelize, { Model } from "sequelize";

class Editora extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_editora: Sequelize.STRING,
        bloqueado: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "editora",
      }
    );
  }
  static associate() {
  }
}

export default Editora;
