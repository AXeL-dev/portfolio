Top 10 Symfony interview questions and answers, these questions are designed for **Symfony Programmers** who are preparing for an interview on Symfony Framework. If you have more interview questions, please post them in the comment section, it may helps other programmers to crack their interview. Thanks and best of Luck for your interview :)

<blockquote><h5><strong>1.</strong> What is Symfony?</h5></blockquote>

_**Symfony**_ is a set of PHP Components and leading PHP framework to create websites and dynamic web applications. It follows MVC design pattern and released under the MIT License.

<blockquote><h5><strong>2.</strong> Which template engine Symfony Supports?</h5></blockquote>

Symfony default template engine is _**Twig**_, however, your are free to use plain PHP code if you want.

<blockquote><h5><strong>3.</strong> What are bundles in Symfony?</h5></blockquote>

Symfony bundle are very similar to plugins or packages in other frameworks or CMS. In Symfony, everything is a bundle from core framework components to code you write. The bundle gives the flexibility to use pre-built features packaged in third-party bundles or to create and distribute your own bundles.

There are two types of bundles available in Symfony:

- **1.** Application-specific bundles: only used to build your application.
- **2.** Reusable bundles: meant to be shared across many projects.

<blockquote><h5><strong>4.</strong> Is Symfony a configuration or convention based Framework?</h5></blockquote>

Symfony is convention based Framework.

<blockquote><h5><strong>5.</strong> How to get the current route in Symfony Framework?</h5></blockquote>

You can get current route in Symfony using _**$request->get(‘_route’);**_ method.

<blockquote><h5><strong>6.</strong> How to set and get Session in Symfony?</h5></blockquote>

SessionInterface object set and get method is used to set and get sessions in Symfony. Look the below example:

```csharp
public function sessionAction(SessionInterface $session)
{
    // store an attribute for reuse during a later user request
    $session->set('user_id', 5);

    // get the attribute set by another controller in another request
    $user_id = $session->get('user_id');  
}
```

<blockquote><h5><strong>7.</strong> How to get the request parameters in symfony?</h5></blockquote>

_**$request->query->get(‘paraemeter_name’)**_ method is used to get the request parameters in Symfony.

<blockquote><h5><strong>8.</strong> What is the method name in the Kernel class to enable bundles in Symfony?</h5></blockquote>

Kernel’s class registerBundles() method is used to enable bundles in Symfony.

<blockquote><h5><strong>9.</strong> What are Descriptors in Symfony?</h5></blockquote>

Descriptors are objects to render documentation on Symfony Console Apps.

<blockquote><h5><strong>10.</strong> What Rules do you follow at the time of creating methods within the controller in Symfony?</h5></blockquote>

General rules for creating a method within the controller are:

- Only action methods should be public.
- Controller methods should be short; if your controller is long, consider refactoring it.
- Action methods must have the “Action” suffix
- Action methods should return a valid response object

[source](https://www.onlineinterviewquestions.com/symfony-interview-questions/)
