import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create(req.body);

    return res.json(newStudent);
  }
}

export default new HomeController();
