/* generic types 2 - promises */

async function promiseAsync() {
  return 1;
}

/* Promise<number> */
promiseAsync().then((result) => console.log(result + 1));

type MyType = number;

/* Promise<unknown> -> Promise<MyType> */
function myPromise(): Promise<MyType | number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

myPromise().then((result) => console.log(result + 1));
