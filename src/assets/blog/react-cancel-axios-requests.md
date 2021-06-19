It have been a while that i didn't publish any new posts 😬, mainly due to my occupation & maybe 'cause i like coding more than blogging, this said, i'll try to contribute more to this blog in the next decade, hoping that the things i'm sharing here would be helpful to the few people that may end up reading my blog posts.

So, before diving into our main subject, let's talk a little bit about React.

React is one of the most famous js libraries i've been using for the last couple of years, mainly because it's widely popular & has a huge collection of free ui/component libraries, & certainly because it is continuously evolving, bringing more & more features that makes our life easier as js developers.

One of the most recent additions to React are [hooks](https://reactjs.org/docs/hooks-intro.html), & to give you a quick look, hooks are simply a more flexible way to share logic & avoid redundancy in your functional components. Not so clear? Hopefully! we are going to see a live example of how react hooks can become really handy when it comes to sharing the components logic, so just keep going on!

Let's create a simple component that fetchs data from Github API using [Axios](https://axios-http.com/):

```javascript
import * as React from 'react';
import axios from 'axios';

const Example = () => {
  const handleClick = async () => {
    try {
      // send request
      const response = await axios.get('https://api.github.com/users/axel-dev/repos');

      // handle request success
      if (response.status === 200) {
        console.log('data:', response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={handleClick}>fetch</button>;
};
```

Seems pretty easy, right? now what happens if the user keeps clicking on the fetch button 🤔? obviously, on each new click a new request will be performed, & honnestly this is bad, especially for the component rendering, since each response from the server may trigger a new render which would keep changing the displayed data without a way to stop or cancel this process until all the requests are done.

Alright, i just said that there is no way to stop that 👀, but in fact there is different approaches to fix that:

**1.** We can simply add a disabled state which will disable the fetch button while the request is still on going (i'm not going to demonstrate that here since it's quite easy to implement).

**2.** Use [axios cancel token API](https://axios-http.com/docs/cancellation), & this is what we gonna see in the next example:

```javascript
import * as React from 'react';
import axios from 'axios';

const Example = () => {
  const axiosSource = React.useRef(null);

  // cancels previous axios request
  const cancelPreviousRequest = () => {
    if (axiosSource.current) {
      axiosSource.current.cancel('aborted!');
    }
  };

  // also cancel request if component is unmounted
  React.useEffect(() => {
    return () => cancelPreviousequest();
  }, []);

  const handleClick = async () => {
    // cancel previous request first
    cancelPreviousRequest();

    // get cancel token source
    axiosSource.current = axios.CancelToken.source();

    try {
      // send request with a new cancel token
      const response = await axios.get('https://api.github.com/users/axel-dev/repos', {
        cancelToken: axiosSource.current.token,
      });

      // handle request success
      if (response.status === 200) {
        console.log('data:', response.data);
      }
    } catch (err) {
      // handle request errors, ignore if canceled
      if (axios.isCancel(err)) return;
      console.error(err);
    }
  };

  return <button onClick={handleClick}>fetch</button>;
};
```

**Note**: This is for sure not the best use case for request cancellation, when you have buttons it might be better to disable them, but with a search input for example, we cannot disable the input while the user is still typing, & this is where cancellation becomes really handy trust me ✌️!

Cool! what about consolidating all this into a custom hook? so we can re-use the same cancellation logic on any other component, won't it be more easy? in fact, that's a brilliant idea & this is what [react-use-cancel-token](https://github.com/AXeL-dev/react-use-cancel-token) hook is made for!

First we need to install it as a dependency using:

```bash
npm install --save react-use-cancel-token
```

Next, let's update our component:

```javascript
import * as React from 'react';
import axios from 'axios';

import useCancelToken from 'react-use-cancel-token';

const Example = () => {
  // all the cancellation logic has been moved to the useCancelToken hook
  const { newCancelToken, cancelPreviousRequest, isCancel } = useCancelToken();

  const handleClick = async () => {
    // cancel previous request first
    cancelPreviousRequest();

    try {
      // send request with a new cancel token
      const response = await axios.get('https://api.github.com/users/axel-dev/repos', {
        cancelToken: newCancelToken(),
      });

      // handle request success
      if (response.status === 200) {
        console.log('data:', response.data);
      }
    } catch (err) {
      // handle request errors, ignore if canceled
      if (isCancel(err)) return;
      console.error(err);
    }
  };

  return <button onClick={handleClick}>fetch</button>;
};
```

WDYT? Looks pretty much easy to read now & we've fairly reduced the component code by the quart! (-12 lines)

Let's now have a look at the `useCancelToken` hook:

```javascript
import * as React from 'react';
import { CancelToken, isCancel } from 'axios';

const useCancelToken = () => {
  // holds the axios cancel token source
  const axiosSource = React.useRef(null);

  // creates a new cancel token
  const newCancelToken = () => {
    axiosSource.current = CancelToken.source();
    return axiosSource.current.token;
  };

  // cancels any previous axios request
  const cancelPreviousRequest = (message) => {
    if (axiosSource.current) axiosSource.current.cancel(message);
  };

  // handle request cancellation on component unmount
  React.useEffect(() => cancelPreviousRequest, []);

  return { newCancelToken, cancelPreviousRequest, isCancel };
};
```

Pretty decent! 😊 still not the best way to handle queries in React 😎.

If you feel like you wanna learn more about this & discover new techniques, i highly encourage you to check the [react-query](https://react-query.tanstack.com/) library, which provides a more powerful way to fetch, cache and update your data.

That's it! you arrived to the end of this short tutorial? 😁 see you in a next one 😉.

**Credits**:

The `useCancelToken` hook was heavily inspired from [tmns post on dev.to](https://dev.to/tmns/usecanceltoken-a-custom-react-hook-for-cancelling-axios-requests-1ia4), many thanks to him & to all the dev.to community!
