import Sequelize, { Model } from "sequelize";
import Editora from '../models/editora'
import Tapes from "./tapes";

class Musica extends Model {
  static init(sequelize) {
    super.init(
      {
        musica: Sequelize.STRING,
        autor: Sequelize.STRING,
        faixa: Sequelize.STRING,
        lado: Sequelize.STRING,
        genero: Sequelize.STRING,
        numero_tape: Sequelize.STRING,
        bloqueado: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "musica",
      }
    );
  }
  static associate() {
    this.hasOne(Tapes       ,  { foreignKey: 'numero_tape'   , sourceKey: 'numero_tape'})
  }
}

export default Musica;