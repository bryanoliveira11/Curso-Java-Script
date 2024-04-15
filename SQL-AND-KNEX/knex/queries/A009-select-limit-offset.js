const knex = require('../config/database');

const selectOrderBy = knex('users')
    .select('id', 'first_name')
    .orderBy('id', 'asc')
    .limit(5)
    .offset(10);

selectOrderBy.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});