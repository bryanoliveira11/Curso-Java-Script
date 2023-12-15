/* importing things using node */

/* importing the full file */
const mod1 = require('./mod1');

/* import using destructuring */
const {fname, lname, fullname} = require('./mod1');
 
const fullName = mod1.fullName();

console.log(fullName)

/* classes */
const { Person } = require('./mod1');
const p1 = new Person('person1')

console.log(p1)

/* importing node packages */
const axios = require('axios');

axios('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response.data))
    .catch(err => console.log(err));