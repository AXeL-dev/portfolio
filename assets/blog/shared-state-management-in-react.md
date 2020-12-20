One of the most common cases that you may face when using [React](https://reactjs.org) is shared state management, which consist on sharing a state between multiple components & being able to modify that state from any parent or child component.

While other frameworks like [Angular](https://angular.io) provide an easier way to share state between components through [services & dependency injection](https://angular.io/guide/architecture-services#introduction-to-services-and-dependency-injection), React in the other hand doesn't have a simple & code-less way to do this, still there some native methods like [hooks & context API](https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c), but in case you didn't heard about them before, you may find yourself rewriting the whole code of your application to implement them.

In the other hand, React eco-system is super rich 🤩 & there is many thirdparty libraries that you can use to manage state, like:
- [Redux](https://redux.js.org/)
- [MobX](https://mobx.js.org/)
- [Recoil](https://recoiljs.org/)

& many others, you can find a complete list [here](https://github.com/cs01/awesome-react-state-management-tools).

Cool! so, why am i telling you all this? 🤔 Good question! In fact, i was recently working on the [youtube viewer](https://github.com/AXeL-dev/youtube-viewer) extension & i had troubles to share state between my components, or more exactly to manage the shared state, to give you a better taste let's take the following example:

```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Create our parent component
function App() {
  const [text, setText] = useState('Hello World!');

  return <Welcome text={text} />;
}

// Create our child component
function Welcome(props) {
  return <h1>{props.text}</h1>;
}

// Render our parent component
ReactDOM.render(<App />, document.getElementById('root'));
```

Nothing special here, we just created an **App** component which passes a **text** property to its child component named **Welcome**. The child component then displays the text property in a headline tag.

Now, if we want to modify the **text** property from the **Welcome** component, we have to add a new property on the parent **App** component & bind this property with the **setText** function like so:

```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Create our parent component
function App() {
  const [text, setText] = useState('Hello World!');

  return <Welcome text={text} onTextChange={setText} />;
}

// Create our child component
function Welcome(props) {
  const [value, setValue] = useState('');

  return (
    <div>
      <h1>{props.text}</h1>
      <input type="text" placeholder="type some text" value={value} onChange={(event) => setValue(event.target.value)} />
      &nbsp;
      <button type="button" onClick={() => props.onTextChange(value)}>Change text</button>
    </div>
  );
}

// Render our parent component
ReactDOM.render(<App />, document.getElementById('root'));
```
As you can see, we've added a text input which is binded to a local state named **value** & used that state to update the main **text** state on our parent component when clicking on the "Change text" button.

Notice that trying to update the **text** property directly using something like: <span style="background-color: #212121; color: #EEFFFF; padding: 0 5px; border-radius: 3px; font-size: 14px">`onClick={() => props.text = value}`</span> will throw the following error: <span style="color: red">TypeError "text" is read-only</span>.

Okay, now let's imagine that we want to change **10** properties from within the child component, do you see how much properties we have to add to the parent component to achieve this? Yeah, we'll have to add **10** other properties & we'll easily find ourselves with a huge component of **20** properties in the total 😆, in addition that the state update logic will always land on the parent component which is not handy in my opinion.

No worries, here comes shared state management to the rescue! but wait a minute.. which method/library to choose? 🤔 In fact, it all depends on your app scale & needs, if you're working on a large scale app, i recommand you to go with a robust state management library like **redux** or **recoil**, if not then you can use any library or method that fits well to your needs.

In my case i tried 2 libraries ([hookstate](https://hookstate.js.org/) & [jotai](https://github.com/pmndrs/jotai)) & finally decided to go with **jotai** 'cause it has a simple API, supports [Typescript](https://www.typescriptlang.org/) & suits to my app needs.

Let's see how we can use **jotai** to handle our shared state based on the previous example:

```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider, atom, useAtom } from 'jotai';
import { useUpdateAtom } from 'jotai/utils';

// Create our atom
const textAtom = atom('Hello World!'); // this is our shared state

// Create our parent component
function App() {
  const [text] = useAtom(textAtom); // we replaced React's useState with jotai's useAtom

  return <Welcome text={text} />;
}

// Create our child component
function Welcome(props) {
  const [value, setValue] = useState('');
  const setText = useUpdateAtom(textAtom); // shared state update lands on the child component now

  return (
    <div>
      <h1>{props.text}</h1>
      <input type="text" placeholder="type some text" value={value} onChange={(e) => setValue(e.target.value)} />
      &nbsp;
      <button type="button" onClick={() => setText(value)}>Change text</button>
    </div>
  );
}

// Render our parent component
ReactDOM.render((
  <Provider>
    <App />
  </Provider>
), document.getElementById('root'));
```

The biggest advantage is that we don't need to delegate our props update tasks to the parent component anymore! 🎉 Which seems more readable & maintainable, especially when dealing with multiple components.

That's it! you arrived to the end of this post, i hope that you learned something new & hope to see you in a next one!

You can also check out:

- [The Unstated React Service Pattern](https://hmh.engineering/the-unstated-react-service-pattern-786ea6168d1d)
