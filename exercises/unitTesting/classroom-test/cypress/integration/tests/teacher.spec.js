describe('Testing the Teacher component', () => {
  it('visit teacher page and check that desk elements exist', () => {
    cy.visit('http://localhost:3000/teacher')
      .get('.desks').should('exist').click({multiple: true})
      .should('be.visible')
  })
  it('should check if the modal and its elements exist and are visible', () => {
    cy.get('.modal-container').should('exist')
      .get('.modal-container > :nth-child(1)').should('be.visible')
      .get('.modal-container > :nth-child(4)').should('be.visible')
  })
  it('selects a date option to check that it exists', () => {
    cy.get('.daily > :nth-child(1) > select').select('1577854800000')
  })
  it('selects a student option to check that it exists', () => {
    cy.get('.student > :nth-child(1) > select').select('3b0d7462-8ba1-4a5c-8a64-7721f7a9947c')
  })
})