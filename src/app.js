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
      "http://192.168.0.22:4200",
      "http://192.168.0.21:4200",
      "http://192.168.0.26:4200",
      "http://192.168.0.19:4200",
      "http://10.200.123.18:4200",
    ];
    this.server.use(cors({ origin: listaPermicao }));
    this.server.use(express.json());
    /*
             // catch 404 and forward to error handler
             this.server.use(function(req, res, next) {
                 next(createError(404));
             });

             // error handler
             this.server.use(function(err, req, res, next) {
                 // set locals, only providing error in development
                 res.locals.message = err.message;
                 res.locals.error = err;

                 // render the error page
                 res.status(err.status || 500);
                 res.render('error' + res.locals.message);
             });
              */
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
