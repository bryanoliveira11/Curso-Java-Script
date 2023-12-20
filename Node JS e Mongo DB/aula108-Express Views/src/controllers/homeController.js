// exporting a controller
exports.homePage = (req, res) => {
    res.render('index');
}

exports.doPost = (req, res) => {
    res.send(`
    this is the post route. </br>
    <a href="/contact"> go to contact page. </a>
    `);
}