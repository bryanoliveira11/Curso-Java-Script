/* this in functions */

/* typing this - it isnt a argument */
export function thisInFunctions(this: Date, arg1: string): void {
  console.log(this);
  console.log(arg1);
}

// will not work because of this
thisInFunctions('test');

// will work
thisInFunctions.call(new Date(), 'test');
