/// <reference types="Cypress"/>

context('Accessing DMCA', () => {
    
    describe('Visit URL', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.thebalibible.com/pages/dmca-10')
            .location('pathname')
            .should('eq','/pages/dmca-10')

        });

        it('Checking Text', () => {
            cy.get('.t-heading-1')
            .should('have.text','DMCA')
        
        });

    });

});