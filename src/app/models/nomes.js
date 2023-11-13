import Sequelize, { Model } from "sequelize";

class Nomes extends Model {
  static init(sequelize) {
    super.init(
      {
        funcao: Sequelize.STRING,
        nome: Sequelize.STRING,
        bloqueado: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "nomes",
      }
    );
  }
  static associate() {
  }
}

export default Nomes;
