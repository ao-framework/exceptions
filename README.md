<p align="center">
    <img width="250" src="https://ao-framework.github.io/assets/readmeHeader.png">
</p>
<p align="center">
    <b>Custom Exceptions. If it's your thing.</b>
</p>
<p align="center">
    <em>
        This project is currently in early development. 
        Expect erratic behaviour frequently as development happens.
    </em>
</p>

### Installation
```bash
npm install --save @ao-framework/exceptions
```
<small><em>Typescript types are included.</em></small>

### How Do I Import and Create Custom Exceptions?
```ts
import { Exception } from "@ao-framework-exceptions"

export class BadInputException extends Exception { }
export class SystemException extends Exception { }
```

### How To Use?
```ts
import { BadInputException } from "./myExceptions"

try {
    throw new BadInputException("You did not send something you should have")
} catch(err => {
    if(err instanceof BadInputException) {
        // do something special
    } else {
        throw err;
    }
})
```

### Using Exceptions with Gates

```ts
import { throwWhenNotString, throwWhenNotObject } from "@ao-framework/gates"
import { BadInputException } from "./myExceptions"

function validateArticle(request: iArticleRequest) {
    throwWhenNotObject(request, 
        "Article data is corrupt", BadInputException)
    throwWhenNotString(request.title, 
        "Article should have a title", BadInputException)
    throwWhenNotString(request.content, 
        "Article should have content", BadInputException)
}
```

### Need Verbose Messaging with Exceptions?

```ts
import { SystemException } from "./myExceptions"

throw new SystemException([
    "line 1",
    "line 2",
    "line 3"
])
```
