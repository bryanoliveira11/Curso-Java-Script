const knex = require('../config/database');

const selectIn = knex('users')
    .select('id', 'first_name')
    .whereIn('id', [10,15,20,25])
    .orWhereIn('first_name', ['user']);

selectIn.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});