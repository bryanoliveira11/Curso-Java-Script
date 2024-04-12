const knex = require('../config/database');

const data = [{
    first_name: 'user',
    last_name: 'two',
    email: 'usertwo@gmail.com',
    salary: '222',
    password_hash: '2_hash',
},
{
    first_name: 'user',
    last_name: 'three',
    email: 'userthree@gmail.com',
    salary: '333',
    password_hash: '3_hash',   
}]

const insert = knex('users').insert(data);
// console.log(insert.toSQL().toNative());

insert.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});