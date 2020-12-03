
During my quest to discover <a href="https://www.typescriptlang.org/" target="_blank">typescript</a> more deeper, i came across some interesting typescript decorators examples and i thought it was worth sharing.

<blockquote><h4>So.. What are decorators?</h4></blockquote>

A **Decorator** is a design pattern that allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class. <small>source <a href="https://en.wikipedia.org/wiki/Decorator_pattern" target="_blank">wikipedia</a></small>

If you find this definition too ambigious, don't worry, you'll get a better understanding after seeing the examples below.

<blockquote><h4>Decorators types</h4></blockquote>

Oh yeah, there is multiple <a href="https://www.typescriptlang.org/docs/handbook/decorators.html" target="_blank">types of decorators</a>, but we gonna mainly see 3 of them here:

- Class decorators
- Property decorators: for properties inside classes
- Method decorators: for methods inside classes

<blockquote><h4 id="class-decorators">Class decorators</h4></blockquote>

A Class Decorator is declared just before a class declaration. The class decorator is applied to the constructor of the class and can be used to observe, modify, or replace a class definition.

Example:

```typescript
const classDecorator = (target: Function) => {
  // do something with your class
};

@classDecorator
class Rocket {}
```

Now, we can for example extend the **Rocket** class & add a **fuel** property with a default value of **100**, like so:

```typescript
const addFuelToRocket = (target: Function) => {
  return class extends target {
    fuel: number = 100;
  }
};

@addFuelToRocket
class Rocket {}

const rocket = new Rocket();
console.log(rocket.fuel); // 100
```

<blockquote><h4 id="property-decorators">Property decorators</h4></blockquote>

A Property Decorator is declared just before a property declaration.

Example:

```typescript
const propertyDecorator = (target: Object, propertyKey: string) => {
  // do something with your property
};

class Rocket {
  @propertyDecorator
  fuel: number = 50;
}
```

Let's set a minimum value for **fuel** using our property decorator:

```typescript
const minValue = (min: number) => (target: Object, propertyKey: string) => {
  let value: number;
  Object.defineProperty(target, propertyKey, {
    get: () => value,
    set: (newValue: number) => {
      if (newValue < min) {
        console.warn(`Provied value is lower than ${min}`);
      } else {
        value = newValue;
      }
    }
  }); 
};

class Rocket {
  @minValue(0)
  fuel: number = 50;
}

const rocket = new Rocket();
console.log(rocket.fuel); // 50
rocket.fuel = -1; // Provied value is lower than 0
console.log(rocket.fuel); // 50
rocket.fuel = 100;
console.log(rocket.fuel); // 100
```

<a href="https://www.w3schools.com/js/js_object_es5.asp" target="_blank">Object.defineProperty</a> is used to set a custom getter & setter for our property. Also, notice that we've put the decorator function inside a wrapper function, this is what we call a <a href="https://www.typescriptlang.org/docs/handbook/decorators.html#decorator-factories" target="_blank">decorator factory</a>.

```typescript
// Decorator factory shorthand (using arrow functions)
const myDecorator = (value: any) => (target: Object, propertyKey: string) => {
  // do something
};

// Without arrow functions (might be clearer)
const myDecorator = function (value: any) { // our factory function
  return function (target: Object, propertyKey: string) { // our decorator function
    // do something
  }
};
```

The decorator factory is responsible of passing parameters to the decorator & returning the decorator function as a return value.

<blockquote><h4 id="method-decorators">Method decorators</h4></blockquote>

A Method Decorator is declared just before a method declaration. The decorator is applied to the Property Descriptor for the method, and can be used to observe, modify, or replace a method definition.

Example:

```typescript
const myDecorator = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) =>  {
  // do something with your method
};

class Rocket {
  @myDecorator
  launch() {
    console.log("Launching rocket in 3... 2... 1... 🚀")
  }
}
```

Let’s say that to launch our rocket to Mars, the **fuel** level must be above 100.

