module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:8080"],
      startServerCommand:
        "http-server ./dist/jasmine-karma-documentation -p 8080",
      startServerReadyPattern: "Available on",
      startServerReadyTimeout: 10000,
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        // "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["warn", { minScore: 0.9 }],
        "categories:performance": ["warn", { minScore: 0.75 }],
        // "categories:accessibility": ["warn", { minScore: 0.8 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["warn", { minScore: 0.9 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
