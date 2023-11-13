import Sequelize, { Model } from "sequelize";
import Editora from '../models/editora'

class Musica extends Model {
  static init(sequelize) {
    super.init(
      {
        musica: Sequelize.STRING,
        album: Sequelize.STRING,
        ano: Sequelize.DATE,
        categoria: Sequelize.STRING,
        editora: Sequelize.INTEGER,
        bloqueado: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "musica",
      }
    );
  }
  static associate() {
    this.hasOne(Editora       ,  { foreignKey: 'id'   , sourceKey: 'editora'})
  }
}

export default Musica;