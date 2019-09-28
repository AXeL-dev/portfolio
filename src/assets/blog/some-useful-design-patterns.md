As a developer, you are constantly **resolving problems**. Many of these problems probably were **already solved by other developers**, so, why do we need to solve them again?

You have a problem, specifically a **common problem**, so, you try to find out if anyone already did the job solving, before you try to resolve it, right? You probably don't want to **reinvent the wheel**, do ya? **Design patterns** are there for these situations. Unfortunately there are a lot of developers who still refuse to use a few patterns, mostly because they just don't know them or even don't know how to fit those patterns into some problems.

The main question that every developer ask before using design patterns is: **are design patterns really that important?** Someone could make a big explanation about this, but, I'll be succinct: **yes, they are**. And I'm going to list three main reasons:

- It saves your time. You don't need to use your brain to ~re~create a possible solution from nowhere and lose lots of time;
- Design patterns are well-known. When you say: "_I used a factory to create that object_" everyone will understand what you are talking about;
- Most of these patterns are easy to understand. Probably your solution will be not as elegant and easy as a design pattern.

Okay, so I'm going to talk about the most useful design patterns and explain in which situations you should use them. :)

<blockquote><h4>Singleton</h4></blockquote>

This is the most used pattern. A lot of frameworks already implement this pattern. Below, a simple example of how to implement it:

```csharp
class SingletonSample
{
   private static $instance = null;

   private function __construct() { }

   public static function getInstance() {
      if (self::$instance == null) {
          self::$instance = new SingletonSample();
      }
      return self::$instance;
   }
}
```

There is no secret. You need an object that only needs to be instantiate once, so, you can use a singleton. The class needs to declare a private constructor to prevent people to instantiate it from outside the class. Also, you need to declare a static field. The method getInstance() assures that only one instance of this class is created at runtime.

<blockquote><h4>Factory</h4></blockquote>

One of the most commonly used design patterns is the factory pattern. In this pattern, a class simply creates the object you want to use. Consider the following example of the factory pattern:

```csharp
class Automobile
{
    private $vehicleMake;
    private $vehicleModel;

    public function __construct($make, $model) {
        $this->vehicleMake = $make;
        $this->vehicleModel = $model;
    }

    public function getMakeAndModel() {
        return $this->vehicleMake . ' ' . $this->vehicleModel;
    }
}

class AutomobileFactory
{
    public static function create($make, $model) {
        return new Automobile($make, $model);
    }
}

// have the factory create the Automobile object
$veyron = AutomobileFactory::create('Bugatti', 'Veyron');

print_r($veyron->getMakeAndModel()); // outputs "Bugatti Veyron"
```

This code uses a factory to create the Automobile object. There are two possible benefits to building your code this way; the first is that if you need to change, rename, or replace the Automobile class later on you can do so and you will only have to modify the code in the factory, instead of every place in your project that uses the Automobile class. The second possible benefit is that if creating the object is a complicated job you can do all of the work in the factory, instead of repeating it every time you want to create a new instance.

Using the factory pattern isn’t always necessary (or wise). The example code used here is so simple that a factory would simply be adding unneeded complexity. However if you are making a fairly large or complex project you may save yourself a lot of trouble down the road by using factories.

<blockquote><h4>Fluent Interface / Method Chaining</h4></blockquote>

Some objects require lots of parameters to be created. In this case, either using the constructor to create this object or using the setters will make our code ugly and hard to understand.

Fluent interface can help us in this case, to write code like this:

```csharp
$programmer->born()->eat()->sleep()->code()->die();
```

Instead of:

```csharp
$programmer->born();
$programmer->eat();
$programmer->sleep();
$programmer->code();
$programmer->die();
```

Implementation example:

```csharp
class Person
{
  private $_name;
  private $_sex;
  private $_age;
  private $_height;
  private $_weight;

  public function name($name) {
    $this->_name = $name;
    return $this;
  }

  public function sex($sex) {
    $this->_sex = $sex;
    return $this;
  }

  public function age($age) {
    $this->_age = $age;
    return $this;
  }

  public function height($h) {
    $this->_height = $h;
    return $this;
  }

  public function weight($w) {
    $this->_weight = $w;
    return $this;
  }

  public function save() {
    $properties = get_object_vars($this);
    $str = '';
    foreach ($properties as $property) {
        $str .= $property.' ';
    }
    return $str;
  }
}
```

