const HomeModel = require('../models/HomeModel');

// creating and sending data to database table
HomeModel.create({
  titulo: 'One Nice Test Title',
  descricao: 'One Nice Test Description'
})
  .then( data => console.log(data))
  .catch(err => console.log(err));

exports.paginaInicial = (req, res, next) => {
  // session example
  req.session.user = { name:'test', loggedin: true };

  // flash message example
  req.flash('info', 'hello world');
  console.log(req.flash('info'));

  // render example
  res.render('index', {
    title: 'Page Title',
    numbers: [0,1,2,3,4,5,6,7,8,9]
  });

  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
