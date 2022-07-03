import homepage from "../../fixtures/page-objects/homePage";

describe("Launch website of Van Gogh Museum and navigate to collection page", () => {
  it("I want to launch the website and navigate to collections page", () => {
    //Opening the website
    homepage.open();

    //Here we are navigate to the collection page
    cy.navigateCollection();
  });

  it("I want to validate the collection page using URL and document title", () => {
    //Here we are validating the landing page of collections using URL and Document title
    cy.validateDifferentWays();
  });
  
  it('I want to validate the collection page using a element on the page', () => {
    //here we are validating the collection landing page using title on the page 
    cy.validateCollectionPage('Collectie');
  })

});
