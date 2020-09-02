# @justinjunodev/clapback

[![npm (scoped)](https://img.shields.io/npm/v/@justinjunodev/clapback.svg)](https://www.npmjs.com/package/@justinjunodev/clapback)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@justinjunodev/clapback.svg)](https://www.npmjs.com/package/@justinjunodev/clapback)
![Twitter Follow](https://img.shields.io/twitter/follow/justinjunodev?label=follow)

## Overview

A 👏 SASSY 👏 NPM 👏 MODULE 👏 FOR 👏 CLAPPING 👏 BACK! 👏

Pass a string and get an uppercased version of it with some **claps** to emphasize your point. _If you'd like to use a different emoji, pass a second string with the desired character._

### Installation

```
$ npm install @justinjunodev/clapback
```

### Usage

```js
import clapback from "@justinjunodev/clapback";

clapback("You can't sit with us!");
//=> "YOU👏CAN'T👏 WITH👏 US!👏"

clapback("It's so fetch", "💅");
//=> "IT'S💅SO💅FETCH.💅"

clapback(123);
//=> Uncaught TypeError: CLAPBACK👏ONLY👏WORKS👏WITH👏STRINGS!👏
```

### Closing

I created `@justinjunodev/clapback` to get a better understanding of how to build/ release my own npm packages. It's silly, but if you need some extra sass in your next project, feel free to use it!
