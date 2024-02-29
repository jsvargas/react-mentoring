describe("E2E test for counter component", () => {
  it("Component component uses", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="decrementBtn"]').click();
    cy.get('[data-cy="valueSpan"]').should("have.text", "-1");
    cy.get('[data-cy="decrementBtn"]').click().click();
    cy.get('[data-cy="valueSpan"]').should("have.text", "-3");

    cy.get('[data-cy="incrementBtn"]').click();
    cy.get('[data-cy="valueSpan"]').should("have.text", "-2");
    cy.get('[data-cy="incrementBtn"]').click().click().click().click();
    cy.get('[data-cy="valueSpan"]').should("have.text", "2");
  });
});
