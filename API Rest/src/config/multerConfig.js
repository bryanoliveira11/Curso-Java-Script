import multer from "multer";
import path from "path";

const random = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // destino do upload
      cb(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      // gerando novo nome para arquivo
      cb(null, `${Date.now()}_${random()}${path.extname(file.originalname)}`);
    },
  }),
}
