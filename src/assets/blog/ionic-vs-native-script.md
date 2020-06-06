Have been working with [Ionic](https://ionicframework.com/) for a while and always looking for new technologies & alternatives, i discovered [NativeScript](https://nativescript.org/), a pretty cool alternative to Ionic when it comes to develop mobile apps. So let's see what are the main differences & where the two succeed and fail.

So, the main difference that i noticed between those two frameworks is **performance**, yes.. Ionic tends to run the app inside a [Webview](https://developer.android.com/reference/android/webkit/WebView) (which is kind of a small browser app) & uses some [Cordova](https://cordova.apache.org/) plugins to interact/communicate with the native phone APIs/functionalities. This is what we generally call a Hybrid app or a [Cross Platform app](https://en.wikipedia.org/wiki/Cross-platform_software). Native script in the other hand uses native Android/iOS APIs & has its own collection of additional plugins & templates.

Below, some further criterias & notations for a better comparison:

<br>

 Criteria                                 | Ionic | Native Script | Notes
------------------------------------------|-------|---------------|--------------------------------------------------
Learning curve                            |   ✔   |       ✔       | Not so long as long as you're familiar with **Javascript** including libraries & frameworks, especially Angular, Vue or React.
Documentation                             |   ✔   |       ✔       | Well, i think that both of the frameworks are well documented.
App samples                               |   ✗   |       ✔       | It's not easy at all to find some good app examples based on Ionic, while with Native Script, they have a [dedicated web page](https://market.nativescript.org/?tab=samples&framework=angular&category=all_samples) for that.
Performance                               |   ✗   |       ✔       | As i said above, Ionic apps performance is really bad especially on old phones.
Full-featured                             |   ✔   |       ✔       | Ionic relies on Cordova plugins, which may become a hassle later if an **X** plugin is not available for example or do not support some native features.
Popularity                                |   ✔   |       ✔       | Ionic is maybe more popular?
Community                                 |   ✔   |       ✔       | Good! just ask stackoverflow x)
Growth                                    |   ✔   |       ✔       | Ionic is growing faster 🚀
Various Platforms support                 |   ✔   |       ✔       | Ionic supports more platforms than Android & iOS.
Easy debugging & unit testing             |   ✔   |       ✔       | I didn't go deep further in my tests, but since they both support Angular, the debugging & testing part should be okay
**Results**:                              |   8   |       10      | Native Script wins, but Ionic isn't that bad.

<br>

"Et voilà" ✨, that was only my own opinion about those great mobile technologies, if you have any remarks or suggestions you can leave them in the comment section below 😉.
