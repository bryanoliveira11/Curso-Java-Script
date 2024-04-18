const knex = require('../config/database');

const updateJoin = knex('users as u')
    .join('profiles as p', 'u.id', 'p.user_id')
    .update({'p.bio': knex.raw('CONCAT(p.bio, " updated")')})
    .where({'u.email': 'userone@gmail.com'})

console.log(updateJoin.toString());

updateJoin.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});