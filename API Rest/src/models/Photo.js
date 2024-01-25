import Sequelize, { Model } from 'sequelize';

export default class Photo extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ser vázio.'
            }
          }
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ser vázio.'
            }
          }
        },
      },
      {
        sequelize,
      });
    return this;
  };

  // foreign key with student
  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
  }
}
