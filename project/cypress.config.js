const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", { downloadFile });

      // implement node event listeners here
      //pageLoadTimeout: 4000;
    },
  },
  defaultCommandTimeout: 400000,
  pageLoadTimeout: 1000000,
  requestTimeout: 50000,
});
