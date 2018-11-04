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
* [API](#api)
  * [List](#list)
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


## API

Below is listed API for classes that are currently provided by this library.

### List

Wrapper class to provide functional way of handling arrays. Borrowed some ideas of Streams in Java.

| Method                                  | Type        | Description                                                                                                                                                                                                                                  |
| --------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `List(array)`                           | constructor | Creates new List instance from specified array                                                                                                                                                                                               |
| `numberRange(from: number, to: number)` | static      | Creates a new List instance, with generated numbers from specified range                                                                                                                                                                     |
| `from(index: number)`                   | specifier   | Defines starting index for a range. Collectors' and filters' target maybe narrowed by specifiers, ie. you can have an array of 10 items, but you want to target a certain range of it for filtering and collecting (via specifier functions) |
| `to(index: number)`                     | specifier   | Defines ending index for a range. Collectors' and filters' target maybe narrowed by specifiers, ie. you can have an array of 10 items, but you want to target a certain range of it for filtering and collecting (via specifier functions)   |
| `filter(fn)`                            | filter      | Adds a filter function to pending filters. Filter function needs to return boolean to define which objects to filter out from `collect()` results. All filters are executed in order they are added, when `collect()` is called              |
| `collect()`                             | collector   | Executes all pending filters, and returns filtered list as an array                                                                                                                                                                          |


## Usage

```js
import { List } from 'bottomscore'
const instance = new List([0,1,2,3])
const results = instance.filter(number => number > 1).filter(number => number < 3).collect()
// results === [2]
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
