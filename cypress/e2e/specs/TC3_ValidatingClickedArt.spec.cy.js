import collectionPage from "../../fixtures/page-objects/collectionPage";

describe("Load the collection search page and click first result and validate it", () => {
  it("I want to search an Art", () => {
    
    //Method to open the
    collectionPage.open();

    //Method to search For any Arts you need to pass the art name as a parameter
    cy.searchForArts("Het Gele Huis");

  });

  it("I want to click on the first result", () => {
    
    //Method to click on the any result you want by passing the index
    cy.clickOnArt(1);

  });

  it("I want to validate the opened art", () => {
    
    //Method to verify you open the correct art
    cy.verifyOpenedImage();

  });
});
