// {
//   "ci": {
//     "collect": {
//       "startServerCommand": "npm start",
//       "startServerReadyPattern": "listening|ready|open",
//       "url": ["http://localhost:4200"],
//       "numberOfRuns": 1
//     },
//     "assert": {
//       "bf-cache": ["warn", { "minScore": 0.5 }],
//       "meta-description": ["warn", { "minScore": 0.5 }],
//       "total-byte-weight": ["error", { "maxNumericValue": 300000 }],
//       "unminified-javascript": "warn",
//       "unused-css-rules": "warn",
//       "uses-text-compression": "warn",
//       "preset": "lighthouse:recommended",
//       "startServerReadyPattern": "compiled successfully|waiting for changes"
//     },
//     "upload": {
//       "target": "temporary-public-storage"
//     }
//   }
// }
module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:8080"],
      startServerCommand:
        "http-server ./dist/jasmine-karma-documentation -p 8080",
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["warn", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["warn", { minScore: 0.9 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
