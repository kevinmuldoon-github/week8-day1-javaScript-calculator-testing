describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

it('should update the display with the result of the operation', () => {
  cy.get('#number1').click();
  cy.get('#number5').click();
  cy.get('#operator-add').click();
  cy.get('#number3').click();
  cy.get('#number4').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '49')
});

it('should allow multiple operations to be chained together', () => {
  cy.get('#number1').click();
  cy.get('#operator-add').click();
  cy.get('#number8').click();
  cy.get('#operator-subtract').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '7')
});

it('should correctly handle negative numbers', () => {
  cy.get('#number9').click();
  cy.get('#operator-subtract').click();
  cy.get('#number1').click();
  cy.get('#number1').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '-2')
});

it('should correctly handle decimals', () => {
  cy.get('#number4').click();
  cy.get('#operator-divide').click();
  cy.get('#number8').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '0.5')
});

it('should correctly handle larger numbers', () => {
  cy.get('#number5').click();
  cy.get('#number1').click();
  cy.get('#number9').click();
  cy.get('#number7').click();
  cy.get('#operator-multiply').click();
  cy.get('#number3').click();
  cy.get('#number6').click();
  cy.get('#number8').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain' , '19135354')
});

it('should be able to divide by zero', () => {
  cy.get('#number5').click();
  cy.get('#operator-divide').click();
  cy.get('#number0').click();
  cy.get('#operator-equals').click(); // Returns the value infinity
  cy.get('.display').should('contain' , '') 
});

})