describe('The Main Page', () => {
  it('successfully loads', () => {
    cy.visit('http://127.0.0.1:5502/index.html')
  })
})


describe('Basic operations', () => {
  it('7 + 2 equals 9', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5502/index.html');
    // Act
    cy.get('[data-cy=seven]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=equals]').click();
    // Assert
    cy.get('[data-cy=display]').should('contain', '9');
  })
})

describe('Percentage operations', () => {
  it('50% of 200', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5502/index.html');
    // Act
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=percentage]').click();
    cy.get('[data-cy=times]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=equals]').click();
    // Assert
    cy.get('[data-cy=display]').should('contain', '100');
  })
})

describe('Clear operation', () => {
  it('clears screen', () => {
    cy.visit('http://127.0.0.1:5502/index.html');
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=clear]').click();
    cy.get('[data-cy=display]').should('contain', '');
  })
})