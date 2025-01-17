class MyCustomReporter implements jasmine.CustomReporter {
  // `jasmine.CustomReporter`: Create custom reporter.
  jasmineStarted(suiteInfo: jasmine.JasmineStartedInfo): void {
    // `jasmine.JasmineStartedInfo`: Provides information when Jasmine starts running tests.
    console.log(`Running ${suiteInfo.totalSpecsDefined} specs...`);
  }

  suiteStarted(result: jasmine.SuiteResult): void {
    // `jasmine.SuiteResult`: Contains data about a test suite and its status after running.
    console.log(`Suite started: ${result.description}`);
  }

  specStarted(result: jasmine.SuiteResult): void {
    console.log(`Spec started: ${result.description}`);
  }

  specDone(result: jasmine.SuiteResult): void {
    console.log(`Spec: ${result.description} was ${result.status}`);
    for (const failedExpectation of result.failedExpectations) {
      console.error(`Failure: ${failedExpectation.message}`);
    }
  }

  suiteDone(result: jasmine.SuiteResult): void {
    console.log(`Suite: ${result.description} was ${result.status}`);
  }

  jasmineDone(result: jasmine.JasmineDoneInfo): void {
    // `jasmine.JasmineDoneInfo`: Contains metadata when all test execution is complete.
    console.log('All tests are complete.');
  }
}

jasmine.getEnv().addReporter(new MyCustomReporter());
