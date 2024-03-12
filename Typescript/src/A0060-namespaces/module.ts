/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNamespace {
  export const myNamespaceName = 'MyNamespace';

  export class NamespaceUser {
    constructor(public name: string) {}
  }

  const np1 = new NamespaceUser('name1');
  console.log(np1);

  export namespace OtherNamespace {
    export const otherNamespaceName = 'OtherNamespace';
  }
}

/* using the class outside namespace */

const np2 = new MyNamespace.NamespaceUser('name2');
console.log(np2);
console.log(MyNamespace.myNamespaceName);
console.log(MyNamespace.OtherNamespace.otherNamespaceName);
