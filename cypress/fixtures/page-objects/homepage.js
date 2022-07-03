class HomePage {
  open() {
    cy.visit(Cypress.env("VANGOGH_MUSEUM_URL"));
  }
  
  get kunstVerhalenLink() {
    return cy.get(".main-navigation-desktop-items > li:nth-child(3)");
  }

  get collectionLink() {
    return cy.get('.main-navigation-desktop-screen-items > li:nth-child(2) > a');
  }

  get collectionLandingPage() {
    return cy.get('.page-transition *  .page-header-heading');
  }
  
  get cookiesAcceptButton() {
    return cy.get('.cookie-banner-buttons > button:nth-child(1)')
  }
}

export default new HomePage();