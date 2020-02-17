describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit("/");
    cy.get("form");
    cy.screenshot({log: true});
    cy.screenshot('my-screenshot', {
     onAfterScreenshot ($el, props) {
    // props has information about the screenshot,
    // including but not limited to the following:

     {
       name: 'my-screenshot',
       size: '15 kb',
       dimensions: {
         width: 1200,
         height: 1000,
       },
       scaled: true,
       blackout: [],
       duration: 2300
     }
  },
})
  });
});
