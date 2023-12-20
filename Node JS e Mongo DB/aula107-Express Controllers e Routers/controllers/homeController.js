// exporting a controller
exports.homePage = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    name: <input type="text" name="username">
    <button>send</button>
    </form>
    `);
}

exports.doPost = (req, res) => {
    res.send(`
    this is the post route. </br>
    <a href="/contact"> go to contact page. </a>
    `);
}