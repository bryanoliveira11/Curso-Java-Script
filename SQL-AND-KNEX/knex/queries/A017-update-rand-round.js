const knex = require('../config/database');

const randRound = knex('users as u').update({
    salary: knex.raw('round(rand() * ??, ??)', [10000, 2])
});

console.log(randRound.toString());

randRound.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});