```typescript
const minimumFuel = (fuel: number) => (
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value; // save our original method

  descriptor.value = function (...args) { // set a custom method (we use a normal function for "this" binding)
    if (this.fuel > fuel) {
      originalMethod.apply(this, args); // call original method
    } else {
      console.log("Not enough fuel!");
    }
  };

  return descriptor;
};

class Rocket {
  fuel = 50;

  @minimumFuel(100)
  launchToMars() {
    console.log("Launching to Mars in 3... 2... 1... 🚀");
  }
}

const rocket = new Rocket();
rocket.launchToMars(); // Not enough fuel!
```

I hope you noticed that we used a decorator factory to pass the minimum fuel parameter to our decorator, like we did on the property decorator example.

<blockquote><h4>Real world examples</h4></blockquote>

- **Catch** Decorator: can be used to catch errors at runtime.

```typescript
const Catch = (target: Object, key: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args) {
    try {
      return await originalMethod.apply(this, args);
    } catch (error) {
      console.warn(error.message);
      alert(error.message);
    }
  };

  return descriptor;
};

class Foo {
  @Catch
  bar() {
    unexistingFunction(); // we are calling an unexisting function which should throw an error
  }
}

const foo = new Foo();
foo.bar(); // unexistingFunction is not defined
```

<br>

- **Authorized** Decorator: check the user role before executing the desired method.

```typescript
enum Roles {
  Admin = 'admin',
  Guest = 'guest'
}

const Authorized = (...roles: Roles[]) => (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args) {
    if (roles.indexOf(this.role) !== -1) {
      return await originalMethod.apply(this, args);
    } else {
      console.warn("Access denied!");
    }
  };

  return descriptor;
};

class User {
  role: Roles;

  constructor(role: Roles) {
    this.role = role;
  }

  @Authorized(Roles.Guest, Roles.Admin)
  read() {
    // read logic..
    console.log("User read success!");
  }

  @Authorized(Roles.Admin)
  add() {
    // add logic..
    console.log("User add success!");
  }
}

const user = new User(Roles.Guest);
user.read(); // User read success!
user.add(); // Access denied!

const admin = new User(Roles.Admin);
admin.read(); // User read success!
admin.add(); // User add success!
```

<br>

- **Duration**: calculate the execution time of a specific method.

```typescript
const Duration = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    const startTime = performance.now();
    const result = originalMethod.apply(this, args);
    const endTime = performance.now();
    const timespan = endTime - startTime;

    console.log(`${timespan} ms`);

    return result;
  }

  return descriptor;
};

const AsyncDuration = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = async function(...args: any[]) {
    const startTime = performance.now();
    const result = await originalMethod.apply(this, args);
    const endTime = performance.now();
    const timespan = endTime - startTime;

    console.log(`${timespan} ms`);

    return result;
  }

  return descriptor;
};

class Foo {
  @Duration
  bar() {
    const end = Date.now() + 2000;
    while (Date.now() < end) continue;
  }

  @AsyncDuration
  asyncBar() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 3000);
    });
  }
}

const foo = new Foo();
foo.bar(); // 2000 ms
foo.asyncBar(); // 3000 ms
```

<blockquote><h4>Do i really need all this?</h4></blockquote>

In fact, following good practices & opting for design patterns, even if it may seems complex, would help you to boost up your skills & code in a cleaner & better way.
Trust me, once your code will exceed the 1000 lines you'll slowly start to feel it complex to read & maintain, the reason why you, as a developer, have to take advantage of design patterns & keep your code easy to read as much as you can.

**Sources**:

- [Angular decorators](https://ultimatecourses.com/blog/angular-decorators#angular-decorators)
- [Better errors handling for ES/Typescript classes](https://blog.bitsrc.io/errors-handling-for-vue-class-components-2f152f7c7515)
- [A practical guide to TypeScript decorators](https://blog.logrocket.com/a-practical-guide-to-typescript-decorators/)
- [TypeScript Decorators by Example](https://fireship.io/lessons/ts-decorators-by-example/)
