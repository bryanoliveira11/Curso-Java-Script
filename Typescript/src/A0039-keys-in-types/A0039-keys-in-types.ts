/* keys in types */

type Vehicle = {
  marca: string;
  ano: number;
};

/*
 mirroring Vehicle keys into car
 if the types are changed in the Vehicle, the Car will change too
 */
type Car = {
  brand: Vehicle['marca'];
  year: Vehicle['ano'];
  name: string;
};

const car: Car = {
  brand: 'Ford',
  year: 2020,
  name: 'Name',
};

console.log(car);
