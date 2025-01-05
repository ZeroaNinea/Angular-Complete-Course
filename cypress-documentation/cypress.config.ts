import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200", // The URL where Cypress should test. It allows to specify relative URL in `cy.ts` files. E.g., `/` instead `http://localhost:4200/`.
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
