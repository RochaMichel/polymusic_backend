import Acervo_musical from "../models/acervo_musical";
import Artista from "../models/artista";
import Etiqueta from "../models/etiqueta";
import Gravadora from "../models/gravadora";
import Tapes from "../models/tapes";
import Tipos_de_tapes from "../models/tipos_de_tapes";
import Sequelize from "sequelize";

class TapeController {

  async get(req, res) {
    const tapes = await Tapes.findOne({
      where: { id: req.query.id }
    });
    if (tapes) {
      return res.status(200).json(tapes);
    } else {
      return res.status(404).json({ retorno: "Não foi encontrado Tapes com este código." });
    }
  }

  async delete(req, res) {
    const tapes = await Tapes.update(
      { bloqueado: "S" },
      { where: { id: req.query.id } });
    if (tapes) {
      const acervo_musical = await Acervo_musical.findAll({
        where: { id_tape: req.query.id }
      });
      if (acervo_musical) {
        for (let index = 0; index < acervo_musical.length; index++) {
          console.log(acervo_musical)
          await Acervo_musical.update(
            { bloqueado: "S" },
            { where: { id: acervo_musical[index].id } });
        }
        return res.status(200).json({ retorno: "Tapes foi deletado com sucesso." });
      }
    } else {
      return res.status(400).json({ retorno: "Falha ao excluir Tapes." });
    }
  }
  async list(req, res) {
    const tapesLista = await Tapes.findAll({
      limit: 100,
      include: [{
        model: Tipos_de_tapes,
      }],
    });
    if (tapesLista) {
      return res.status(200).json(tapesLista);
    } else {
      return res.status(404).json({ retorno: "Não foram encontrados usuários cadastrados." });
    }
  }


  async post(req, res) {
    const tapes = await Tapes.create(req.body.tape)
    if (tapes) {
      for (let index = 0; index < req.body.acervo_musical.length; index++) {
        await Acervo_musical.create(
          {
            id_musica: req.body.acervo_musical[index].id,
            id_tape: tapes.id,
            faixa: 1 + index.toString()
          });
      }
      return res.status(200).json({ retorno: 'Tapes incluido com sucesso' });
    } else {
      return res.status(400).json({ retorno: "Falha ao incluir Tapes. " });
    }
  }

  async put(req, res) {
    const tapes = await Tapes.findOne({
      where: { id: req.body.tape.id }
    });
    if (tapes) {
    await Tapes.update(
      req.body.tape,
      { where: { id: tapes.id } }
    );
    await Acervo_musical.destroy({
      where: { id_tape: tapes.id }
    });
    for (let index = 0; index < req.body.acervo_musical.length; index++) {
      await Acervo_musical.create(
        {
          id_musica: req.body.acervo_musical[index].id,
          id_tape: tapes.id,
          faixa: 1 + index.toString()
        });
    }
    return res.status(200).json({ retorno: 'Tapes alterado com sucesso' });
    } else {
      return res.status(404).json({ retorno: "Erro a alterar o tape." });
    }
  }


  async catch(req, res) {
    const Op = Sequelize.Op;
    let tapes = await Tapes.findAll({
      limit: 100,
      include: [{
        model: Tipos_de_tapes,
      }],
      where: {
        titulo: {
          [Op.like]: req.query.tapes + '%'
        }
      }
    });
    if (tapes.length > 0) {
      return res.status(200).json(tapes);
    } else {
      let tapes = await Tapes.findAll({
        limit: 100,
        include: [{
          model: Tipos_de_tapes,
        }],
        where: {
          id: req.query.tapes
        }
      });
      if (tapes) {
        return res.status(200).json(tapes);
      } else {
        return res.status(200).json({ status: false, mensagem: "Não foi possível realizar a pesquisa no banco." });
      }
    }
  }

}

export default new TapeController();