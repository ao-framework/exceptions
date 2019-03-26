<p align="center">
<img width="150" src="https://ao-framework.github.io/website/ao.logo.svg"><br>
<b>Exceptions</b>
</p>
<p align="center"><em>Currently in early development. Breaking changes will occur frequently.</em></p>

**Exceptions** is an abstract class for creating custom exceptions. It contains functionality to tag additional information about context that ultimately led to an exception to be thrown in the first place. Errors in Javascript contains the “toString” method that usually contains the message, type and stack information from the Error. **Exceptions** contains two methods for viewing --“toString” and “toJson”. Both have their respected template methods to alter their view to the end user for a more detailed debugging experience.

Using custom exceptions is a controversial practice that is rife with arguments from well intended, opinionated and intelligent people. Understand the situation fully before use.


#### Import the library
```ts
import Exceptions from "@ao-framework/exceptions"
```

#### Create Custom Exceptions
```ts
export class InvalidArgumentException extends Exception {}
export class BadInputException extends Exception {}
export class SystemException extends Exception {}
```
#### Basic Usage
```ts
try {
    let name = false;
    if(typeof name !== "string") {
        throw new BadInputException("name must be a string", (exception) => {
            exception.emergency(`name is equal to ${String(name)}`)
            exception.alert(`name is equal to ${String(name)}`)
            exception.critical(`name is equal to ${String(name)}`)
            exception.error(`name is equal to ${String(name)}`)
            exception.warning(`name is equal to ${String(name)}`)
            exception.notice(`name is equal to ${String(name)}`)
            exception.info(`name is equal to ${String(name)}`)
            exception.debug(`name is equal to ${String(name)}`)
            exception.tag(`custom-tag`, `name is equal to ${String(name)}`)
        })
    }
} catch(err) {
    if(err instanceof BadInputException) {
        logger.errorSync(err.toJson())
    } else {
        throw err
    }
}
```
