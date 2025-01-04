describe("`app` component's tests", () => {
  it("Visit Root Path", () => {
    cy.visit("http://localhost:4200/");
  });
});
