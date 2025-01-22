module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:4300"],
      startServerCommand:
        "http-server ./dist/jasmine-karma-documentation -p 4300",
      startServerReadyPattern: "Available on",
      startServerReadyTimeout: 20000,
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.6 }],
        "categories:accessibility": ["warn", { minScore: 0.7 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["warn", { minScore: 0.9 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
