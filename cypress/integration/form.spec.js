describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit("/");
    cy.get("form");
    cy.screenshot({log: true});
  });
});
