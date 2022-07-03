const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    viewportHeight: 1500,
    viewportWidth: 1500,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    specPattern: "cypress/e2e/allTestcase.spec.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotOnRunFailure: true,
  },
});
