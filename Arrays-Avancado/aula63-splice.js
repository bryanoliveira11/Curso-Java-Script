/* splice - arguments : 
   1 - start index
   2 - number os elements to remove
   3 - element to add (if you need one)
*/

const names = ['maria', 'joao', 'eduardo', 'gabriel'];
const removed = names.splice(3, 1, 'teste');

// simulating pop - removes last element
const removed_pop = names.splice(-1, 1);

// simulating shift - removes first element
const removed_shift = names.splice(0, 1);

// simulating push - add element at the end
const names_push = names.splice(names.length, 0, 'push');

// simulating unshift - add element at the start
const names_unshift = names.splice(0, 0, 'unshift');

console.log(names, names_unshift);