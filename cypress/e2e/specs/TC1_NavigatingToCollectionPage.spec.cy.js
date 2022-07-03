import homepage from "../../fixtures/page-objects/homePage";

describe("Launch website of Van Gogh Museum and navigate to collection page", () => {
  it("I want to launch the website and navigate to collections page", () => {
    //Opening the website
    homepage.open();

    // Method to accepts Cookies
    cy.acceptingCookies();

    //Here we are navigate to the collection page
    cy.navigateCollection();
  });

  it("I want to launch the website and navigate to articles page", () => {
    //Here we are validating the landing page of collections using URL and title
    cy.validateDifferentWays();
  });
});
