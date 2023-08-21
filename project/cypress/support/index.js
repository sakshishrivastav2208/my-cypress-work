Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
module.exports = (on, config) => {
  on("task", { downloadFile });
};

import "cypress-real-events/commands";
