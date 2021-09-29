A few days ago, my work mate showed me a neat trick to copy any saved password to the clipboard without having to reveal it & i was quite impressed by this technique, so i decided to share it here on my blog, since it can be really useful.

Alright, so the trick is very simple, you just have to select the password field input & inspect it within the browser dev-tools, then press the ESC key to open the console & type the following command:

<br/>

```bash
copy($0.value)
```

Finally, hit enter.

![copy-password-tip-1](./assets/img/posts/copy-password-tip-1.png)

![copy-password-tip-2](./assets/img/posts/copy-password-tip-2.png)

Now your password is in the clipboard 🤫 & you can paste it anywhere you want.

**Credits**:

[midrissi](https://github.com/midrissi)
