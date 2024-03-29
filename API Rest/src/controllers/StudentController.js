import Student from '../models/Student';
import Photo from '../models/Photo';

class StudentController {
  async index(req, res) {
    try {
      const students = await Student.findAll({
        attributes: ['id', 'name', 'lastname', 'email', 'age', 'height', 'weight'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['filename', 'url'],
        },
      });
      return res.json(students);
    }
    catch (err) {
      return res.json(null);
    }
  }

  async create(req, res) {
    try {
      const newStudent = await Student.create(req.body);
      const { id, name, lastname, email, age, height, weight } = newStudent;

      return res.json({ id, name, lastname, email, age, height, weight });
    }
    catch (err) {
      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      });
    }
  };

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(404).json({
          errors: ['ID Inválido.'],
        })
      };

      const student = await Student.findOne({
        where: {id: req.params.id},
        attributes: ['id', 'name', 'lastname', 'email', 'age', 'height', 'weight'],
        order: [[Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['filename', 'url'],
        },
      });

      if (!student) {
        return res.status(404).json({
          errors: ['Aluno não Existe.'],
        })
      };

      return res.json(student);
    }
    catch (err) {
      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      });
    }
  };

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(404).json({
          errors: ['ID Inválido.']
        })
      };

      const student = await Student.findByPk(req.params.id);

      if (!student) {
        return res.status(404).json({
          errors: ['Aluno não Existe.']
        })
      };

      const newData = await student.update(req.body);
      const { id, name, lastname, email, age, height, weight } = newData

      return res.json({ id, name, lastname, email, age, height, weight });
    }
    catch (err) {
      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      });
    }
  };

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(404).json({
          errors: ['ID Inválido.']
        })
      };

      const student = await Student.findByPk(req.params.id);

      if (!student) {
        return res.status(404).json({
          errors: ['Aluno não Existe.']
        })
      };

      student.destroy();

      return res.json(`Aluno ${student.name} ${student.lastname} Deletado com Sucesso.`)

    }
    catch (err) {
      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      });
    }
  };
}

export default new StudentController();
