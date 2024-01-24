import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Usuario from "../app/models/Usuario";
import Artista from "../app/models/artista";
import Editora from "../app/models/editora";
import Etiqueta from "../app/models/etiqueta";
import Gravadora from "../app/models/gravadora";
import Nomes from "../app/models/nomes";
import Perfil_acesso from "../app/models/perfil_acesso";
import Tapes from "../app/models/tapes";
import Tipos_de_tapes from "../app/models/tipos_de_tapes";
import Musica from "../app/models/musica";
import Acervo_musical from "../app/models/acervo_musical";
import Log from "../app/models/log";
import Detail from "../app/models/detail";
import Agregadores from "../app/models/agregadores";
const models = [
  Usuario,
  Artista,
  Editora,
  Etiqueta,
  Gravadora,
  Nomes,
  Perfil_acesso,
  Tapes,
  Tipos_de_tapes,
  Musica,
  Acervo_musical,
  Log,
  Detail,
  Agregadores
];

class Database {
  constructor() {
    this.init();
    this.associate();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
  associate() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.associate(this.connection));
    //models.map((model) => model.removeAttribute('id'));
  }
}


export default new Database();
