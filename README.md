<p align="center">
<img width="150" src="./assets/ao.logo.svg"><br>
<b>Exceptions</b>
</p>

#### Import the library
```ts
import Exceptions from "@ao-framework/exceptions"
```

#### Setup
```ts
let mainExceptions = new Exceptions(
    "My Application", //Title
    "Main Exceptions", //Subtitle
    false //Show stacktrace
);
```

#### Create an exception
```ts
let exception = main.create("Something broke")
```

#### Throw an exception
```ts
exception.throwException();
//or
main.throwWhen(true, exception);
main.throwUnless(false, exception);
main.throwWhenStrict(true, exception);
main.throwUnlessStrict(false, exception);
//or
main.throwWhen(true, "some message");
main.throwUnless(false, "some message");
main.throwWhenStrict(true, "some message");
main.throwUnlessStrict(false, "some message");
```
### Handle meta information
```ts
exception.appendInformation("This is some extra information");
exception.appendWarning("This is a warning");
exception.appendError("This is additional error");
exception.appendMessage("Meta Information", "This is anything");
exception.appendData("User Information", { user })
```

### Updating the main message
```ts
let exception = main.create();
exception.setMessage("Something");
exception.appendToMessage("Something else", "||");
```
