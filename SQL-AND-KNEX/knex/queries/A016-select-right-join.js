const knex = require('../config/database');

const selectInnerJoin = knex('users as u')
    .select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
    .rightJoin('profiles as p', 'u.id', 'p.user_id')
    .orderBy('u.first_name', 'desc');

console.log(selectInnerJoin.toString());

selectInnerJoin.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});