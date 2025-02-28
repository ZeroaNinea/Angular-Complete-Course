// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

// Use `puppeteer` to set the `CHROME_BIN` environment variable for Jenkins tests.

// process.env.CHROME_BIN = "/usr/bin/google-chrome";
process.env.CHROME_BIN = process.env.CHROME_BIN + "--------------------";
console.log("CHROME_BIN is set to:", process.env.CHROME_BIN);

module.exports = function (config) {
  const isCI = process.env.CI === "true";

  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
    },
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },
    coverageReporter: {
      dir: require("path").join(
        __dirname,
        "./coverage/jasmine-karma-documentation"
      ),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }],
      check: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
        },
      },
    },
    reporters: ["progress", "kjhtml"],
    // Configure for GitHub Actions.
    browsers: [isCI ? "ChromeHeadlessNoSandbox" : "Chrome"],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox", "--disable-gpu"],
      },
    },
    browserNoActivityTimeout: 60000,
    singleRun: isCI,
    restartOnFileChange: true,
  });
};
