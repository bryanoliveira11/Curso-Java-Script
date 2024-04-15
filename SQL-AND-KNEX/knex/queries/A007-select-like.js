const knex = require('../config/database');

const selectLike = knex('users')
    .select('id', 'first_name')
    .where('first_name', 'like', '%a')
    .orWhere('first_name', 'like', '%na');

    selectLike.then(data => {
    console.log(data);
}).catch(e => {
    console.log('Error : ' + e.message);
}).finally(() => {
    knex.destroy()
});