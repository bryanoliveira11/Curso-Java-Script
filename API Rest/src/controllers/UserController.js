import User from '../models/User';

class UserController {
  // criando usuários
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, name, email } = newUser

      return res.json({ id, name, email });
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
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
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
      const { id, name, email } = user

      return res.json({ id, name, email });
    }
    catch (err) {
      return res.json(null);
    }
  };

  // update
  async update(req, res) {
    try {
      // update agora usará o id do usuário logado para editar
      const user = await User.findByPk(req.userId);

      if (!user) return res.status(400).json({
        errors: ['Usuário não Existe.'],
      });

      const newData = await user.update(req.body);
      const { id, name, email } = newData

      return res.json({ id, name, email });
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
      const user = await User.findByPk(req.userId);

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
