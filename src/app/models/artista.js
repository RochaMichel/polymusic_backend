import Sequelize, { Model } from "sequelize";

class Artista extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_civil: Sequelize.STRING,
        pseudonimo: Sequelize.STRING,
        endereco: Sequelize.STRING,
        bairro: Sequelize.STRING,
        complemento: Sequelize.STRING,
        cidade: Sequelize.STRING,
        uf: Sequelize.STRING,
        cep: Sequelize.STRING,
        telefone: Sequelize.STRING,
        cpf: Sequelize.STRING,
        conta_corrente: Sequelize.STRING,
        bloqueado: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "artista",
      }
    );
  }
  static associate() {
  }
}

export default Artista;
