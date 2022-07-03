import homepage from "../../fixtures/page-objects/homepage"

//method to navigate to th collection search page
Cypress.Commands.add('navigateCollection', () => {
    homepage.kunstVerhalenLink.should('be.visible').click()
    homepage.collectionLink.should('be.visible').click()
})

//method to validate we are on th collection search page
Cypress.Commands.add('validateCollectionPage', (texToVerify) => {
    homepage.collectionLandingPage.should('have.text', texToVerify);
})

//method to validate the landings using title ,url
Cypress.Commands.add('validateDifferentWays', () => {
    //asserting title is correct
    cy.title().should('eq', 'Collectie - Van Gogh Museum')

    //assertTing url is correct
    cy.url().should('include', 'collectie')
})

//Method to accept cookies
Cypress.Commands.add('acceptingCookies', () => {
    if (homepage.cookiesAcceptButton.should("be.visible")) {
        homepage.cookiesAcceptButton.click();
      }
})

