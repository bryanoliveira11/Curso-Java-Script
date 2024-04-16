const knex = require('../config/database');

const selectMultiple = knex(
    knex.raw(
    '?? as ??, ?? as ??',
    ['users', 'u', 'profiles', 'p']
    ),
    )
    .select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
    .where('u.id', '=', knex.raw('??', ['p.user_id']));

console.log(selectMultiple.toString());

selectMultiple.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});