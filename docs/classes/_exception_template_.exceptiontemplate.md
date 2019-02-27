[@ao-framework/exceptions](../README.md) > ["exception.template"](../modules/_exception_template_.md) > [ExceptionTemplate](../classes/_exception_template_.exceptiontemplate.md)

# Class: ExceptionTemplate

### @ao-framework > exceptions > exception-template

Definition for the exception template

## Hierarchy

**ExceptionTemplate**

## Index

### Properties

* [spaces](_exception_template_.exceptiontemplate.md#spaces)

### Methods

* [appendedMessages](_exception_template_.exceptiontemplate.md#appendedmessages)
* [header](_exception_template_.exceptiontemplate.md#header)
* [message](_exception_template_.exceptiontemplate.md#message)

---

## Properties

<a id="spaces"></a>

###  spaces

**● spaces**: *`string`* = "     "

*Defined in [exception.template.ts:18](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.template.ts#L18)*

### @ao-framework > exceptions > exception-template > spaces

Holds the number of spaces for the indented area for the sub-part of the template

___

## Methods

<a id="appendedmessages"></a>

###  appendedMessages

▸ **appendedMessages**(messages: *[AppendedMessage](_appended_message_.appendedmessage.md)[]*): `string`

*Defined in [exception.template.ts:49](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.template.ts#L49)*

### @ao-framework > exceptions > exception-template > appended-message

Get the template partial for the appended messages

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| messages | [AppendedMessage](_appended_message_.appendedmessage.md)[] |  List of the appended messages |

**Returns:** `string`

___
<a id="header"></a>

###  header

▸ **header**(header: *[ExceptionHeader](_exception_header_.exceptionheader.md)*): `string`

*Defined in [exception.template.ts:27](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.template.ts#L27)*

### @ao-framework > exceptions > exception-template > header

Get the template partial for the header

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| header | [ExceptionHeader](_exception_header_.exceptionheader.md) |  The exception header instance for the exception group |

**Returns:** `string`

___
<a id="message"></a>

###  message

▸ **message**(message: *`string`*): `string`

*Defined in [exception.template.ts:38](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.template.ts#L38)*

### @ao-framework > exceptions > exception-template > message

Get the template partial for the message

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The main message of the exception |

**Returns:** `string`

___

