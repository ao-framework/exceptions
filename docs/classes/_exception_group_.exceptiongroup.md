[@ao-framework/exceptions](../README.md) > ["exception.group"](../modules/_exception_group_.md) > [ExceptionGroup](../classes/_exception_group_.exceptiongroup.md)

# Class: ExceptionGroup

### @ao-framework > exceptions > exception-group

Definition for an exception group

## Hierarchy

**ExceptionGroup**

## Index

### Constructors

* [constructor](_exception_group_.exceptiongroup.md#constructor)

### Properties

* [attachTrace](_exception_group_.exceptiongroup.md#attachtrace)
* [header](_exception_group_.exceptiongroup.md#header)

### Methods

* [create](_exception_group_.exceptiongroup.md#create)
* [throwMessage](_exception_group_.exceptiongroup.md#throwmessage)
* [throwUnless](_exception_group_.exceptiongroup.md#throwunless)
* [throwUnlessStrict](_exception_group_.exceptiongroup.md#throwunlessstrict)
* [throwWhen](_exception_group_.exceptiongroup.md#throwwhen)
* [throwWhenStrict](_exception_group_.exceptiongroup.md#throwwhenstrict)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ExceptionGroup**(title: *`string`*, subTitle?: *`string`*, attachTrace?: *`boolean`*): [ExceptionGroup](_exception_group_.exceptiongroup.md)

*Defined in [exception.group.ts:16](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.group.ts#L16)*

### @ao-framework > exceptions > exception-group > constructor

Creates an instance of an exception group

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| title | `string` | - |  The title of the exception group |
| `Default value` subTitle | `string` | &quot;&quot; |  The subtitle of the exception group |
| `Default value` attachTrace | `boolean` | false |  whether or not to attach a stack trace to the exception |

**Returns:** [ExceptionGroup](_exception_group_.exceptiongroup.md)

___

## Properties

<a id="attachtrace"></a>

### `<Private>` attachTrace

**● attachTrace**: *`boolean`*

*Defined in [exception.group.ts:27](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.group.ts#L27)*

whether or not to attach a stack trace to the exception

___
<a id="header"></a>

###  header

**● header**: *[ExceptionHeader](_exception_header_.exceptionheader.md)*

*Defined in [exception.group.ts:16](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.group.ts#L16)*

### @ao-framework > exceptions > exception-group > header

Holds the header instance for the group

___

## Methods

<a id="create"></a>

###  create

▸ **create**(message?: *`string`*): [Exception](_exception_.exception.md)

*Defined in [exception.group.ts:41](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.group.ts#L41)*

### @ao-framework > exceptions > exception-group > create

Create an exception instance

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` message | `string` | &quot;&quot; |  Optional message for the exception |

**Returns:** [Exception](_exception_.exception.md)

___
<a id="throwmessage"></a>

### `<Private>` throwMessage

▸ **throwMessage**(message: *`string` \| [Exception](_exception_.exception.md)*): `void`

*Defined in [exception.group.ts:53](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.group.ts#L53)*

### @ao-framework > exceptions > exception-group > throw-message

Helper method to throw exceptions with either a message string or an instance of the exception

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` \| [Exception](_exception_.exception.md) |  string message for the exception or exception instance |

**Returns:** `void`

___
<a id="throwunless"></a>

###  throwUnless

▸ **throwUnless**(condition: *`any`*, message: *`string` \| [Exception](_exception_.exception.md)*): `void`

*Defined in [exception.group.ts:100](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.group.ts#L100)*

### @ao-framework > exceptions > exception-group > throw-unless

Throw an exception unless condition is truthy

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| condition | `any` |  Whether or not to throw |
| message | `string` \| [Exception](_exception_.exception.md) |  string message for the exception or exception instance |

**Returns:** `void`

___
<a id="throwunlessstrict"></a>

###  throwUnlessStrict

▸ **throwUnlessStrict**(condition: *`any`*, message: *`string` \| [Exception](_exception_.exception.md)*): `void`

*Defined in [exception.group.ts:114](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.group.ts#L114)*

### @ao-framework > exceptions > exception-group > throw-unless

Throw an exception unless condition is exactly true

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| condition | `any` |  Whether or not to throw |
| message | `string` \| [Exception](_exception_.exception.md) |  string message for the exception or exception instance |

**Returns:** `void`

___
<a id="throwwhen"></a>

###  throwWhen

▸ **throwWhen**(condition: *`any`*, message: *`string` \| [Exception](_exception_.exception.md)*): `void`

*Defined in [exception.group.ts:72](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.group.ts#L72)*

### @ao-framework > exceptions > exception-group > throw-when

Throw an exception when the condition is truthy

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| condition | `any` |  Whether or not to throw |
| message | `string` \| [Exception](_exception_.exception.md) |  string message for the exception or exception instance |

**Returns:** `void`

___
<a id="throwwhenstrict"></a>

###  throwWhenStrict

▸ **throwWhenStrict**(condition: *`boolean`*, message: *`string` \| [Exception](_exception_.exception.md)*): `void`

*Defined in [exception.group.ts:86](https://github.com/ao-framework/exceptions/blob/99998cd/src/exception.group.ts#L86)*

### @ao-framework > exceptions > exception-group > throw-when-strict

Throw an exception when the condition is exact true

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| condition | `boolean` |  Whether or not to throw |
| message | `string` \| [Exception](_exception_.exception.md) |  string message for the exception or exception instance |

**Returns:** `void`

___

