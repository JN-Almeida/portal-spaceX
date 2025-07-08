describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the home page correctly', () => {
    cy.get('body').should('be.visible')
    
    cy.title().should('not.be.empty')

    cy.get('main').should('exist')
  })

  it('should have navigation to launches page', () => {
    cy.get('a[href*="/launches"]').should('exist')
  })

  it('should be responsive', () => {
    cy.viewport(375, 667)
    cy.get('body').should('be.visible')
    
    cy.viewport(768, 1024)
    cy.get('body').should('be.visible')
    
    cy.viewport(1280, 720)
    cy.get('body').should('be.visible')
  })

  it('should load without console errors', () => {
    cy.window().then((win) => {
      cy.stub(win.console, 'error').as('consoleError')
    })
    
    cy.visit('/')
    
    cy.get('@consoleError').should('not.have.been.called')
  })
}) 