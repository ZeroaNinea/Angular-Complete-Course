module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:4200"],
      startServerCommand: "http-server ./jasmine-karma-documentation -p 4200",
      startServerReadyPattern: "Available on",
      startServerReadyTimeout: 10000,
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
