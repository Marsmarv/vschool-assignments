describe('my first test', () => {
  it('should go to home page', () => {
    cy.visit('http://localhost:3000/')
      .get('a').should('exist')
      .get('.custodial').should('exist')
      .get('.teacher').should('exist')
  })
})