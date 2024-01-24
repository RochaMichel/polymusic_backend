import jwt from "jsonwebtoken";
import { promisify } from "util";

import authConfig from "../../config/auth";

export default async (req, res, next) => {
  //const authHeader = req.headers.authorization;
  return next();
}
  /*console.log(req);
  if (!authHeader) {
    return res.status(401).json({ error: "Token não informado" });
  }

  const token = authHeader; //.split(" ");

  jwt.verify(token, authConfig.secret, function (err, decoded) {
    if (err) {
      return res.status(401).json({ error: 'Token inválido.' });
    }
    return next();
    req.userCodigo = decoded.codigo;
    
  });
};*/
