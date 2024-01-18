class HomeController {
  index(req, res) {
    res.json({
      'controller working': true,
    });
  }
}

export default new HomeController();
