import Musica from "../models/acervo_musical";
import Sequelize from "sequelize";
import Acervo_musical from "../models/acervo_musical";


class AcervoMusicalController {
 
  async get(req, res) {
    const acervo_musical = await Acervo_musical.findAll({
      where: { id_tape: req.query.id },
      order: [
        ['faixa','asc']
      ]
    });
    if (acervo_musical) {
      return res.status(200).json(acervo_musical);
    } else {
      return res.status(404).json({ retorno: "Não foi encontrado Acervo_musical com este código." });
    }
  }

  async delete(req, res) {
    const existe = await Acervo_musical.findOne({
      where: { acervo_musical: req.query.id }
    });
    if (existe) {
      return res.status(400).json({ retorno: "Não é possível excluir o acervo_musical já vinculado a um tape."})
    }
    await Acervo_musical.update(
      {bloqueado: "S"},
      {where: { id: req.query.id }}
      ).catch(function (err) {
      return res.status(400).json({ retorno: "Falha ao excluir Acervo_musical." });
    });
    return res.status(200).json({ retorno: "Usuário foi deletado com sucesso." });
  }

  async list(req, res) {
    const acervo_musicalLista = await Acervo_musical.findAll({
      order: [
        ['faixa','asc']
      ]
    });
    if (acervo_musicalLista) {
      return res.status(200).json(acervo_musicalLista);
    } else {
      return res.status(404).json({ retorno: "Não foram encontrados usuários cadastrados." });
    }
  }

  async post(req, res) {
    const acervo_musical = await Acervo_musical.create(req.body)
    if(acervo_musical) {
      return res.status(200).json({ retorno: 'Acervo_musical incluido com sucesso' });
        
      }else{
        return res.status(400).json({ retorno: "Falha ao incluir Acervo_musical. "});
  }
  }

  async put(req, res) {
    const acervo_musical = await Acervo_musical.findAll({
      where: { id_tape: req.body.id_tape }
    });
    for(let index = 0; index < acervo_musical.body.length; index++){
      await Acervo_musical.update(
        {
          id_musica: req.body.id_musica,
        },
        { where: { id: acervo_musical.body[index].id } }
      )
    }
  }

  async catch(req, res) {
    const Op = Sequelize.Op;
        let acervo_musical = await Acervo_musical.findAll({
          where: {
            id_tape: req.query.acervo_musical
          },
          order: [
            ['faixa','asc']
          ]
        });
        if (acervo_musical) {
          return res.status(200).json(acervo_musical);
        } else {
          return res.status(200).json({ status: false, mensagem: "Não foi possível realizar a pesquisa no banco." });
        }
      }
  }


export default new AcervoMusicalController();

















