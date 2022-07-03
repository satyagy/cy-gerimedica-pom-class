class Collections {
  
  open() {
    cy.visit(Cypress.env("VANGOGH_MUSEUM_COLLIECTIE_URL"))
  }

  get searchFiled() {
    return cy.get("form.search-field * input[placeholder='Zoek een kunstwerk']");
  }

  get searchButton() {
    return cy.get(".search-field-search-button");
  }

  get resultCount() {
    return cy.get(".collection-art-object-list-results > span");
  }

  get listOfImages() {
    return cy.get(".collection-art-object-list div[aria-label*='Het Gele Huis']");
  }

  get objectgegevensLink() {
    return cy.get("button[aria-label*='Objectgegevens']");
  }

  get objectgegevensElements() {
    return cy.get(".definition-list > .definition-list-item > dd");
  }

}
export default new Collections();
