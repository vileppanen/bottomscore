# bottomscore

[![build status](https://travis-ci.com/vileppanen/bottomscore.svg?branch=master)](https://travis-ci.com/vileppanen/bottomscore)
[![code coverage](https://img.shields.io/codecov/c/github/vileppanen/bottomscore.svg)](https://codecov.io/gh/vileppanen/bottomscore)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/vileppanen/bottomscore.svg)](LICENSE)
[![npm](https://img.shields.io/npm/v/bottomscore.svg)](https://npm.im/bottomscore)

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

---

See <a href="API.md">API.md</a>


## Usage

```js
// Import/require class/function from module, and use it according to API
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
