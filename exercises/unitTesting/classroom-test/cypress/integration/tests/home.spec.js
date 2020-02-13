describe('Testing Home component', () => {
  context('Loads homepage and checks for links', () => {
    it('should go to the home page', () => {
      cy.visit('http://localhost:3000/')
    })
    it('checks link tag exists', () => {
      cy.get('a').should('exist')
    })
  })

  context('Navigates to Teacher page/Home then Custodial/Home', () => {
    it('goes to teacher page and back home', () => {
      cy.get('.teacher').should('exist').click()
        .get('.home').should('exist').click()
    })
    it('goes to custodial page and back home', () => {
      cy.get('.custodial').should('exist').click()
        .get('.home').should('exist').click()
    })     
  })
})