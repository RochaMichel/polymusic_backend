import Agregadores from "../models/agregadores";
import Sequelize from "sequelize";
import Tapes from "../models/tapes";

class AgregadoresController {
 
  async get(req, res) {
    const agregadores = await Agregadores.findOne({
      where: { id: req.query.id }
    });
    if (agregadores) {
      return res.status(200).json(agregadores);
    } else {
      return res.status(404).json({ retorno: "Não foi encontrado Agregadores com este código." });
    }
  }

  async delete(req, res) {
    const existe = await Tapes.findOne({
      where: { agregadores: req.query.id }
    });
    if (existe) {
      return res.status(400).json({ retorno: "Não é possível excluir agregadores já vinculada a um tape."})
    }
    await Agregadores.update(
      {bloqueado: "S"},
      {where: { id: req.query.id }}
      ).catch(function (err) {
      return res.status(400).json({ retorno: "Falha ao excluir Agregadores." });
    });
    return res.status(200).json({ retorno: "Agregadores foi deletada com sucesso." });
  }

  async list(req, res) {
    const agregadoresLista = await Agregadores.findAll({
      limit: 100,
    });
    if (agregadoresLista) {
      return res.status(200).json(agregadoresLista);
    } else {
      return res.status(404).json({ retorno: "Não foram encontrados usuários cadastrados." });
    }
  }

  async post(req, res) {
    const agregadores = await Agregadores.create(req.body)
    if(agregadores) {
      return res.status(200).json({ retorno: 'Agregadores incluido com sucesso' });
        
      }else{
        return res.status(400).json({ retorno: "Falha ao incluir Agregadores. "});
  }
  }

  async put(req, res) {
    const agregadores = await Agregadores.findOne({
      where: { id: req.body.id }
    });
    if (agregadores) {
      await Agregadores.update(
        req.body,
        { where: { id: req.body.id } }
      ).catch(function (err) {
        return res.status(500).json({ retorno: "Falha ao atualizar o Agregadores." });
      });
      return res.status(200).json({ retorno: "Agregadores alterado com sucesso." });
    } else {
      return res.status(404).json({ retorno: "Agregadores não encontrado." });
    }
  }

  async catch(req, res) {
    const Op = Sequelize.Op;
      let agregadores = await Agregadores.findAll({
        where: {
          nomeAgregadores: {
            [Op.like]: req.query.agregador + '%'
          }
        }
      });
      if (agregadores.length > 0) {
        return res.status(200).json(agregadores);
      } else {
        let agregadores = await Agregadores.findAll({
          where: {
            id: req.query.agregador
          }
        });
        if (agregadores) {
          return res.status(200).json(agregadores);
        } else {
          return res.status(200).json({ status: false, mensagem: "Não foi possível realizar a pesquisa no banco." });
        }
      }
  }

}

export default new AgregadoresController();