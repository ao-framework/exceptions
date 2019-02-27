[@ao-framework/exceptions](../README.md) > ["exception"](../modules/_exception_.md) > [Exception](../classes/_exception_.exception.md)

# Class: Exception

### @ao-framework > exceptions > exception

Definition for an exception

## Hierarchy

**Exception**

## Index

### Constructors

* [constructor](_exception_.exception.md#constructor)

### Properties

* [appendedMessages](_exception_.exception.md#appendedmessages)
* [attachTrace](_exception_.exception.md#attachtrace)
* [header](_exception_.exception.md#header)
* [message](_exception_.exception.md#message)

### Methods

* [appendData](_exception_.exception.md#appenddata)
* [appendError](_exception_.exception.md#appenderror)
* [appendInformation](_exception_.exception.md#appendinformation)
* [appendMessage](_exception_.exception.md#appendmessage)
* [appendToMessage](_exception_.exception.md#appendtomessage)
* [appendWarning](_exception_.exception.md#appendwarning)
* [setMessage](_exception_.exception.md#setmessage)
* [throwException](_exception_.exception.md#throwexception)
* [toString](_exception_.exception.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Exception**(header: *[ExceptionHeader](_exception_header_.exceptionheader.md)*, message: *`string`*, attachTrace: *`boolean`*): [Exception](_exception_.exception.md)

*Defined in [exception.ts:31](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.ts#L31)*

### @ao-framework > exceptions > exception > constructor

Creates the instance of the exception

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| header | [ExceptionHeader](_exception_header_.exceptionheader.md) |  The header information for the exception |
| message | `string` |  The global message for the exception |
| attachTrace | `boolean` |

**Returns:** [Exception](_exception_.exception.md)

___

## Properties

<a id="appendedmessages"></a>

### `<Private>` appendedMessages

**● appendedMessages**: *[AppendedMessage](_appended_message_.appendedmessage.md)[]* =  []

*Defined in [exception.ts:31](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.ts#L31)*

### @ao-framework > exceptions > exception > info-messages

Holds a list of informational messages that are appended to the exception

___
<a id="attachtrace"></a>

### `<Private>` attachTrace

**● attachTrace**: *`boolean`*

*Defined in [exception.ts:42](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.ts#L42)*

___
<a id="header"></a>

### `<Private>` header

**● header**: *[ExceptionHeader](_exception_header_.exceptionheader.md)*

*Defined in [exception.ts:16](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.ts#L16)*

### @ao-framework > exceptions > exception > header

Holds the instance of the exception header

___
<a id="message"></a>

### `<Private>` message

**● message**: *`string`* = "Unknown"

*Defined in [exception.ts:23](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.ts#L23)*

### @ao-framework > exceptions > exception > message

Holds the message for the exception

___

## Methods

<a id="appenddata"></a>

###  appendData

▸ **appendData**(tag: *`string`*, data: *`any`*): `this`

*Defined in [exception.ts:117](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.ts#L117)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tag | `string` |
| data | `any` |

**Returns:** `this`

___
<a id="appenderror"></a>

###  appendError

▸ **appendError**(message: *`string`*): `this`

*Defined in [exception.ts:104](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.ts#L104)*

### @ao-framework > exceptions > exception > append-error

Add to the list additional error messages

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to add |

**Returns:** `this`

___
<a id="appendinformation"></a>

###  appendInformation

▸ **appendInformation**(message: *`string`*): `this`

*Defined in [exception.ts:79](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.ts#L79)*

### @ao-framework > exceptions > exception > append-information

Add to the list of additional informational messages

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to add |

**Returns:** `this`

___
<a id="appendmessage"></a>

###  appendMessage

▸ **appendMessage**(tag: *`string`*, message: *`string`*): `this`

*Defined in [exception.ts:109](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.ts#L109)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tag | `string` |
| message | `string` |

**Returns:** `this`

___
<a id="appendtomessage"></a>

###  appendToMessage

▸ **appendToMessage**(message: *`string`*, delimiter?: *`string`*): `this`

*Defined in [exception.ts:67](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.ts#L67)*

### @ao-framework > exceptions > exception > append-to-message

Add to the global message

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| message | `string` | - |  The string to append to the global message |
| `Default value` delimiter | `string` | &quot;&quot; |  The string that will placed between the current message and the message to append |

**Returns:** `this`

___
<a id="appendwarning"></a>

###  appendWarning

▸ **appendWarning**(message: *`string`*): `this`

*Defined in [exception.ts:91](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.ts#L91)*

### @ao-framework > exceptions > exception > append-warning

Add to the list of additional warning messages

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to add |

**Returns:** `this`

___
<a id="setmessage"></a>

###  setMessage

▸ **setMessage**(message: *`string`*): `this`

*Defined in [exception.ts:54](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.ts#L54)*

### @ao-framework > exceptions > exception > set-message

Set the global message of the exception

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The string to be set as the exception message |

**Returns:** `this`

___
<a id="throwexception"></a>

###  throwException

▸ **throwException**(): `void`

*Defined in [exception.ts:145](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.ts#L145)*

### @ao-framework > exceptions > exception > throw-exceptions

Throws this exception

**Returns:** `void`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [exception.ts:131](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.ts#L131)*

### @ao-framework > exceptions > exception > to-string

Converts the current exception to a string

**Returns:** `string`

___

