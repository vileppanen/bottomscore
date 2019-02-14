## Classes

<dl>
<dt><a href="#List">List</a></dt>
<dd><p>Wrapper class for array manipulation</p>
<p>Provides functional interface for handling arrays</p>
</dd>
<dt><a href="#Optional">Optional</a></dt>
<dd><p>Wrapper class for handling values that may be null or undefined</p>
<p>Mimics functionality of Java 8 Optionals</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#arrayAsProps">arrayAsProps(array, propPrefix, indexPropertyName)</a> ⇒ <code>object</code></dt>
<dd><p>Returns object having each value of the provided array as indexed property, using specified property name prefix.</p>
<p>By default, indexes the properties by order number.</p>
<p>If indexPropertyName argument is provided, uses corresponding property value as index value.</p>
<p>Duplicate properties are bundled into an array as value.</p>
</dd>
<dt><a href="#ContainedNumber">ContainedNumber(args)</a> ⇒ <code>number</code></dt>
<dd><p>Wrapper for numbers.
Defines boundaries for a number which it cannot cross (= always keeps the number between specified minimum and maximum values).</p>
</dd>
<dt><a href="#propsToArray">propsToArray(obj, propertyNameMatcher)</a> ⇒ <code>array</code></dt>
<dd><p>Bundles all matching property values from an object into an array</p>
</dd>
</dl>

<a name="List"></a>

## List
Wrapper class for array manipulationProvides functional interface for handling arrays

**Kind**: global class  

