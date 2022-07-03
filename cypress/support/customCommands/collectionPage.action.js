import collectionPage from "../../fixtures/page-objects/collectionPage";

//Method to search for user specific art
Cypress.Commands.add("searchForArts", (searchContent) => {
  collectionPage.searchFiled.should("be.visible").type(searchContent);
  collectionPage.searchButton.should("be.visible").click();
});

//Method to verify the results count
Cypress.Commands.add("verifyResultCount", (expectedCount) => {
  collectionPage.resultCount
    .should("be.visible")
    .invoke("text")
    .then(parseInt)
    .should("have.greaterThan", expectedCount);
});

//Method to click first available art
Cypress.Commands.add("clickOnArt", (userInput) => {
  collectionPage.listOfImages.should("be.visible").then((images) => {
    cy.get(images[userInput - 1]).click();
  });
  collectionPage.objectgegevensLink.should("be.visible").click();
});

// Method is to verify the selected image
Cypress.Commands.add("verifyOpenedImage", () => {
  const expectedText = ["F0464", "JH1589", "s0032V1962"];
  collectionPage.objectgegevensElements.should("be.visible").then((items) => {
    for (let i = 0; i < 3; i++) {
      expect(items[i]).to.contain.text(expectedText[i]);
    }
  });
});
