/* eslint-disable */

/* void type is when a function does not return anything */

function noReturn(...args: string[]):void {
  console.log(args.join(' '));
}


const userObj = {
  name: 'name',
  lastname: 'lastname',

  showName(): void {
    console.log(this.name + ' ' + this.lastname);
  }
}

noReturn('hello', 'world');
userObj.showName();
