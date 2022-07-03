import './commands'
import './customCommands/homePage.action'
import './customCommands/collectionPage.action'

//This function will be helpful when there is an uncaught exception
beforeEach(() => {
  Cypress.on("uncaught:exception", () => {
    return false;
  });
});