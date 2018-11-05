# bottomscore

[![build status](https://travis-ci.com/vileppanen/bottomscore.svg?branch=master)](https://travis-ci.com/vileppanen/bottomscore)
[![code coverage](https://img.shields.io/codecov/c/github/vileppanen/bottomscore.svg)](https://codecov.io/gh/vileppanen/bottomscore)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/vileppanen/bottomscore.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/bottomscore.svg)](https://npm.im/bottomscore)

> Util/extension library for ES6 Javascript (Little bit like Underscore, but not quite...)

This library contains helper classes and utils, written in Javascript (ES6). Some of them might be useful, others are not, and some are most definetly ridiculous. 


## Table of Contents

* [Install](#install)
* [Documentation](#documentation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install bottomscore
```

[yarn][]:

```sh
yarn add bottomscore
```

## Documentation  
-------------

## Classes

<dl>
<dt><a href="#List">List</a></dt>
<dd><p>Wrapper class for array manipulation</p>
<p>Provides functional interface for handling arrays</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#ContainedNumber">ContainedNumber(args)</a> ⇒ <code>number</code></dt>
<dd><p>Wrapper for numbers.
Defines boundaries for a number which it cannot cross (= always keeps the number between specified minimum and maximum values).</p>
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
<a name="List.numberRange"></a>

### List.numberRange(from, to)
Generates a list of numbers from specified range

**Kind**: static method of [<code>List</code>](#List)  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>number</code> | Starting from number |
| to | <code>number</code> | Ending to number |

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

## Usage

```js
import { List } from 'bottomscore'
const instance = new List([0,1,2,3])
const results = instance.filter(number => number > 1).filter(number => number < 3).collect()
```


## Contributors

| Name               |
| ------------------ |
| **Ville Leppänen** |


## License

[MIT](LICENSE) © Ville Leppänen


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/