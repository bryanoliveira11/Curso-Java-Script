const knex = require('../config/database');

const groupBy = knex('users as u')
    .select('u.first_name')
    .count('u.id as total')
    .join('profiles as p', 'u.id', 'p.user_id')
    .whereIn('u.id', [43, 23, 66, 1])
    .groupBy('u.first_name')
    .orderBy('total', 'desc');

console.log(groupBy.toString());

groupBy.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});