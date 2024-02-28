/* es2020 - operator */

type MyDocument = {
  title: string;
  text: string;
  data?: Date;
};

const doc: MyDocument = {
  title: 'the title',
  text: 'the text',
};

/* optional chaining - ? */
console.log(doc.data?.toDateString()); // in this case, the method is not called because of the ? operator. It returns undefined

const doc2: MyDocument = {
  title: 'the title',
  text: 'the text',
  data: new Date(),
};

console.log(doc2.data?.toDateString()); // will call the method, data exists

/*
 nullish coalescing - ??
 verifies if the return is null or undefined. If it is, the code after the ?? operator will be executed
 */
console.log(doc.data?.toDateString() ?? 'Date does not Exist.'); // will call the string after the ?? operator
