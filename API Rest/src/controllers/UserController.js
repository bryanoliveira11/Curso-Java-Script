import User from '../models/User';

class UserController {
  // criando usuários
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    }
    catch (err) {
      return res.status(400).json(
        // pegando mensagens de erro
        {
          errors: err.errors.map(e => e.message)
        }
      );
    }
  };

  // listando usuários
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    }
    catch (err) {
      return res.json(null);
    }
  };

  // mostrando um usuário
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    }
    catch (err) {
      return res.json(null);
    }
  };

  // update
  async update(req, res) {
    try {
      if (!req.params.id) return res.status(400).json({
        errors: ['ID não Enviado.'],
      });

      const user = await User.findByPk(req.params.id);

      if (!user) return res.status(400).json({
        errors: ['Usuário não Existe.'],
      });

      const newData = await user.update(req.body);

      return res.json(newData);
    }
    catch (err) {
      return res.status(400).json(
        {
          errors: err.errors.map(e => e.message)
        }
      );
    }
  };

  // delete
  async delete(req, res) {
    try {
      if (!req.params.id) return res.status(400).json({
        errors: ['ID não Enviado.'],
      });

      const user = await User.findByPk(req.params.id);

      if (!user) return res.status(400).json({
        errors: ['Usuário não Existe.'],
      });

      await user.destroy();

      return res.json('Usuário Deletado.');

    }
    catch (err) {
      return res.json(null);
    }
  }
}

export default new UserController();
