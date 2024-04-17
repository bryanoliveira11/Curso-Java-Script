const knex = require('../config/database');

const insertRole = knex('roles').insert([
    {name: 'POST'},
    {name: 'PUT'},
    {name: 'DELETE'},
    {name: 'GET'},
]);

console.log(insertRole.toString());

insertRole.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});