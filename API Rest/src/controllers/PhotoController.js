class PhotoController {
  async create(req, res) {
    try {
      return res.json(req.file);
    }
    catch (err) {
      return res.json(null);
    }
  }
}

export default new PhotoController();
