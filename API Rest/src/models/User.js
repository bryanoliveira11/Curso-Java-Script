import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo Nome deve ter Entre 3 e 255 Caracteres.'
            },
          }
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Este Email já Está em Uso.'
          },
          validate: {
            isEmail: {
              msg: 'Email Inválido.'
            },
          }
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [6, 50],
              msg: 'A Senha deve ter Entre 6 e 50 Caracteres.'
            },

          }
        },
      },
      {
        sequelize,
      });

      // fazendo hash do password via hook before save
      this.addHook('beforeSave', async (user) => {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      })

    return this;
  };
}
