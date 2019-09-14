# react-app-rewire-ifdef

Adds [preprocess-loader](https://github.com/dearrrfish/preprocess-loader) to a react-app-rewired config, which allows JavaScript or TypeScript preprocessed statements like `@ifdef`, `@echo`, etc.

## Installation

```
yarn add --dev react-app-rewire-preprocess
```

## Example

`config-overrides.js` :

```javascript
const rewirePreprocess = require('react-app-rewire-preprocess')

module.exports = rewirePreprocess({
  ...options // see preprocess-loader's doc for more details on available options
})
```
