const firstname = 'first name';
const lastname = 'last name';

const fullName = () => { return `${firstname} ${lastname}` };

/* exporting using node exports */

// module.exports.firstname = firstname;
// module.exports.lastname = lastname;
// module.exports.fullName = fullName;

exports.firstname = firstname;
exports.lastname = lastname;
exports.fullName = fullName;

/* exporting with this */
this.something = 'something i want to export';

// console.log(module.exports);

class Person {
    constructor(name) {
        this.name = name;
    }
}
exports.Person = Person;