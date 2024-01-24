import jsonwebtoken from "jsonwebtoken";
import User from "../models/User";

export default async(req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({
    errors: ['Login Required.'],
  });

  const [, token] = authorization.split(' ');

  try {
    const data = jsonwebtoken.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;

    // validando se o usuário existe no banco
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário Inválido.'],
      });
    };

    req.userId = id;
    req.userEmail = email;

    return next();
  }
  catch (err) {
    console.log(err)
    return res.status(401).json({
      errors: ['Token Expirado ou Inválido.'],
    });
  }
};
