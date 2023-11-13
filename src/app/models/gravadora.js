import Sequelize, { Model } from "sequelize"; 

class Gravadora extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_gravadora: Sequelize.STRING,
        bloqueado: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "gravadora",
      }
    );
  }
  static associate() {
    
  }
}

export default Gravadora;
