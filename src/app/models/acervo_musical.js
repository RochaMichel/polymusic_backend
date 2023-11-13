import Sequelize, { Model } from "sequelize";
import Musica from '../models/musica'
import Tapes from '../models/tapes'

class Acervo_musical extends Model {
  static init(sequelize) {
    super.init(
      {
        id_musica: Sequelize.INTEGER,
        id_tape: Sequelize.INTEGER,
        faixa: Sequelize.STRING,
        bloqueado: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "acervo_musical",
      }
    );
  }
  static associate() {
    this.hasOne(Musica       ,  { foreignKey: 'id'   , sourceKey: 'id_musica'})
    this.hasOne(Tapes       ,  { foreignKey: 'id'   , sourceKey: 'id_tape'})
  }
}

export default Acervo_musical;