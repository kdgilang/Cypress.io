/// <reference types="Cypress"/>

context('Accessing DMCA', () => {
    
    describe('Visit URL', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.10travlr.com.au/pages/dmca-4')
            .location('pathname')
            .should('eq','/pages/dmca-4')

        });

        it('Checking Text', () => {
            cy.get('.t-heading-1')
            .should('have.text','DMCA')
        
        });

    });

});