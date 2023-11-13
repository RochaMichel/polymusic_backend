import Nomes from "../models/nomes"
import Sequelize from "sequelize";

class NomesController {
 
  async get(req, res) {
    const nomes = await Nomes.findOne({
      where: { id: req.query.id }
    });
    if (nomes) {
      return res.status(200).json(nomes);
    } else {
      return res.status(404).json({ retorno: "Não foi encontrado Nomes com este código." });
    }
  }

  async delete(req, res) {
    await Nomes.update(
      {bloqueado: "S"},
      {where: { id: req.query.id }}
      ).catch(function (err) {
      return res.status(400).json({ retorno: "Falha ao excluir Nomes." });
    });
    return res.status(200).json({ retorno: "Nomes foi deletada com sucesso." });
  }

  async list(req, res) {
    const nomesLista = await Nomes.findAll({
      limit: 100,
    });
    if (nomesLista) {
      return res.status(200).json(nomesLista);
    } else {
      return res.status(404).json({ retorno: "Não foram encontrados usuários cadastrados." });
    }
  }

  async post(req, res) {
    const nomes = await Nomes.create(req.body)
    if(nomes) {
      return res.status(200).json({ retorno: 'Nomes incluida com sucesso' }); 
      }else{
        return res.status(400).json({ retorno: "Falha ao incluir nomes. "});
  }
  }

  async put(req, res) {
    const nomes = await Nomes.findOne({
      where: { id: req.body.id }
    });
    if (nomes) {
      await Nomes.update(
        req.body,
        { where: { id: req.body.id } }
      ).catch(function (err) {
        return res.status(500).json({ retorno: "Falha ao atualizar o Nomes." });
      });
      return res.status(200).json({ retorno: "Nomes alterado com sucesso." });
    } else {
      return res.status(404).json({ retorno: "Nomes não encontrado." });
    }
  }

  async catch(req, res) {
    const Op = Sequelize.Op;
      let nomes = await Nomes.findAll({
        limit: 100,
        where: {
          nome: {
            [Op.like]:  '%'+req.query.nomes + '%'
          }
        }
      });
      if (nomes.length > 0) {
        return res.status(200).json(nomes);
      } else {
        let nomes = await Nomes.findAll({
          where: {
            id: req.query.nomes
          }
        });
        if (nomes) {
          return res.status(200).json(nomes);
        } else {
          return res.status(200).json({ status: false, mensagem: "Não foi possível realizar a pesquisa no banco." });
        }
      }
  }

}

export default new NomesController();