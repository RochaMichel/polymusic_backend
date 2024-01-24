import Sequelize, { Model } from "sequelize";

class Agregadores extends Model {
  static init(sequelize) {
    super.init(
      {
        nomeAgregadores: Sequelize.STRING,
        bloqueado: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "agregadores",
      }
    );
  }
  static associate() {
  }
}

export default Agregadores;
