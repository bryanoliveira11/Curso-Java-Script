import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'test',
      lastname: 'user',
      email: 'testuser@gmail.com',
      age: 44,
      height: 100,
      weight: 1.8,
    })

    res.json({
      'controller working': true,
    });
  }
}

export default new HomeController();
