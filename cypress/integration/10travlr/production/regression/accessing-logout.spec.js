/// <reference types="Cypress"/>

context('Logout', () => {
    
    describe('Visit 10Travlr', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.10travlr.com.au/')
            .location('pathname')
            .should('eq','/')

        });

        it('Go to Login Form', () => {
            cy.get('.t-navbar-top-right-menus-list-item-link')
            .click()
            cy.wait(3000)

        });

        it('Login & Logout', () => {
            cy.get('#email')
            .type('julian.travlr@gmail.com')
    
            cy.get('#password')
            .type('qwertyuiop1234567890', {log:false})
    
            cy.get('#btn-submit')
            .click()

            cy.visit('https://www.10travlr.com.au/')
            .location('pathname')
            .should('eq','/')

            cy.get('.t-navbar-top-right-menus-list-item-link > .t-display-table-cell > .t-icon')
            .click()

            cy.get(':nth-child(8) > .t-navbar-top-right-menus-list-item-child-item-link')
            .click()
            
        });

    });

});