# vue-test

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Aditional config

To ensure that we do not carry over unexpected values to other tests, it is a good idea to clean up the mock after each test. We can add it manually, use afterEach, or add it in the jest.config.js file.

```
module.exports = {
  testMatch: ["**/*.test.js"],
  // ...
  restoreMocks: true,
};
```
