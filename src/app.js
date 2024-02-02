require("dotenv").config();

import express from "express";
import routes from "./routes";
import cors from "cors";
import "./database";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    var listaPermicao = [
      "http://localhost:4200",
      "http://192.168.0.15:4200",
      "http://192.168.2.15:4200",
      "http://192.168.0.26:4200",
      "http://192.168.0.19:4200",
      "http://10.200.123.18:4200",
    ];
    this.server.use(cors({ origin: listaPermicao }));
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
