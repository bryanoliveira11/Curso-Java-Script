// Class constructor type
type Constructor = new (...args: any[]) => any;

// Classes
function ClassDecorator(constructor: Constructor): any {
  // Called when the class is created
  console.log('CLASS');
  console.log(constructor);
  console.log('###');

  // Return can be omitted
  return class extends constructor {
    // Do as you wish
  };
}

// Instance method (normal)
function MethodDecorator(
  classPrototype: any,
  methodName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Called when the method is created (no need to call the method)
  console.log('NORMAL METHOD');
  console.log(classPrototype);
  console.log(methodName);
  console.log(propertyDescriptor);
  console.log('###');

  // Return can be omitted
  return {
    // value changes the original return:
    // value: (...args: any[]) => console.log(args),
    writable: true,
    enumerable: true,
    configurable: true,
  };
}

// Static method
function StaticMethodDecorator(
  classConstructor: Constructor,
  methodName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Called when the method is created (no need to call the method)
  console.log('STATIC METHOD');
  console.log(classConstructor);
  console.log(methodName);
  console.log(propertyDescriptor);
  console.log('###');

  // Return can be omitted
  return {
    // Use get/set OR value
    enumerable: true,
    configurable: true,
  };
}

// Method parameter
function MethodParameterDecorator(
  classPrototype: any,
  methodName: string,
  propertyIndex: number,
): any {
  // Called when the method is created
  console.log('METHOD PARAMETER');
  console.log(classPrototype);
  console.log(methodName);
  console.log(propertyIndex);
  console.log('###');

  // Return is ignored
}

// Static method parameter
function StaticMethodParameterDecorator(
  classConstructor: Constructor,
  methodName: string,
  propertyIndex: number,
): any {
  // Called when the parameter is created (no need to call the method)
  console.log('STATIC METHOD PARAMETER');
  console.log(classConstructor);
  console.log(methodName);
  console.log(propertyIndex);
  console.log('###');

  // Return is ignored
}

// Property
function PropertyDecorator(classPrototype: any, propertyName: string): any {
  // Called when the property is created
  console.log('PROPERTY DECORATOR');
  console.log(classPrototype);
  console.log(propertyName);
  console.log('###');

  // Return can be omitted
  // Use get and set to manipulate the property value
  let propertyValue: any;
  return {
    enumerable: true,
    configurable: true,
    get: () => propertyValue,
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.split('').reverse().join('');
        return;
      }
      propertyValue = value;
    },
  };
}

// Static property
function StaticPropertyDecorator(
  classConstructor: any,
  propertyName: string,
): any {
  // Called when the static property is created
  console.log('STATIC PROPERTY DECORATOR');
  console.log(classConstructor);
  console.log(propertyName);
  console.log('###');

  // Return can be omitted
  return {
    // Use get/set OR value
    enumerable: true,
    configurable: true,
  };
}

// Getter/Setter
function NormalGetterSetterDecorator(
  classPrototype: any,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Called when the method is created
  // (can only be applied to either getter or setter - not both)
  console.log('NORMAL GETTER/SETTER');
  console.log(classPrototype);
  console.log(propertyName);
  console.log(propertyDescriptor);
  console.log('###');

  // Return can be omitted
  return {
    // Use get/set OR value
    enumerable: true,
    configurable: true,
  };
}

// Static Getter/Setter
function StaticGetterSetterDecorator(
  classConstructor: Constructor,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Called when the method is created
  // (can only be applied to either getter or setter - not both)
  console.log('STATIC GETTER/SETTER');
  console.log(classConstructor);
  console.log(propertyName);
  console.log(propertyDescriptor);
  console.log('###');

  // Return can be omitted
  return {
    // Use get/set OR value
    enumerable: true,
    configurable: true,
  };
}

// The class and the use of decorators

@ClassDecorator
export class Person {
  @PropertyDecorator
  name: string;
  surname: string;
  age: number;

  @StaticPropertyDecorator
  static staticProperty = 'STATIC PROPERTY VALUE';

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  @MethodDecorator
  method(@MethodParameterDecorator msg: string): string {
    return `${this.name} ${this.surname}: ${msg}`;
  }

  @StaticMethodDecorator
  static staticMethod(@StaticMethodParameterDecorator msg: string): string {
    return Person.staticProperty + ' - ' + msg;
  }

  get fullName(): string {
    return this.name + ' ' + this.surname;
  }

  @NormalGetterSetterDecorator
  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.surname = words.join(' ');
  }

  @StaticGetterSetterDecorator
  static get staticPropertyGetterSetter(): string {
    return Person.staticProperty;
  }

  static set staticPropertyGetterSetter(value: string) {
    Person.staticProperty = value;
  }
}

// Using the class

const person = new Person('John', 'Doe', 30);
person.fullName = 'John Smith';
const method = person.method('Hello world!');
const staticMethod = Person.staticMethod('Hello world!');
console.log(person);
console.log(method);
console.log(staticMethod);
console.log(Person.staticProperty);
