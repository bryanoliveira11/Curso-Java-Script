import jsonwebtoken from "jsonwebtoken";

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({
    errors: ['Login Required.'],
  });

  const [, token] = authorization.split(' ');

  try {
    const data = jsonwebtoken.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;
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
