const knex = require('../config/database');

const select = knex('users').select('id', 'first_name');
const knexDelete = knex('users').delete().whereBetween('id', [30, 35]);

console.log(select.toString());
console.log(knexDelete.toString());

knexDelete.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});