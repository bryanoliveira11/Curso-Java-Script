const knex = require('../config/database');

const selectBetween = knex('users')
    .select('id', 'first_name')
    .whereBetween('id', [80, 83])
    .orWhereBetween('id', [10, 15]);

selectBetween.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});