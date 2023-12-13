import Acervo_musical from "../models/acervo_musical";
import Artista from "../models/artista";
import Etiqueta from "../models/etiqueta";
import Gravadora from "../models/gravadora";
import Musica from "../models/musica";
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
  async busca(req, res) {
    const existTape = await Tapes.findOne({ where: { numero_tape: req.query.tapes } });
    if (existTape) {
      return res.status(400).json({ retorno: "Tape ja existe altere o codigo" });
    } else {
      return res.status(200).json({ retorno: '' })
    }
  }
  async buscaName(req, res) {
    const Tape = await Tapes.findAll({ where: { artista: req.query.tapes } });
    if (Tape) {
      return res.status(200).json(Tape);
    } else {
      return res.status(400).json({ retorno: 'erro ao encontrar tape' })
    }
  }
  async buscaGrava(req, res) {
    const Tape = await Tapes.findAll({ where: { gravadora: req.query.tapes } });
    if (Tape) {
      return res.status(200).json(Tape);
    } else {
      return res.status(400).json({ retorno: 'erro ao encontrar tape' })
    }
  }
  async buscaEtique(req, res) {
    const Tape = await Tapes.findAll({ where: { etiqueta: req.query.tapes } });
    if (Tape) {
      return res.status(200).json(Tape);
    } else {
      return res.status(400).json({ retorno: 'erro ao encontrar tape' })
    }
  }
  async buscaTipo(req, res) {
    const Tape = await Tapes.findAll({ where: { tipo_tape: req.query.tapes } });
    if (Tape) {
      return res.status(200).json(Tape);
    } else {
      return res.status(400).json({ retorno: 'erro ao encontrar tape' })
    }
  }
  async busca2(req, res) {
    const Tape = await Tapes.findOne({ where: { numero_tape: req.query.tapes } });
    if (Tape) {
      return res.status(200).json(Tape);
    } else {
      return res.status(400).json({ retorno: 'Erro ao encontrar tape vinculado a está musica' })
    }
  }
  async delete(req, res) {
    const tapes = await Tapes.findOne(
      { where: { id: req.query.id } });
    if (tapes) {
      await Tapes.update(
        { bloqueado: "S" },
      { where: { id: req.query.id } });
      await Musica.update( 
          { bloqueado: "S" },
          { where: { numero_tape: tapes.numero_tape } })
      return res.status(200).json({ retorno: "Tapes foi deletado com sucesso." });
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
  async listaStream(req, res) {
    const tapesListaS = await Tapes.findAll({where: {stream: 1}},registros =>{
      const countS = registros.length;
    });
    const tapesListaN = await Tapes.findAll({where: {stream: 0}},registros =>{
      const countN = registros.length;
    });
    if (tapesListaN) {
      return res.status(200).json({ quantS: tapesListaS.length, quantN: tapesListaN.length});
    } else {
      return res.status(404).json({ retorno: "Não foram encontrados usuários cadastrados." });
    }
  }


  async post(req, res) {
    const tapes = await Tapes.create(req.body.tape)
    if (tapes) {
      for (let index = 0; index < req.body.acervo_musical.length; index++) {
        Musica.create(req.body.acervo_musical[index]);
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
      await Musica.destroy({ where: { numero_tape: tapes.numero_tape }})
      await Tapes.update(
        req.body.tape,
        { where: { id: tapes.id } });
      for ( let i = 0; i < req.body.acervo_musical.length; i++){
        Musica.create(req.body.acervo_musical[i]);
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
          [Op.like]: '%' + req.query.tapes + '%'
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