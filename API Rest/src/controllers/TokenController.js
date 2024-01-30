import User from '../models/User';
import jsonwebtoken from 'jsonwebtoken';

class TokenController {
  async create(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        return res.status(401).json({
          errors: ["Credenciais Inválidas."],
        })
      };

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.json({
          errors: ["Usuário não Existe."],
        })
      };

      if (!(await user.passwordIsValid(password))) {
        return res.json({
          errors: ["Senha Inválida."],
        })
      }

      const { id } = user;

      const token = jsonwebtoken.sign(
        { id, email },
        process.env.TOKEN_SECRET,
        { expiresIn: process.env.TOKEN_TIMEOUT }
      );

      return res.json({ token, user: {name: user.name, id, email} });
    }
    catch (err) {
      return res.json(null);
    }
  }
}

export default new TokenController();
