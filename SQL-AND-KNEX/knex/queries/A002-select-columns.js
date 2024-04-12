const knex = require('../config/database');

const select = knex('users as u').select('email as uemail', 'id as uid');

select.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});