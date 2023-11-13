import Log from "../models/log"
import Sequelize from "sequelize";

class LogController {
 
  async get(req, res) {
    const log = await Log.findOne({
      where: { id: req.query.id }
    });
    if (log) {
      return res.status(200).json(log);
    } else {
      return res.status(404).json({ retorno: "Não foi encontrado Log com este código." });
    }
  }

  async delete(req, res) {
    await Log.destroy({
      where: { id: req.query.id },
    }).catch(function (err) {
      return res.status(400).json({ retorno: "Falha ao excluir Log." });
    });
    return res.status(200).json({ retorno: "Log foi deletada com sucesso." });
  }

  async list(req, res) {
    const logLista = await Log.findAll({});
    if (logLista) {
      return res.status(200).json(logLista);
    } else {
      return res.status(404).json({ retorno: "Não foram encontrados usuários cadastrados." });
    }
  }

  async post(req, res) {
    const log = await Log.create(req.body)
    if(log) {
      return res.status(200).json({ retorno: 'Log incluida com sucesso' }); 
      }else{
        return res.status(400).json({ retorno: "Falha ao incluir log. "});
  }
  }

  async put(req, res) {
    const log = await Log.findOne({
      where: { id: req.body.id }
    });
    if (log) {
      await Log.update(
        req.body,
        { where: { id: req.body.id } }
      ).catch(function (err) {
        return res.status(500).json({ retorno: "Falha ao atualizar o Log." });
      });
      return res.status(200).json({ retorno: "Log alterado com sucesso." });
    } else {
      return res.status(404).json({ retorno: "Log não encontrado." });
    }
  }

  async catch(req, res) {
    const Op = Sequelize.Op;
      let log = await Log.findAll({
        where: {
          funcao: {
            [Op.like]: req.query.log + '%'
          }
        }
      });
      if (log.length > 0) {
        return res.status(200).json(log);
      } else {
        let log = await Log.findAll({
          where: {
            id: req.query.log
          }
        });
        if (log) {
          return res.status(200).json(log);
        } else {
          return res.status(200).json({ status: false, mensagem: "Não foi possível realizar a pesquisa no banco." });
        }
      }
  }

}

export default new LogController();