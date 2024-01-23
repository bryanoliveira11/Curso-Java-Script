import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    try {
      const newStudent = await Student.create(req.body);

      return res.json(newStudent);
    }
    catch (err) {
      return res.json(null);
    }
  }
}

export default new HomeController();
