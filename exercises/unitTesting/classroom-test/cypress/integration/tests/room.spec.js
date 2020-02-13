describe('Testing Room component', () => {
  context('checking if desks has a id text', () => {
    it('should contain id:', () => {
      cy.visit('http://localhost:3000/teacher')
        .get('.desks').click({multiple: true}).invoke('text').should('include', 'desk id: ')
    })
  })

  context('checking modal text info', () => {
    it('should exist and contain text', () => {
      cy.get('.modal-info').should('exist')
        .get('.student-info').should('exist')
    })
  })
})