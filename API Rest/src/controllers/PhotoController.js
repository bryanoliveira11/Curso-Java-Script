import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Photo from '../models/Photo';
import Student from '../models/Student';

const upload = multer(multerConfig).single('photo');

class PhotoController {
  create(req, res) {
    try {
      return upload(req, res, async (err) => {
        if (err) {
          return res.status(400).json({
            errors: [err.code],
          });
        }

        const { originalname, filename } = req.file;
        const { student_id } = req.body;

        if (!student_id) {
          const photo = await Photo.create({ originalname, filename });
          return res.json(photo);
        }

        const student = await Student.findByPk(student_id);

        if (!student) {
          return res.status(400).json({
            errors: ['Aluno não Existe'],
          });
        }

        const photo = await Photo.create({ originalname, filename, student_id });

        return res.json(photo);

      });
    }
    catch (err) {
      return res.json(null);
    }
  }
}

export default new PhotoController();
