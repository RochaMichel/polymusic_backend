import Sequelize, { Model } from "sequelize";
import Perfil_acesso from "./perfil_acesso";

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        usuario: Sequelize.STRING,
        nome: Sequelize.STRING,
        senha: Sequelize.STRING,
        email: Sequelize.STRING,
        cpf: Sequelize.STRING,
        perfil_acesso: Sequelize.INTEGER,
        telefone_comercial: Sequelize.STRING,
        telefone_celular: Sequelize.STRING,
        site: Sequelize.STRING,
        cep: Sequelize.STRING,
        logradouro: Sequelize.STRING,
        numero: Sequelize.STRING,
        complemento: Sequelize.STRING,
        bairro: Sequelize.STRING,
        uf: Sequelize.STRING,
        cidade: Sequelize.STRING,
        bloqueado: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "usuario",
      }
    );
  }
  static associate() {
    this.hasOne(Perfil_acesso, { foreignKey: 'id', sourceKey: 'perfil_acesso'})
  }
}

export default Usuario;
