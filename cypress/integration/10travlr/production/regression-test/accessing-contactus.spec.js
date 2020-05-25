/// <reference types="Cypress"/>

context('Accessing Contact Us', () => {
    
    describe('Visit URL', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.10travlr.com.au/contact-us')
            .location('pathname')
            .should('eq','/contact-us')

        });

        it('Checking MAP', () => {
            cy.get('#mapThumb')
            .should('be.visible')
            .and('exist')

        });
        
        it('Checking Text', () => {
            cy.get('h2')
            .should('have.text','Let us help you with your next journey...')

        });

    });

});