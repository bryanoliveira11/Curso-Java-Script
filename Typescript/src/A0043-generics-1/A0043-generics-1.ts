/* generic types */

/*
generic type - U
a type that needs other type "U" as a parameter
*/
type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

/* generic type - T */
export function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const array = [1, 2, 3, 4, 5];
console.log(array.filter((value) => value < 5));

/* before generic types */

// const filteredArray = myFilter(array, (value) => {
//   if (typeof value === 'number') return value < 5;
//   return false;
// });
// console.log(filteredArray);

/* after generic types */

const filteredArray = myFilter(array, (value) => value < 5);
console.log(filteredArray);
