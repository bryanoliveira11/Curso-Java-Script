const knex = require('../config/database');

// const select = knex('users as u').select('*').where('id', '=', 2);

// const select = knex('users as u').select('*').where({
//     id:2, first_name:'user',
// });

/* AND / OR */
const select = knex('users as u')
.select('*')
.where('id', '=', 2)
.andWhere('first_name', '=', 'user')
.orWhere('id', '=', 3);

console.log(select.toString());

select.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});