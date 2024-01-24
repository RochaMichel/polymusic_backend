import Detail from "../models/detail";
import Tapes from "../models/tapes";
import Tipos_de_tapes from "../models/tipos_de_tapes"
import Sequelize from "sequelize";

class Tipos_de_tapesController {

  async get(req, res) {
    const tipos_de_tapes = await Tipos_de_tapes.findOne({
      where: { id: req.query.id }
    });
    if (tipos_de_tapes) {
      return res.status(200).json(tipos_de_tapes);
    } else {
      return res.status(404).json({ retorno: "Não foi encontrado Tipos_de_tapes com este código." });
    }
  }

  async delete(req, res) {
    const existe = await Tapes.findOne({
      where: { tipo_tape: req.query.id }
    });
    if (existe) {
      return res.status(400).json({ retorno: "Não é possível excluir tipo de tape já vinculado a um tape." })
    }
    await Tipos_de_tapes.update(
      { bloqueado: "S" },
      { where: { id: req.query.id } }
    ).catch(function (err) {
      return res.status(400).json({ retorno: "Falha ao excluir Tipos_de_tapes." });
    });
    return res.status(200).json({ retorno: "Tipos_de_tapes foi deletada com sucesso." });
  }

  async list(req, res) {
    const tapesLista = await Tipos_de_tapes.findAll({
      include: [{
        model: Detail,
      }],
      limit: 100,
    });
    if (tapesLista) {
      return res.status(200).json(tapesLista);
    } else {
      return res.status(404).json({ retorno: "Não foram encontrados usuários cadastrados." });
    }
  }

  async post(req, res) {
    const tipos_de_tapes = await Tipos_de_tapes.create(req.body.tipo_de_tapes)
    if (tipos_de_tapes) {
      for (let index = 0; index < req.body.detail.length; index++) {
        Detail.create({
          tipo: req.body.detail[index].tipo,
          idTipoTape: tipos_de_tapes.id
        });
      }
      return res.status(200).json({ retorno: 'Tipos_de_tapes incluida com sucesso' });
    } else {
      return res.status(400).json({ retorno: "Falha ao incluir tipos_de_tapes. " });
    }
  }

  async put(req, res) {
    const tipos_de_tapes = await Tipos_de_tapes.findOne({
      where: { id: req.body.tipo_de_tapes.id }
    });

    if (tipos_de_tapes) {
      await Detail.destroy({ where: { idTipoTape: tipos_de_tapes.id } })
      for (let index = 0; index < req.body.detail.length; index++) {
        Detail.create({
          tipo: req.body.detail[index].tipo,
          idTipoTape: tipos_de_tapes.id
        });
      }
      await Tipos_de_tapes.update(
        req.body,
        { where: { id: req.body.id } }
      ).catch(function (err) {
        return res.status(500).json({ retorno: "Falha ao atualizar o Tipos_de_tapes." });
      });

      return res.status(200).json({ retorno: "Tipos_de_tapes alterado com sucesso." });
    } else {
      return res.status(404).json({ retorno: "Tipos_de_tapes não encontrado." });
    }
  }

  async catch(req, res) {
    const Op = Sequelize.Op;
    let tipos_de_tapes = await Tipos_de_tapes.findAll({
      where: {
        descricao: {
          [Op.like]: req.query.tipos_de_tapes + '%'
        }
      }
    });
    if (tipos_de_tapes.length > 0) {
      return res.status(200).json(tipos_de_tapes);
    } else {
      let tipos_de_tapes = await Tipos_de_tapes.findAll({
        where: {
          id: req.query.tipos_de_tapes
        }
      });
      if (tipos_de_tapes) {
        return res.status(200).json(tipos_de_tapes);
      } else {
        return res.status(200).json({ status: false, mensagem: "Não foi possível realizar a pesquisa no banco." });
      }
    }
  }

}

export default new Tipos_de_tapesController();