import Gravadora from "../models/gravadora"
import Sequelize from "sequelize";
import Tapes from "../models/tapes";
class GravadoraController {
 
  async get(req, res) {
    const gravadora = await Gravadora.findOne({
      where: { id: req.query.id }
    });
    if (gravadora) {
      return res.status(200).json(gravadora);
    } else {
      return res.status(404).json({ retorno: "Não foi encontrado Gravadora com este código." });
    }
  }

  async delete(req, res) {
    const existe = await Tapes.findOne({
      where: { gravadora: req.query.id }
    });
    if (existe) {
      return res.status(400).json({ retorno: "Não é possível excluir a gravadora já vinculada a um tape."})
    }
    await await Gravadora.update(
      {bloqueado: "S"},
      {where: { id: req.query.id }}
      ).catch(function (err) {
      return res.status(400).json({ retorno: "Falha ao excluir Gravadora." });
    });
    return res.status(200).json({ retorno: "Gravadora foi deletada com sucesso." });
  }

  async list(req, res) {
    const gravadoraLista = await Gravadora.findAll({
      limit: 100,
    });
    if (gravadoraLista) {
      return res.status(200).json(gravadoraLista);
    } else {
      return res.status(404).json({ retorno: "Não foram encontrados usuários cadastrados." });
    }
  }

  async post(req, res) {
    const gravadora = await Gravadora.create(req.body)
    if(gravadora) {
      return res.status(200).json({ retorno: 'Gravadora incluida com sucesso' }); 
      }else{
        return res.status(400).json({ retorno: "Falha ao incluir gravadora. "});
  }
  }

  async put(req, res) {
    const gravadora = await Gravadora.findOne({
      where: { id: req.body.id }
    });
    if (gravadora) {
      await Gravadora.update(
        req.body,
        { where: { id: req.body.id } }
      ).catch(function (err) {
        return res.status(500).json({ retorno: "Falha ao atualizar o Gravadora." });
      });
      return res.status(200).json({ retorno: "Gravadora alterado com sucesso." });
    } else {
      return res.status(404).json({ retorno: "Gravadora não encontrado." });
    }
  }

  async catch(req, res) {
    const Op = Sequelize.Op;
      let gravadora = await Gravadora.findAll({
        where: {
          nome_gravadora: {
            [Op.like]: req.query.gravadora + '%'
          }
        }
      });
      if (gravadora.length > 0) {
        return res.status(200).json(gravadora);
      } else {
        let gravadora = await Gravadora.findAll({
          where: {
            id: req.query.gravadora
          }
        });
        if (gravadora) {
          return res.status(200).json(gravadora);
        } else {
          return res.status(200).json({ status: false, mensagem: "Não foi possível realizar a pesquisa no banco." });
        }
      }
  }

}

export default new GravadoraController();