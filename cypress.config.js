const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    viewportHeight: 1500,
    viewportWidth: 1500,
    defaultCommandTimeout: 5000,
    chromeWebSecurity: false,
    execTimeout:5000,
    watchForFileChanges: false,
    specPattern: "cypress/e2e/allTestcase.spec.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    screenshotOnRunFailure: true,
  },
  video : true
});
