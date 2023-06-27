If you didn't hear before about the [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) & [Reflect](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect) APIs in javascript, then you are in the right place, let's discover them!

<blockquote><h4>So.. What is the Proxy pattern?</h4></blockquote>

In computer programming, the proxy pattern is a [software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern). A **proxy**, in its most general form, is a class functioning as an interface to something else. In short, a proxy is a wrapper or agent object that is being called by the client to access the real serving object behind the scenes. <small>source <a href="https://en.wikipedia.org/wiki/Proxy_pattern" target="_blank">wikipedia</a></small>

<blockquote><h4>Okay, but i still don't see the utility of a proxy..</h4></blockquote>

Well at first, design patterns are made to solve common "design" problems that the most of developers may face, additionally design patterns can enhance your code quality & help you to easily maintain your project/codebase.

Therefore, we are going to explore the javascript Proxy object more in details so that you better understand where & when you can use it.

<blockquote><h4>Basic example</h4></blockquote>

```typescript
const car = { model: 'Volkswagen' };

const carProxy = new Proxy(car, {
  get: (obj, property) => {
    if (property in obj) {
      return obj[property];
    } else {
      throw new Error(`Property "${property}" does not exist.`);
    }
  },
});

// calling props directly from the car object
console.log(car.model); // 'Volkswagen'
console.log(car.image); // undefined

// calling props through the car proxy
console.log(carProxy.model); // 'Volkswagen'
console.log(carProxy.image); // Uncaught Error: Property "image" does not exist.
```

In the example above, we first created a simple car object with a single property "model", then created a proxy for our car object & passed a custom getter to our proxy, the getter simply returns the properties of the car object if found, otherwise it throws an error.

Without the proxy, our script returns an "undefined" value by default, but when using the proxy we can customize how our object will behave in different cases like when calling an unexisting property.

<blockquote><h4>Data validation example</h4></blockquote>

Let's take our previous example & enhance it to add some validation on our car "model" when we try to change its value:

```typescript
const car = { model: 'Volkswagen' };

const carProxy = new Proxy(car, {
  get: (obj, property) => {
    if (property in obj) {
      return obj[property];
    } else {
      throw new Error(`Property "${property}" does not exist.`);
    }
  },
  set: (obj, property, value) => {
    if (property === 'model' && typeof value !== 'string') {
      throw new Error(`Property "${property}" only accepts string values.`);
    } else {
      return Reflect.set(obj, property, value);
    }
  },
});

car.model = true;
console.log(car.model); // true

carProxy.model = true; // Uncaught Error: Property "image" does not exist.
console.log(carProxy.model); // 'Volkswagen'
```

You may notice that we used the **Reflect** API to set the value of the object property. Don't panic, we're going to see this in the next chapter.

<blockquote><h4>The Reflect API</h4></blockquote>

[Reflect](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect) is a global object that offers numerous utility functions overlapping with the [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) class, enabling you to invoke object methods, get and set object property values, construct objects, extend and manipulate properties.

Below some examples of what you can do with it:

```typescript
const car = { model: 'Volkswagen' };

Reflect.has(car, 'model'); // true

Reflect.has(car, 'image'); // false

Reflect.get(car, 'model'); // 'Volkswagen'

Reflect.ownKeys(car); // ['model']
```

<blockquote><h4>Little bonus</h4></blockquote>

As a final bonus, let's see how you can make your proxies reusable by wrapping them inside a function:

```typescript
function applyProxy(obj) {
  return new Proxy(obj, {
    get: (obj, property) => {
      console.log(`${property} = ${obj[property]}`);
      return Reflect.get(obj, property);
    },
    set: (obj, property, value) => {
      console.log(`${property} value changed to "${value}"`);
      return Reflect.set(obj, property, value);
    },
  });
}

const carProxy = applyProxy({ model: 'Volkswagen' });
alert(carProxy.model); // model = Volkswagen
carProxy.model = 'BMW'; // model value changed to "BMW"
```

Happy coding! 👨‍💻
