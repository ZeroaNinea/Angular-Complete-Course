# JasmineKarma

This is a project for learning Jasmine and Karma with the official [documentation](https://angular.dev/guide/testing). I implemented everything and added the missing code. This is the [documentation](https://jasmine.github.io/pages/getting_started.html) of Jasmine.

## Commands

Run tests:

```bash
ng test
```

Generate a config file for Karma:

```bash
ng generate config karma
```

Test with continious integrating:

```bash
ng test --no-watch --no-progress --browsers=ChromeHeadless
```

Check test coverage:

```bash
ng test --no-watch --code-coverage
```

## Configurations

Generate a new code coverage report every time when tests runnig:

`angular.json`

```json
"test": {
  "options": {
    "codeCoverage": true
  }
}
```

Check if the 80% of the code is covered:

`karma.conf.js`

```js
coverageReporter: {
  dir: require('path').join(__dirname, './coverage/<project-name>'),
  subdir: '.',
  reporters: [
    { type: 'html' },
    { type: 'text-summary' }
  ],
  check: {
    global: {
      // Check if the 80% of the code is covered.
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  }
}
```

See: [`EXAMPLES.md`](./EXAMPLES.md).
