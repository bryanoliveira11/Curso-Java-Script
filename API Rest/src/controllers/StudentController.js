import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    try {
      const students = await Student.findAll();
      return res.json(students)
    }
    catch (err) {
      return res.json(null);
    }
  }
}

export default new StudentController();
