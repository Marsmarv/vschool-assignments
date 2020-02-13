describe('Testing Custodial component', () => {
  it('visit custodial page and check that desk elements exist', () => {
    cy.visit('http://localhost:3000/custodial')
      .get('.desks').should('exist').click({multiple: true})
      .should('be.visible')
  })
  it('should check if the modal and its elements exist and are visible', () => {
    cy.get('.modal-container').should('exist')
      .get('.modal-container > :nth-child(1)').should('be.visible')
      .get('.modal-container > :nth-child(4)').should('be.visible')
  })
  it('selects a desk option to check that it exists', () => {
    cy.get('.desk > :nth-child(1) > select').select('3a950cd7-f347-4c17-8409-3fcc5459b13c')
  })    
  it('selects a date option to check that it exists', () => {
    cy.get('.daily > :nth-child(1) > select').select('1577854800000')
  })
})