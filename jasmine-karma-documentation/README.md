# JasmineKarmaDocumentation

This is a learning project with the official [Jasmine](https://jasmine.github.io/pages/docs_home.html) documentation.

I wrote Jasmine examples and integrated Jasmine with NgRx and with `@Output` and `@Input`. I created these files, folders and components duing my learning:

- **The folder with Jasmine examples:** [`examples`](./src/examples/)
- **CounterComponent with NgRx:** [`counter`](./src/app/counter/)
- **SimpleCounterComponent with `@Output` and `@Input`:** [`simple-counter`](./src/app/simple-counter/)

## Performance Testing and DevOps

I decided to use this project to learn performance testing and DevOps.

## GitHub Actions

I used this [video tutorial](https://www.youtube.com/watch?v=ylHfetX3QlU) and the [official documentation](https://docs.github.com/en/actions) to learn GitHub Actions. I wrote three files during my learning:

- [`main.yml`](../.github/workflows/main.yml)
- [`basic-concepts.yml`](../.github/workflows/basic-concepts.yml)
- [`matrix.yml`](../.github/workflows/matrix.yml)

**Configurations:**

- [`karma.conf.js`](./karma.conf.js)

## Linting

Linting is needed to check unused variables and imports.

To install linting in Angular:

```bash
ng add @angular-eslint/schematics
```

To run linting locally:

```bash
npm run lint
```

**Configurations:**

- [`eslint.confing.js`](./eslint.config.js)

## Lighthouse CI

I wrote the [`lighthouse-ci-getting-started.yml`](../.github/workflows/lighthouse-ci-getting-started.yml) file while learning Lighthouse CI. I used this [official guide](https://github.com/GoogleChrome/lighthouse-ci).

To run the Lighthouse CI locally use the following commands:

```bash
npm ci
ng build --configuration production
npm install -g http-server
http-server ./dist/jasmine-karma-documentation/browser -p 4200 --gzip
npm install -g @lhci/cli
lhci autorun
```

**Configurations:**

- [`.lighthouserc.js`](./.lighthouserc.js)

## Fixing Lighthouse CI Issues

### Enable Text Compression

1. Install `compression-webpack-plugin` to enable compression.

```bash
npm install compression-webpack-plugin --save-dev
```

2. Install `@angular-builders/custom-webpack` to include custom webpacks:

```bash
npm install @angular-builders/custom-webpack --save-dev
```

3. Create the [`webpack.config.js`](./webpack.config.js) file for configuration.

4. Update [`angular.json`](./angular.json) to include the custom Webpack configuration.

Replace `"builder": "@angular-devkit/build-angular:browser",` with `"builder": "@angular-builders/custom-webpack:browser",`, otherwise you will get the `Property customWebpackConfig is not allowed.` error.

```json
"architect": {
  "build": {
    // "builder": "@angular-devkit/build-angular:browser",
    "builder": "@angular-builders/custom-webpack:browser",
    "options": {
      "customWebpackConfig": {
        "path": "./webpack.config.js"
      }
    }
  }
}
```