Now we can call the methods on the object of Person like:

```csharp
$p = new Person();
$res = $p->name('Sonia')->sex('Female')->age('30')->height('5.8')->weight('51')->save();
echo $res; // outputs "Sonia Female 30 5.8 51"
```

<blockquote><h4>Dependency Injection / Inversion Of Control</h4></blockquote>

In simple terms, **Dependency Injection** is a design pattern that helps avoid hard-coded dependencies for some piece of code or software.

The dependencies can be changed at run time as well as compile time. We can use Dependency Injection to write modular, testable and maintainable code:

- **Modular**: The Dependency Injection helps create completely self-sufficient classes or modules
- **Testable**: It helps write testable code easily eg unit tests for example
- **Maintainable**: Since each class becomes modular, it becomes easier to manage it

We have dependencies almost always in our code. Consider the following example which is pretty common:

```csharp
class User 
{
    private $database = null;

    public function __construct() {
        $this->database = new database('host', 'user', 'pass', 'dbname');
    }

    public function getUsers() {
        return $this->database->getAll('users');
    }
}

$user = new User();
$user->getUsers();
```

This code above has these problems:

- The class _User_ has implicit dependency on the specific _database_. All dependencies should always be **explicit** not implicit. This defeats [Dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)
- If we wanted to change database credentials, we need to edit the _User_ class which is not good; every class should be completely **modular** or black box. If we need to operate further on it, we should actually use its public properties and methods instead of editing it again and again. This defeats [Open/closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)
- Let's assume right now class is using MySQL as database. What if we wanted to use some other type of database ? You will have to modify it.
- The _User_ class does not necessarily need to know about database connection, it should be confined to its own functionality only. So writing database connection code in _User_ class doesn't make it modular. This defeats the [Single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle). Think of this analogy: A cat knows how to **meow** and a dog knows how to **woof**; you cannot mix them or expect dog to say **meow**. Just like real world, each object of a class should be responsible for its own specific task.
- It would become harder to write unit tests for the _User_ class because we are instantiating the database class inside its constructor so it would be impossible to write unit tests for the _User_ class without also testing the database class.

Let's see how we can easily take care of above issues by using Dependency Injection:

```csharp
class User 
{
    private $database = null;

    public function __construct(Database $database) {
        $this->database = $database;
    }

    public function getUsers() {
        return $this->database->getAll('users');
    }
}

$database = new Database('host', 'user', 'pass', 'dbname');
$user = new User($database);
$user->getUsers();
```
And there you have much better code, thanks to Dependency Injection principle.

<blockquote><h4>MVC</h4></blockquote>

The **M**odel-**V**iew-**C**ontroller pattern and its relatives HMVC and MVVM lets you break up code into logical objects that serve very specific purposes. It's almost used by every modern framework so i'm not going to explain it in details here (maybe in one of my next posts), however, you'll find below an illustration that could give you an overall idea:

![MVC](./assets/img/posts/mvc.png)

**Conclusion...**

Of course there are a lot of others useful design patterns, maybe I'm going to talk about them in the future, but, for now I think those are sufficient for you to design your app better. 😉

**Sources**:

- [8 design patterns that every developer should know](http://www.thedevpiece.com/design-patterns-that-every-developer-should-know/)
- [PHP: The Right Way - Design Patterns](https://phptherightway.com/pages/Design-Patterns.html)
- [Dependency Injection in PHP](https://codeinphp.github.io/post/dependency-injection-in-php/)
- [Fluent interface and method chaining in PHP and JavaScript](https://dev.to/mofiqul/fluent-interface-and-method-chaining-in-php-and-javascript-251c)
- [Programmez en orienté objet en PHP: Les design patterns](https://openclassrooms.com/fr/courses/1665806-programmez-en-oriente-objet-en-php/1668103-les-design-patterns)
