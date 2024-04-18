const knex = require('../config/database');

const aggregation = knex('users as u')
    .select('u.first_name')
    .max('u.salary as max_salary')
    .min('u.salary as min_salary')
    .avg('u.salary as avg_salary')
    .sum('u.salary as sum_salary')
    .count('u.id as total')
    .leftJoin('profiles as p', 'p.user_id', 'u.id')
    .groupBy('u.first_name')
    .orderBy('total', 'desc');

console.log(aggregation.toString());

aggregation.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});