* [List](#List)
    * [new List(fromArray)](#new_List_new)
    * _instance_
        * [.collect()](#List+collect) ⇒ <code>array</code>
        * [.from(index)](#List+from) : <code>specifier</code>
        * [.to(index)](#List+to) : <code>specifier</code>
        * [.filter(filterFn)](#List+filter) : <code>filter</code>
        * [.forEach(forEachFn)](#List+forEach) : <code>manipulator</code>
    * _static_
        * [.numberRange(from, to)](#List.numberRange)

<a name="new_List_new"></a>

### new List(fromArray)
Constructor, that takes in an array to be wrapped


| Param | Type |
| --- | --- |
| fromArray | <code>array</code> | 

<a name="List+collect"></a>

### list.collect() ⇒ <code>array</code>
Executes all pending filters and returns filtered results as new array

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>array</code> - Filtered list as array  
<a name="List+from"></a>

### list.from(index) : <code>specifier</code>
Defines a range starting indexRange starting index is used in collector functions, where it narrows down the collecting to a subset of underlying array

**Kind**: instance method of [<code>List</code>](#List)  

| Param | Type |
| --- | --- |
| index | <code>number</code> | 

**Example**  
```js
// Collects all items starting from index 1, from underlying arraylist.from(1).collect()
```
<a name="List+to"></a>

### list.to(index) : <code>specifier</code>
Defines a range ending indexRange ending index is used in collector functions, where it narrows down the collecting to a subset of underlying array

**Kind**: instance method of [<code>List</code>](#List)  

| Param | Type |
| --- | --- |
| index | <code>number</code> | 

**Example**  
```js
// Collects all items from 0 to 2, from underlying arraylist.to(2).collect()
```
<a name="List+filter"></a>

### list.filter(filterFn) : <code>filter</code>
Adds filter function to pending filters, but does not execute the filter yetCan be chained

**Kind**: instance method of [<code>List</code>](#List)  

| Param | Type | Description |
| --- | --- | --- |
| filterFn | <code>fn</code> | Gets passed in single element from underlying array, and needs to return boolean specifying if the element should be excluded from results |

**Example**  
```js
// Includes items with foo === 'foo', and then out of that subset, filters out everything except items with bar === 'bar'list.filter(item => item.foo === 'foo').filter(item => item.bar === 'bar').collect()
```
<a name="List+forEach"></a>

### list.forEach(forEachFn) : <code>manipulator</code>
Executes specified function for each item in the underlying array, without mutating it.If specifier functions have been called, function will be executed to each item in the subset.Unlike in filters, the function is executed immediately.Can be chained

**Kind**: instance method of [<code>List</code>](#List)  

| Param | Type | Description |
| --- | --- | --- |
| forEachFn | <code>fn</code> | Gets passed in single element from underlying array |

**Example**  
```js
// Updates the second item's foo property to 'bar'list.from(1).to(1).forEach(item => { item.foo = 'bar' })
```
<a name="List.numberRange"></a>

### List.numberRange(from, to)
Generates a list of numbers from specified range

**Kind**: static method of [<code>List</code>](#List)  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>number</code> | Starting from number |
| to | <code>number</code> | Ending to number |

<a name="Optional"></a>

## Optional
Wrapper class for handling values that may be null or undefinedMimics functionality of Java 8 Optionals

**Kind**: global class  

* [Optional](#Optional)
    * _instance_
        * [.value](#Optional+value)
        * [.ifPresent(fn)](#Optional+ifPresent)
        * [.if(expression)](#Optional+if)
        * [.orElse(defaultValue)](#Optional+orElse) ⇒ <code>\*</code>
        * [.orElseThrow(error)](#Optional+orElseThrow) ⇒ <code>\*</code>
        * [.isPresent()](#Optional+isPresent) ⇒ <code>boolean</code>
    * _static_
        * [.of(value)](#Optional.of)

<a name="Optional+value"></a>

### optional.value
The wrapped value

**Kind**: instance property of [<code>Optional</code>](#Optional)  
<a name="Optional+ifPresent"></a>

### optional.ifPresent(fn)
Executes the specified function, if value is not null or undefined.Can be chained with .orElse(() => somefunctionbody) to handle cases where value is null or undefined

**Kind**: instance method of [<code>Optional</code>](#Optional)  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | function to be executed, gets wrapped value as an argument |

**Example**  
```js
// Console logs 'foo'const instance = new Optional('foo')instance.ifPresent(value => console.log(value))
```
<a name="Optional+if"></a>

### optional.if(expression)
Replaces the wrapped value with the result of the expression functionHandy if need to access complex object property, and there might be nulls along the chain

**Kind**: instance method of [<code>Optional</code>](#Optional)  

| Param | Type | Description |
| --- | --- | --- |
| expression | <code>fn</code> | Gets the wrapped value as argument, and replaces the wrapped value with result |

**Example**  
```js
// value === 'jar'const instance = new Optional({ foo: { bar: { zoo: 'jar' } } })const value = instance.if(val => val.foo.bar.zoo).orElse('defaultval')// value === 'defaultval'const instance = new Optional({ foo: 'bar' })const value = instance.if(val => val.foo.bar.zoo).orElse('defaultval')
```
<a name="Optional+orElse"></a>

### optional.orElse(defaultValue) ⇒ <code>\*</code>
Returns the specified value if wrapped value is not present.Returns the wrapped value if it's present.

**Kind**: instance method of [<code>Optional</code>](#Optional)  
**Returns**: <code>\*</code> - the wrapped value if it is not null, otherwise returns the defaultValue  

| Param | Type | Description |
| --- | --- | --- |
| defaultValue | <code>\*</code> | value to be returned, if the wrapped value is null |

**Example**  
```js
// value === 'foo'const value = new Optional('foo').orElse('bar')// value === 'bar'const value = new Optional().orElse('bar')
```
<a name="Optional+orElseThrow"></a>

### optional.orElseThrow(error) ⇒ <code>\*</code>
Throws specified error if wrapped value is not present.Returns the wrapped value if it's present.

**Kind**: instance method of [<code>Optional</code>](#Optional)  
**Returns**: <code>\*</code> - the wrapped value if it is not null  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>Error</code> | error to be thrown, if the wrapped value is null |

**Example**  
```js
// throws error with message 'fail'const value = new Optional().ifPresent(value => { console.log('was present') }).orElseThrow(new Error('fail'))// value === 'bar'const value = new Optional('bar').orElseThrow(new Error('fail'))
```
<a name="Optional+isPresent"></a>

### optional.isPresent() ⇒ <code>boolean</code>
Returns boolean whether the wrapped value is null or not

**Kind**: instance method of [<code>Optional</code>](#Optional)  
**Returns**: <code>boolean</code> - true if wrapped value is not null or undefined  
<a name="Optional.of"></a>

### Optional.of(value)
Returns new Optional with value expected to be not null or undefinedThrows error if null or undefined is passed as argument

**Kind**: static method of [<code>Optional</code>](#Optional)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | Non-null value to be wrapped |

<a name="arrayAsProps"></a>

## arrayAsProps(array, propPrefix, indexPropertyName) ⇒ <code>object</code>
Returns object having each value of the provided array as indexed property, using specified property name prefix.By default, indexes the properties by order number.If indexPropertyName argument is provided, uses corresponding property value as index value.Duplicate properties are bundled into an array as value.

**Kind**: global function  
**Returns**: <code>object</code> - Array presented as object with indexed properties  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>\*</code> | Array to convert to object properties |
| propPrefix | <code>string</code> | Property name prefix to use |
| indexPropertyName | <code>string</code> | Specified property which value will be used as index |

**Example**  
```js
// result === { 'propPrefix[0]': 'foo', 'propPrefix[1]': 'bar' }const result = arrayAsProps(['foo', 'bar'], 'propPrefix')
```
**Example**  
```js
// result === { 'propPrefix[wilbur]': { foo: 'object', bar: 'wilbur' }, 'propPrefix[smith]': { foo: 'anotherObject', bar: 'smith' } }const result = arrayAsProps([{ foo: 'object', bar: 'wilbur' }, { foo: 'anotherObject', bar: 'smith' }], 'propPrefix', 'bar')
```
**Example**  
```js
// result === { 'propPrefix[wilbur]': [{ foo: 'object', bar: 'wilbur' }, { foo: 'anotherObject', bar: 'wilbur' }] }const result = arrayAsProps([{ foo: 'object', bar: 'wilbur' }, { foo: 'anotherObject', bar: 'wilbur' }], 'propPrefix', 'bar')
```
<a name="ContainedNumber"></a>

## ContainedNumber(args) ⇒ <code>number</code>
Wrapper for numbers.Defines boundaries for a number which it cannot cross (= always keeps the number between specified minimum and maximum values).

**Kind**: global function  
**Returns**: <code>number</code> - the passed in value, if it is in range. If passed in value is less than specified minimum, returns the minimum value. If passed in value is greater than the specified maximum value, returns the maximum value.  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | { value, min, max } All properties need to be numbers |

**Example**  
```js
const passedInValue = ContainedNumber({ value: 2, min: 1, max: 3}) // 2const minimumValue = ContainedNumber({ value: 1, min: 2, max: 3}) // 2const maximumValue = ContainedNumber({ value: 3, min: 1, max: 2}) // 2
```
<a name="propsToArray"></a>

## propsToArray(obj, propertyNameMatcher) ⇒ <code>array</code>
Bundles all matching property values from an object into an array

**Kind**: global function  
**Returns**: <code>array</code> - Matching property values as array  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | Target object |
| propertyNameMatcher | <code>string</code> | Regexp clause to use for matching property names |

**Example**  
```js
// result === ['foo', 'bar']const result = propstToArray({ 'foo[0]': 'foo', 'foo[1]': 'bar' }, 'foo\\[[0-9]+\\]')
```
