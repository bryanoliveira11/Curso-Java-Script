const knex = require('../config/database');

const select = knex('users').select('id', 'first_name').where('id', '=', 29);
const knexUpdate = knex('users').update({
    first_name: 'Updated',
    last_name: 'Updated',
}).where('id', '=', 29);

console.log(select.toString());
console.log(knexUpdate.toString());

knexUpdate.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});