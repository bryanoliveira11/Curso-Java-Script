const knex = require('../config/database');

const insertUsersRole = knex(
    knex.raw('users_roles (user_id, role_id)')
    ).insert(qb => {
        qb.select('id').from('users').select(qb => {
            qb.select('id').from('roles')
            .orderByRaw('rand()').limit(1);
        })
    });

console.log(insertUsersRole.toString());

insertUsersRole.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});