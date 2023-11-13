import Editora from "../models/editora";
import Sequelize from "sequelize";

class ArtistaController {
 
  async get(req, res) {
    const editora = await Editora.findOne({
      where: { id: req.query.id }
    });
    if (editora) {
      return res.status(200).json(editora);
    } else {
      return res.status(404).json({ retorno: "Não foi encontrado Editora com este código." });
    }
  }

  async delete(req, res) {
    await Editora.update(
      {bloqueado: "S"},
      {where: { id: req.query.id }}
      ).catch(function (err) {
      return res.status(400).json({ retorno: "Falha ao excluir Editora." });
    });
    return res.status(200).json({ retorno: "Editoras foi deletado com sucesso." });
  }

  async list(req, res) {
    const editoraLista = await Editora.findAll({limit: 100,});
    if (editoraLista) {
      return res.status(200).json(editoraLista);
    } else {
      return res.status(404).json({ retorno: "Não foram encontrados Editorass cadastrados." });
    }
  }

  async post(req, res) {
    const editora = await Editora.create(req.body)
    if(editora) {
      return res.status(200).json({ retorno: 'Editora incluido com sucesso' });
        
      }else{
        return res.status(400).json({ retorno: "Falha ao incluir Editora. "});
  }
  }

  async put(req, res) {
    const editora = await Editora.findOne({
      where: { id: req.body.id }
    });
    if (editora) {
      await Editora.update(
        req.body,
        { where: { id: req.body.id } }
      ).catch(function (err) {
        return res.status(500).json({ retorno: "Falha ao atualizar o Editora." });
      });
      return res.status(200).json({ retorno: "Editora alterado com sucesso." });
    } else {
      return res.status(404).json({ retorno: "Editora não encontrado." });
    }
  }

  async catch(req, res) {
    const Op = Sequelize.Op;
      let editora = await Editora.findAll({
        limit: 100,
        where: {
          nome_editora: {
            [Op.like]: req.query.editora + '%'
          }
        }
      });
      if (editora.length > 0) {
        return res.status(200).json(editora);
      } else {
        let editora = await Editora.findAll({
          limit: 100,
          where: {
            id: req.query.editora
          }
        });
        if (editora) {
          return res.status(200).json(editora);
        } else {
          return res.status(200).json({ status: false, mensagem: "Não foi possível realizar a pesquisa no banco." });
        }
      }
  }

}

export default new ArtistaController();