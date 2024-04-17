const knex = require('../config/database');

const selectInnerJoin = knex('users as u')
    .select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
    .leftJoin('profiles as p', 'u.id', 'p.user_id')
    .where('u.first_name', 'like', '%a')
    .orderBy('u.first_name', 'desc')
    .limit(5);

console.log(selectInnerJoin.toString());

selectInnerJoin.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});