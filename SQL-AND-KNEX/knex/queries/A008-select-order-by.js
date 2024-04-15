const knex = require('../config/database');

const selectOrderBy = knex('users')
    .select('id', 'first_name')
    .where('first_name', 'like', '%a')
    .orWhere('first_name', 'like', '%na')
    .orderBy('id', 'desc');

selectOrderBy.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});