import Usuario from "../models/Usuario";
import Perfil_acesso from "../models/perfil_acesso";
import Sequelize from "sequelize";

class UsuarioController {
 
  async get(req, res) {
    const usuario = await Usuario.findOne({
      where: { id: req.query.id }
    });
    if (usuario) {
      return res.status(200).json(usuario);
    } else {
      return res.status(404).json({ retorno: "Não foi encontrado usuario com este código." });
    }
  }

  async delete(req, res) {
    await Usuario.update(
      {bloqueado: "S"},
      {where: { id: req.query.id }}
      ).catch(function (err) {
      return res.status(400).json({ retorno: "Falha ao excluir usuario." });
    });
    return res.status(200).json({ retorno: "Usuário foi deletado com sucesso." });
  }

  async list(req, res) {
    const UsuarioLista = await Usuario.findAll({
      limit: 100,
      include: [{
        model: Perfil_acesso,
      }],
    });
    if (UsuarioLista) {
      return res.status(200).json(UsuarioLista);
    } else {
      return res.status(404).json({ retorno: "Não foram encontrados usuários cadastrados." });
    }
  }

  async post(req, res) {
    req.body.senha = btoa(req.body.senha);
    const usuario = await Usuario.create(req.body)
    if(usuario) {
      return res.status(200).json({ retorno: 'usuario incluido com sucesso' });
        
      }else{
        return res.status(400).json({ retorno: "Falha ao incluir usuario. "});
  }
  }

  async put(req, res) {
    req.body.senha = btoa(req.body.senha);
    const usuario = await Usuario.findOne({
      where: { id: req.body.id }
    });
    if (usuario) {
      await Usuario.update(
        req.body,
        { where: { id: req.body.id } }
      ).catch(function (err) {
        return res.status(500).json({ retorno: "Falha ao atualizar o usuario." });
      });
      return res.status(200).json({ retorno: "Usuario alterado com sucesso." });
    } else {
      return res.status(404).json({ retorno: "Usuario não encontrado." });
    }
  }

  async catch(req, res) {
    const Op = Sequelize.Op;
      let usuario = await Usuario.findAll({
        include: [{
          model: Perfil_acesso,
        }],
        where: {
          usuario: {
            [Op.like]: req.query.usuario + '%'
          }
        }
      });
      if (usuario.length > 0) {
        return res.status(200).json(usuario);
      } else {
        let usuario = await Usuario.findAll({
          include: [{
            model: Perfil_acesso,
          }],
          where: {
            id: req.query.usuario
          }
        });
        if (usuario) {
          return res.status(200).json(usuario);
        } else {
          return res.status(200).json({ status: false, mensagem: "Não foi possível realizar a pesquisa no banco." });
        }
      }
  }

}

export default new UsuarioController();