const Home = require('../models/HomeModel');

exports.index = async (req, res) => {
  try {
    const home = new Home();
    const contacts = await home.getAllContacts();

    res.render('index', {contacts});
  }
  catch (err) {
    return res.render('404');
  }
};
