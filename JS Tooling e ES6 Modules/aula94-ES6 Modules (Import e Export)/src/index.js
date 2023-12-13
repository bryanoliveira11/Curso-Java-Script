// importing things
// imports without "{}" are the default ones
import Person, {name as name2, lastname, age, sum} from './module1';

name2 = 'altered name'

const p1 = new Person(name2, lastname);

console.log(name2, lastname, age, sum(5,5), p1);