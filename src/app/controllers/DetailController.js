import Detail from "../models/detail";
import Tapes from "../models/tapes";
import Sequelize from "sequelize";

class DetailController {

  async get(req, res) {
    const detail = await Detail.findAll({
      
      where: { idTipoTape: req.query.id }
    });
    if (detail) {
      return res.status(200).json(detail);
    } else {
      return res.status(404).json({ retorno: "Não foi encontrado Detail com este código." });
    }
  }
  async busca(req, res) {
    const detail = await Detail.findAll({
      where: { idTipoTape: req.query.id }
    });
    if (detail) {
      return res.status(200).json(detail);
    } else {
      return res.status(404).json({ retorno: "Não foi encontrado Detail com este código." });
    }
  }
}
export default new DetailController();