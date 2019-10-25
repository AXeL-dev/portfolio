The other day i was rolling through some JavaScript code until i came across a line like the following:

```csharp
return !!value;
```

Unless you have been using JavaScript for a while this may look like some strange syntax. But it is really a shorthand way to **convert any value to a boolean**.

The syntax leverages a little sorcery by doubling up the not operator.

So let's dive a little deeper into the JavaScript not logical operator and examine truthfulness in JavaScript.

You see JavaScript has a 'quirk'. It converts values to a string representation or at least something like the string version. This can lead to all sorts of unexpected results when you try to compare variables, especially when they are essentially different types. This is why I always use strict comparisons which is a tripple equals.

You may hear the terms truthy and falsey, which were coined by Douglas Crockford in his [JavaScript the Good Parts book](https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742). And that is where I will start this tutorial.

<blockquote><h4>A Quick Review of JavaScript Truthy & Falsy</h4></blockquote>

First there are two evaluation values associated with any JavaScript variable:

- **Truthy is anything that evaluates to TRUE**
- **Falsey is anything that evaluates to FALSE**

Simple enough right?

There are 6 things that evaluate to falsey:

- **undefined**
- **null**
- **NaN**
- **0**
- **"" (empty string)**
- **false**

Believe it or not the best way to determine if something is truthy is to determine if it is falsey.

Are you following along? Don't worry, it will make sense.

First, all objects are truthy, so you can wrap any value in an object and it will be truthy, even when it is falsey by default.

If you use a traditional '==' for comparisons you may not compare the values you think you are. JavaScript actually does type coercion, which is not good. It can mask errors, which means you could be naively be creating bugs in your application.

This is why i highly recommend you do as well, always use strict comparisons. This means you need to use a triple '=' or '!' test.

This all matters when you need to evaluate a value's truthness. For example an if statement.

```csharp
if (0) {
	// this will never execute
}
```

When you need to convert a truthy or falsey value to a real boolean value the not operator (!) is your friend.

<blockquote><h4>The JavaScript Not Operator (!)</h4></blockquote>

Lets revisit the previous example and change it so the if statement evaluates to true:

```csharp
if (! 0) {
	// this will execute
}
```

The ! operator reverses the logical (true or false) state of the value. In this case it is the truthy or falsey value. This may seem odd, but it can be useful.

```csharp
if (! myValue) {
	// do something
}
```

Basically you can use this to execute some code if the variable evaluates to a false state.

<blockquote><h4>Create Real Booleans Using a !! Double Negative (not)</h4></blockquote>

The single ! converts a value to its truthy or falsey value, which is technically a boolean. But if you need to get a real boolean representation of a value for your expression you must convert it to a real boolean value using a double not, !!.

In reality you are converting a value to a boolean primative, not just its truthy|falsey value.

Some say the way to remember this trick is, “bang bang, you’re boolean” 😅. A little geek play on words.

This is where a double not is your friend. And it also makes you look like a rock star programmer.

```csharp
if (!! 0) { // evaluates to false
	// this will not execute
}
```

But that is not much different than the original example. I know, but at the same time, would you ever use a hard coded value as an if conditional?

No, you would use a variable.

```csharp
let v = 0;

v ? true : false  // equals false
!v ? true : false  // equals true
!!v // false

v = 1;

v ? true : false  // equals true
!v ? true : false  // equals false
!!v // true

typeof !!v // boolean
```

<blockquote><h4>Wrapping Things Up</h4></blockquote>

Ok, I hope your developer brain is not spinning too bad. But the core concept of JavaScript truthy and falsey states is a fundamental JavaScript concept you must master.

The double not statement is a great trick to convert any variable to a true or false value you can use to evaluate as an expression.

Plus it will make you look like a great developer!

[source](https://love2dev.com/blog/javascript-not-operator/)
