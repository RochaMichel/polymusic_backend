import Sequelize, { Model } from "sequelize";

class Detail extends Model {
  static init(sequelize) {
    super.init(
      {
        idTipoTape: Sequelize.INTEGER,
        tipo: Sequelize.STRING,
        bloqueado: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "detail",
      }
    );
  }
  static associate() {
    
  }
}

export default Detail;
