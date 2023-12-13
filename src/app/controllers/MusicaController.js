import Musica from "../models/musica";
import Sequelize from "sequelize";
import Editora from "../models/editora";


class MusicaController {

  async get(req, res) {
    const musica = await Musica.findOne({
      where: { id: req.query.id }
    });
    if (musica) {
      return res.status(200).json(musica);
    } else {
      return res.status(404).json({ retorno: "Não foi encontrado Musica com este código." });
    }
  }

  async delete(req, res) {
    const existe = await Musica.findOne({
      where: { musica: req.query.id }
    });
    if (existe) {
      return res.status(400).json({ retorno: "Não é possível excluir o musica já vinculado a um tape." })
    }
    await Musica.update(
      { bloqueado: "S" },
      { where: { id: req.query.id } }
    ).catch(function (err) {
      return res.status(400).json({ retorno: "Falha ao excluir Musica." });
    });
    return res.status(200).json({ retorno: "Usuário foi deletado com sucesso." });
  }

  async list(req, res) {
    const musicaLista = await Musica.findAll({
      limit: 100,
    });
    if (musicaLista) {
      return res.status(200).json(musicaLista);
    } else {
      return res.status(404).json({ retorno: "Não foram encontrados usuários cadastrados." });
    }
  }


  async lookup(req, res) {
    if (req.query.ids) {
      const ids = req.query.ids.split(',');
      const musicaLista = await Musica.findAll({
        where: {
          id: { [Sequelize.Op.in]: ids } 
        }
      });
      
      if (musicaLista.length > 0) {
        return res.status(200).json({ items: musicaLista });
      } else {
        return res.status(204).json({ retorno: "Não foram encontradas músicas para os IDs fornecidos." });
      }
    } else {
      const array = [];
      const musicaLista = await Musica.findAll({});
      for (let index = 0; index < musicaLista.length; index++) {
        array.push(musicaLista[index]);
      }
      if (musicaLista.length > 0) {
        return res.status(200).json({ items: array });
      } else {
        return res.status(204).json({ retorno: "Não foram encontradas músicas cadastradas." });
      }
    }
  }

  async post(req, res) {
    const musica = await Musica.create(req.body)
    if (musica) {
      return res.status(200).json({ retorno: 'Musica incluido com sucesso' });

    } else {
      return res.status(400).json({ retorno: "Falha ao incluir Musica. " });
    }
  }

  async put(req, res) {
    const musica = await Musica.findOne({
      where: { id: req.body.id }
    });
    if (musica) {
      await Musica.update(
        req.body,
        { where: { id: req.body.id } }
      ).catch(function (err) {
        return res.status(500).json({ retorno: "Falha ao atualizar o Musica." });
      });
      return res.status(200).json({ retorno: "Musica alterado com sucesso." });
    } else {
      return res.status(404).json({ retorno: "Musica não encontrado." });
    }
  }
  async busca(req, res) {
    let musica = await Musica.findAll({
      where: {
        numero_tape: req.query.musica
      },
      order: [
        ['lado', 'ASC'], 
        [Sequelize.literal('CAST(faixa AS UNSIGNED)'), 'ASC']
      ]
    });
    if (musica) {
      return res.status(200).json(musica);
    } else {
      return res.status(200).json({ status: false, mensagem: "Não foi possível realizar a pesquisa no banco." });
    }
  }

  

  async catch(req, res) {
    const Op = Sequelize.Op;
    let musica = await Musica.findAll({
      limit: 100,
      where: {
        musica: {
          [Op.like]: req.query.musica + '%'
        }
      }
    });
    if (musica.length > 0) {
      return res.status(200).json(musica);
    } else {
      let musica = await Musica.findAll({
        limit: 100,
        where: {
          id: req.query.musica
        }
      });
      if (musica) {
        return res.status(200).json(musica);
      } else {
        return res.status(200).json({ status: false, mensagem: "Não foi possível realizar a pesquisa no banco." });
      }
    }
  }

}

export default new MusicaController();