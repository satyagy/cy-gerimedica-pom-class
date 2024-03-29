import collectionPage from "../../fixtures/page-objects/collectionPage";

describe("Load the collection search page in and search for an ART and validate result count", () => {
  it("I want to search for an Art", () => {
    //To open the collection search page with URL
    collectionPage.open();

    //Method to search for any Art by passing the parameter
    cy.searchForArts("Het Gele Huis");
    
    //Method to validate the search results count
    cy.verifyResultCount(700);
  });
});