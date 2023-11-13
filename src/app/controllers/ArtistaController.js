import Artista from "../models/artista";
import Sequelize from "sequelize";
import Tapes from "../models/tapes";

class ArtistaController {
 
  async get(req, res) {
    const artista = await Artista.findOne({
      where: { id: req.query.id }
    });
    if (artista) {
      return res.status(200).json(artista);
    } else {
      return res.status(404).json({ retorno: "Não foi encontrado Artista com este código." });
    }
  }

  async delete(req, res) {
    const existe = await Tapes.findOne({
      where: { artista: req.query.id }
    });
    if (existe) {
      return res.status(400).json({ retorno: "Não é possível excluir o artista já vinculado a um tape."})
    }
    await Artista.update(
      {bloqueado: "S"},
      {where: { id: req.query.id }}
      ).catch(function (err) {
      return res.status(400).json({ retorno: "Falha ao excluir Artista." });
    });
    return res.status(200).json({ retorno: "Usuário foi deletado com sucesso." });
  }

  async list(req, res) {
    const artistaLista = await Artista.findAll({
      limit: 100,
    });
    if (artistaLista) {
      return res.status(200).json(artistaLista);
    } else {
      return res.status(404).json({ retorno: "Não foram encontrados usuários cadastrados." });
    }
  }

  async post(req, res) {
    const artista = await Artista.create(req.body)
    if(artista) {
      return res.status(200).json({ retorno: 'Artista incluido com sucesso' });
        
      }else{
        return res.status(400).json({ retorno: "Falha ao incluir Artista. "});
  }
  }

  async put(req, res) {
    const artista = await Artista.findOne({
      where: { id: req.body.id }
    });
    if (artista) {
      await Artista.update(
        req.body,
        { where: { id: req.body.id } }
      ).catch(function (err) {
        return res.status(500).json({ retorno: "Falha ao atualizar o Artista." });
      });
      return res.status(200).json({ retorno: "Artista alterado com sucesso." });
    } else {
      return res.status(404).json({ retorno: "Artista não encontrado." });
    }
  }

  async catch(req, res) {
    const Op = Sequelize.Op;
      let artista = await Artista.findAll({
        limit: 100,
        where: {
          nome_civil: {
            [Op.like]: req.query.artista + '%'
          }
        }
      });
      if (artista.length > 0) {
        return res.status(200).json(artista);
      } else {
        let artista = await Artista.findAll({
          limit: 100,
          where: {
            id: req.query.artista
          }
        });
        if (artista) {
          return res.status(200).json(artista);
        } else {
          return res.status(200).json({ status: false, mensagem: "Não foi possível realizar a pesquisa no banco." });
        }
      }
  }

}

export default new ArtistaController();