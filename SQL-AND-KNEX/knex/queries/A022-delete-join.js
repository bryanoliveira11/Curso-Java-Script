const knex = require('../config/database');

const deleteJoin = knex.raw(`
    delete p, u from users u
    inner join profiles as p
    on p.user_id = u.id
    where u.email = ? and p.bio like ?;
`, ['usertwo@gmail.com', '%user%']);

console.log(deleteJoin.toString());

deleteJoin.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});