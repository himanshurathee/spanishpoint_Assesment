describe("Matching Engine Automation Test for Spanish Point Technologies", () => {
  it("Validates the supported products list", () => {
    // Visiting the website
    cy.visit("https://www.matchingengine.com/");

    // Ensuring the navigation menu is visible as it's on top right corner
    cy.get(".navbar-burger").click(); // Open menu if collapsed which is collapsed

    // Expanding 'Modules' in the header
    cy.contains("Modules").should("be.visible").click();

    // Clicking 'Repertoire Management Module'
    cy.contains("Repertoire Management Module").should("be.visible").click();

    // Scrolling to the 'Additional Features' section
    cy.contains("Additional Features").scrollIntoView();

    // Clicking 'Products Supported'
    cy.contains("Products Supported").should("be.visible").click();

    // Waiting for the list to load as it takes some time
    cy.wait(2000);

    // Asserting the supported products list is visible
    cy.contains("There are several types of Product Supported:").should(
      "be.visible"
    );

    // Locating the correct product list and adjusting the selector as needed
    cy.contains("There are several types of Product Supported:")
      .parent()
      .find("ul, table, div")
      .should("exist")
      .and("not.be.empty");
  });
});
