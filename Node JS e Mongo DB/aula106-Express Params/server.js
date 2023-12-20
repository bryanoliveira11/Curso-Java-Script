const express = require('express');

const app = express();

// urlencoded to deal with req.body
app.use(express.urlencoded({extended:true}));


/* URL params

param = :param
"?" is used to make a optional param ex: /:idUser?

*/
app.get('/tests/:idUser?/:otherparam?', (req, res) => {
    console.log(req.params);
    //res.send(req.params);

    /* query params - ex: ?name=firstname&lastname=last */
    res.send(req.query);
})

/* POST and req.body */

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    name: <input type="text" name="username">
    <button>send</button>
    </form>
    `);
})

app.post('/', (req, res) => {
    console.log(req.body);
    // "username" comes from the name of the input
    res.send(`${req.body.username}`);
})

app.listen(3000, () => { console.log('server running') });
