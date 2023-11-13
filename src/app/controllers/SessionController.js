import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario";
import authConfig from "../../config/auth";
import Sequelize from "sequelize";
import Perfil_acesso from "../models/perfil_acesso";

class SessionController {
  async store(req, res) {
    const password = req.body.password;
    const login = req.body.login;
    const userExist = await Usuario.findOne({include: [{ model: Perfil_acesso, }], where: { usuario: login } });
    var empresaVerif

    if (userExist) {
      const buff = Buffer.from(password);
      const senha = buff.toString("base64");
      const Op = Sequelize.Op;

      const auth = await Usuario.findOne({
        include: [{
          model: Perfil_acesso,
        }],
        where: {
          usuario: login,
          senha: senha,
          bloqueado: { [Op.ne]: "S" }
        },
      });

      if (!auth) {
        return res.status(401).json({ error: "Acesso negado" });
      }

    } else {
      return res.status(404).json({ error: "Usuário não existe" });
    }

    return res.json({
      usuario: {
        id: userExist.id,
        perfil_acesso: userExist.Perfil_acesso,
        usuario: login,
        nome: userExist.nome,
        empresa: userExist.empresa,
        tipoUsuario: userExist.tipo_usuario,
        tipoNegocio: empresaVerif && empresaVerif.tipo_negocio !== null ? empresaVerif.tipo_negocio : 0
      },
      token: jwt.sign({ codigo: userExist.id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
