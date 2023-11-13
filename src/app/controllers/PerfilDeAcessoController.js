import Perfil_acesso from "../models/perfil_acesso";
import Sequelize from "sequelize";

class PerfilDeAcessoController {
 
  async get(req, res) {
    const perfil_acesso = await Perfil_acesso.findOne({
      where: { id: req.query.id }
    });
    if (perfil_acesso) {
      return res.status(200).json(perfil_acesso);
    } else {
      return res.status(404).json({ retorno: "Não foi encontrado perfil_acesso com este código." });
    } 
  }

  async delete(req, res) {
    await Perfil_acesso.update(
      {bloqueado: "S"},
      {where: { id: req.query.id }}
      ).catch(function (err) {
      return res.status(400).json({ retorno: "Falha ao excluir perfil_acesso." });
    });
    return res.status(200).json({ retorno: "Usuário foi deletado com sucesso." });
  }

  async list(req, res) {
    const perfil_acessoLista = await Perfil_acesso.findAll({
      limit: 100,
    });
    if (perfil_acessoLista) {
      return res.status(200).json(perfil_acessoLista);
    } else {
      return res.status(404).json({ retorno: "Não foram encontrados usuários cadastrados." });
    }
  }

  async post(req, res) {
    const perfil_acesso = await Perfil_acesso.create(req.body)
    if(perfil_acesso) {
      return res.status(200).json({ retorno: 'perfil_acesso incluido com sucesso' });
        
      }else{
        return res.status(400).json({ retorno: "Falha ao incluir perfil_acesso. "});
  }
  }

  async put(req, res) {
    const perfil_acesso = await Perfil_acesso.findOne({
      where: { id: req.body.id }
    });
    if (perfil_acesso) {
      await Perfil_acesso.update(
        req.body,
        { where: { id: req.body.id } }
      ).catch(function (err) {
        return res.status(500).json({ retorno: "Falha ao atualizar o perfil_acesso." });
      });
      return res.status(200).json({ retorno: "perfil_acesso alterado com sucesso." });
    } else {
      return res.status(404).json({ retorno: "perfil_acesso não encontrado." });
    }
  }

  async catch(req, res) {
    const Op = Sequelize.Op;
      let perfil_acesso = await Perfil_acesso.findAll({
        where: {
          nome_perfil: {
            [Op.like]: req.query.perfil_acesso + '%'
          }
        }
      });
      if (perfil_acesso.length > 0) {
        return res.status(200).json(perfil_acesso);
      } else {
        let perfil_acesso = await Perfil_acesso.findAll({
          where: {
            id: req.query.perfil_acesso
          }
        });
        if (perfil_acesso) {
          return res.status(200).json(perfil_acesso);
        } else {
          return res.status(200).json({ status: false, mensagem: "Não foi possível realizar a pesquisa no banco." });
        }
      }
  }

}

export default new PerfilDeAcessoController();