/* eslint-disable @typescript-eslint/no-namespace */
var MyNamespace;
(function (MyNamespace) {
  MyNamespace.myNamespaceName = 'MyNamespace';
  var NamespaceUser = /** @class */ (function () {
    function NamespaceUser(name) {
      this.name = name;
    }
    return NamespaceUser;
  })();
  MyNamespace.NamespaceUser = NamespaceUser;
  var np1 = new NamespaceUser('name1');
  console.log(np1);
  var OtherNamespace;
  (function (OtherNamespace) {
    OtherNamespace.otherNamespaceName = 'OtherNamespace';
  })(
    (OtherNamespace =
      MyNamespace.OtherNamespace || (MyNamespace.OtherNamespace = {})),
  );
})(MyNamespace || (MyNamespace = {}));
/* using the class outside namespace */
var np2 = new MyNamespace.NamespaceUser('name2');
console.log(np2);
console.log(MyNamespace.myNamespaceName);
console.log(MyNamespace.OtherNamespace.otherNamespaceName);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/* npx tsc src/A0060-namespaces/index.ts --outfile src/A0060-namespaces/index.js */
/// <reference path="module.ts"/>
console.log(MyNamespace);
