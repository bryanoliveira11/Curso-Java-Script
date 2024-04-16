const knex = require('../config/database');

// const insertSelect = knex('profiles').insert(function() {
//     this.from('users').select('first_name', 'last_name');
// })

const insertSelect = knex(
    knex.raw(
    '?? (??, ??, ??)',
    ['profiles', 'bio', 'description', 'user_id']
    )
    )
    .insert((qb) => {
        qb.from('users').select(
            knex.raw('concat("Bio of ", ??)', ['first_name']),
            knex.raw('concat("Description of ", ??)', ['first_name']),
            'id'
        );
    });

console.log(insertSelect.toString());

insertSelect.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});