import Etiqueta from "../models/etiqueta";
import Sequelize from "sequelize";
import Tapes from "../models/tapes";

class EtiquetaController {
 
  async get(req, res) {
    const etiqueta = await Etiqueta.findOne({
      where: { id: req.query.id }
    });
    if (etiqueta) {
      return res.status(200).json(etiqueta);
    } else {
      return res.status(404).json({ retorno: "Não foi encontrado Etiqueta com este código." });
    }
  }

  async delete(req, res) {
    const existe = await Tapes.findOne({
      where: { etiqueta: req.query.id }
    });
    if (existe) {
      return res.status(400).json({ retorno: "Não é possível excluir etiqueta já vinculada a um tape."})
    }
    await Etiqueta.update(
      {bloqueado: "S"},
      {where: { id: req.query.id }}
      ).catch(function (err) {
      return res.status(400).json({ retorno: "Falha ao excluir Etiqueta." });
    });
    return res.status(200).json({ retorno: "Etiqueta foi deletada com sucesso." });
  }

  async list(req, res) {
    const etiquetaLista = await Etiqueta.findAll({
      limit: 100,
    });
    if (etiquetaLista) {
      return res.status(200).json(etiquetaLista);
    } else {
      return res.status(404).json({ retorno: "Não foram encontrados usuários cadastrados." });
    }
  }

  async post(req, res) {
    const etiqueta = await Etiqueta.create(req.body)
    if(etiqueta) {
      return res.status(200).json({ retorno: 'Etiqueta incluido com sucesso' });
        
      }else{
        return res.status(400).json({ retorno: "Falha ao incluir Etiqueta. "});
  }
  }

  async put(req, res) {
    const etiqueta = await Etiqueta.findOne({
      where: { id: req.body.id }
    });
    if (etiqueta) {
      await Etiqueta.update(
        req.body,
        { where: { id: req.body.id } }
      ).catch(function (err) {
        return res.status(500).json({ retorno: "Falha ao atualizar o Etiqueta." });
      });
      return res.status(200).json({ retorno: "Etiqueta alterado com sucesso." });
    } else {
      return res.status(404).json({ retorno: "Etiqueta não encontrado." });
    }
  }

  async catch(req, res) {
    const Op = Sequelize.Op;
      let etiqueta = await Etiqueta.findAll({
        where: {
          nome_etiqueta: {
            [Op.like]: req.query.etiqueta + '%'
          }
        }
      });
      if (etiqueta.length > 0) {
        return res.status(200).json(etiqueta);
      } else {
        let etiqueta = await Etiqueta.findAll({
          where: {
            id: req.query.etiqueta
          }
        });
        if (etiqueta) {
          return res.status(200).json(etiqueta);
        } else {
          return res.status(200).json({ status: false, mensagem: "Não foi possível realizar a pesquisa no banco." });
        }
      }
  }

}

export default new EtiquetaController();