const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //pageLoadTimeout: 4000;
    },
  },
  defaultCommandTimeout: 400000,
  pageLoadTimeout: 1000000,
  requestTimeout: 50000,
});
