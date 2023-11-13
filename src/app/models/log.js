import Sequelize, { Model } from "sequelize";

class Log extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao_log: Sequelize.STRING,
        data_log: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "log",
      }
    );
  }
  static associate() {
  }
}

export default Log;
