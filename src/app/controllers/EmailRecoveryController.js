import nodemailer from "nodemailer";
import Usuario from "../models/Usuario";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";

require("dotenv/config");

class EmailRecoveryController {
  async store(req, res) {
    const emailCliente = req.body.email;

    const user = await Usuario.findOne({
      where: { email: req.body.email },
    });

    if (user) {
      const buff = Buffer.from(user.senha, "base64");
      const senha = buff.toString("utf-8");

      var remetente = nodemailer.createTransport({
        host: process.env.HOST,
        service: process.env.SERVICE,
        port: 587,
        secure: false,
        auth: {
          //user: "" + process.env.USERMAIL + "",
          //pass: "" + process.env.PASSMAIL + "",
          user: "michel.rocha@coderp.inf.br",
          pass: "34493252@Mi",
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      var readHTMLFile = function (path, callback) {
        fs.readFile(path, { encoding: "latin1" }, function (err, html) {
          if (err) {
            throw err;
            callback(err);
          } else {
            callback(null, html);
          }
        });
      };

      readHTMLFile(
        path.resolve(__dirname, "../../template/recoveryPassword.html"),
        function (err, html) {
          var template = handlebars.compile(html);
          var replacements = {
            senha: senha
          };

          var htmlToSend = template(replacements);
          var mailOptions = {
            from: process.env.FROM,
            to: emailCliente,
            //to: "helton.system@hotmail.com,luanacruz@shineraydobrasil.com.br",
            subject: "RECUPERAR SENHA - POLY MUSIC ",
            html: htmlToSend,
          };
          remetente.sendMail(mailOptions, function (error, response) {
            if (error) {
              console.log(error);
            } else {
              console.log("E-Mail enviado com sucesso!");
              return res
                .status(200)
                .json({ status: "E-Mail enviado com sucesso!" });
            }
          });
        }
      );

    } else {
      console.log("Usuário não existe");
      return res.status(200).json({ status: "Usuário não existe" });
    }
  }

  async post(req, res) {

    let buff = Buffer.from(req.body.atual)
    const senhaAtual = buff.toString("base64");

    buff = Buffer.from(req.body.nova)
    const novaSenha = buff.toString("base64");

    buff = Buffer.from(req.body.confirma)
    const confirmaSenha = buff.toString("base64");

    const user = await Usuario.findOne({
      where: { id: req.query.id },
    });

    if (user) {
      if (senhaAtual == user.senha) {
        if (novaSenha == confirmaSenha) {
          Usuario.update(
            { senha: novaSenha },
            {
              where: { id: req.query.id }
            });
          return res.status(200).json({ retorno: "Senha atualizada com sucesso" })
        } else {
          return res.status(401).json({ error: "Senhas não coincidem" })
        }
      } else {
        return res.status(401).json({ error: "Senha não autorizada" })
      }
    } else {
      console.log("Usuário não existe");
      return res.status(404).json({ error: "Usuário não existe" });
    }
  }
  async confirm(req, res) {

    const user = await Usuario.findOne({
      where: {  id: req.query.id },
    });

    if (user) {
      if (req.body.newEmail != user.email || req.body.newContato != user.contato || req.body.newNome != user.nome) {
        Usuario.update({ email: req.body.newEmail, contato: req.body.newContato, nome: req.body.newNome },
          {
            where: { id: req.query.id }
          });
        return res.status(200).json({ retorno: "Perfil atualizado com sucesso" });
      }
    }else {
      console.log("Usuário não existe");
      return res.status(404).json({ error: "Usuário não existe" });
    }
  }
}

export default new EmailRecoveryController();
