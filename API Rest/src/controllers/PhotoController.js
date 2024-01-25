import multer from 'multer';
import photoController from '../controllers/PhotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('photo');

class PhotoController {
  async create(req, res) {
    try {
      return upload(req, res, (err) => {
        if (err) {
          res.status(400).json({
            errors: [err.code],
          });
        }
        return res.json(req.file);
      });
    }
    catch (err) {
      return res.json(null);
    }
  }
}

export default new PhotoController();
