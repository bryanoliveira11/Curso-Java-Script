const people = [
    { id: 3, name: 'name 3' },
    { id: 2, name: 'name 2' },
    { id: 1, name: 'name 1' },
]

// const newPeople = {};
// for (const person of people) {
//     const {id} = person;
//     newPeople[id] = {...person};
// }

/* using MAP */
const newPeople = new Map();
for (const person of people) {
    const { id } = person;
    newPeople.set(id, { ...person });
}

console.log(newPeople);
console.log(newPeople.get(2));