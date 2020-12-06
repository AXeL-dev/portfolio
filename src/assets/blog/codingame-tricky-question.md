I recently had to pass some technical tests on [Codingame](https://www.codingame.com/) & i got stuck on a question more than once, i tried to google it but i didn't find anything useful. So in the end, after 2 failures (on 2 tests), i succeeded on 3rd try! So let's talk about the problem & let's see how it can be solved.

⚠️ I mainly share this to remember it & to maybe help anyone who's searching for the solution (after passing the test of course 👀), in addition that my blog isn't SEO friendly so there is less chances that the solution reach a wide public.

<blockquote><h4>The question</h4></blockquote>

The **next** function returns the smallest integer, greater
than **n** having all its digits different from those of **n**.

For example **next(654321)** should return **700000**.

If such an integer does not exist, then the function must return **-1**.

**Write the body of the function next(n)**.

Note: **n** is a strictly positive integer less than 2^31.

```javascript
function next(n) {
  // Your code goes here
}

console.log(next(2)); // 3
console.log(next(3025)); // 4111
console.log(next(999)); // 1000
console.log(next(654321)); // 700000
```

<blockquote><h4>Analyzing the problem</h4></blockquote>

At first seen, it might seem like an easy problem, but don't be hasty! if you want, you can stop reading till here & try to solve it by yourself (then let me know how long it took you on the comment section).

Okay, so what we already know is that the **next** function has to return a number greater than the provided number, right? let's implement that:

```javascript
function next(n) {
  for (let next = n + 1; next < Number.MAX_VALUE; next++) {
    return next;
  }
}
```

Note: The above function will always return **n+1** since we didn't implement yet the digits check.

The next step is to get **n** & **n+1** digits & verify that all the digits are different. Good, but how can we get an integer number digits?

There is two main ways to do that & we gonna see both of them:

1. using the **%** (modulo) operator:

```javascript
function numberToDigits(n) {
  let digits = [];

  while (n > 0) {
    digits.push(n % 10);
    n = parseInt(n / 10);
  }

  return digits;
}
```

2. by converting the number to string, spliting the string to characters, then converting the characters back to integers, like so:

```javascript
function numberToDigits(n) {
  return n.toString().split('').map(c => parseInt(c));
}
```

I personally prefer to go with the string split way since it's shorter and easier to read (i didn't do a performance test so i don't know which one is faster, but i highly recommend you to do so).

Now, let's implement the digits check function:

```javascript
function hasDifferentDigits(numberDigits, nextDigits) {
  let isDifferent = true;

  nextDigits.forEach(d => {
    if (numberDigits.indexOf(d) !== -1) {
      isDifferent = false;
    }
  });

  return isDifferent;
}
```

Seems a bit longer, can we write a shorter version? Yes we can!

```javascript
function hasDifferentDigits(numberDigits, nextDigits) {
  return nextDigits.find(d => numberDigits.indexOf(d) !== -1) === undefined;
}
```

And here we are, let's wrap up all together:

```javascript
function next(n) {
  const digits = numberToDigits(n);
  for (let next = n + 1; next < Number.MAX_VALUE; next++) {
    const nextDigits = numberToDigits(next);
    if (hasDifferentDigits(digits, nextDigits)) {
      return next;
    }
  }
}

function numberToDigits(n) {
  return n.toString().split('').map(c => parseInt(c));
}

function hasDifferentDigits(numberDigits, nextDigits) {
  return nextDigits.find(d => numberDigits.indexOf(d) !== -1) === undefined;
}
```

Haven't we forget anything? 🤔

There is 2 missing things in fact!

The first is that we must return **-1** in case the next number is not found & the second thing is that **n** is strictly less than **2^31**.

<blockquote><h4>The final solution</h4></blockquote>

```javascript
function next(n) {
  const digits = numberToDigits(n);

  for (let next = n + 1; next < Math.pow(2, 31); next++) {
    const nextDigits = numberToDigits(next);
    if (hasDifferentDigits(digits, nextDigits)) {
      return next;
    }
  }

  return -1;
}

function numberToDigits(n) {
  return n.toString().split('').map(c => parseInt(c));
}

function hasDifferentDigits(numberDigits, nextDigits) {
  return nextDigits.find(d => numberDigits.indexOf(d) !== -1) === undefined;
}

console.log(next(2)); // 3
console.log(next(3025)); // 4111
console.log(next(999)); // 1000
console.log(next(654321)); // 700000
```

This is for sure not the only or best solution, it's my own implementation & you may find a better one! If so, please let me know in the comment section below 😉.

<blockquote><h4>My feedback about Codingame</h4></blockquote>

Generally not bad, but here is some things that should be reviewed in my opinion:

- For some questions you don't even have the time to read the question (or the given choices), like imagine that you have 20 seconds to read a question of 4 lines + 4 choices with an average of 2-3 lines per choice, in sum you have to read 12 to 16 lines in 20-30 sec. Let's also imagine that you didn't read the question well & have to read it again => RIP ⚰️.

**My mind**: dumb you.. just answer at the same time as reading 💡👀.

**Me**: yeah, what a genius.. but i'm not a thinking machine with a dual processor 🙄.

- Also, there is no way to pause the test or to get a 5 min rest during a test of 1 hour and half..

**Suggestions**: Can add a prompt after the question timer end which asks the user if he want to continue or to take a rest for example (only for long time tests). Or even better: a rest system, which gives the user the option to freely take 2 / 3 rests during the test (but only after the end of the current question), the rest time may also be calculated in a way that the candidate get warned if ever he exceeded it.
