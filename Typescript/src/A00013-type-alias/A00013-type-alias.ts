/* eslint-disable */

/* type alias  */

type Age = number;
type RGBColor = 'red' | 'green' | 'blue';
type CMYKColor = 'cyan' | 'magenta' | 'yellow' | 'black';

// merging types
type FavoriteColor = RGBColor | CMYKColor;

type Person = {
  name: string;
  lastname: string;
  age: Age;
  favoriteColor?: FavoriteColor;
};

const person: Person = {
  name: 'name',
  lastname: 'lastname',
  age: 20,
}

export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
  return {...person, favoriteColor: color};
}

console.log(setFavoriteColor(person, 'red'));
