/// <reference types="Cypress"/>

context('Accessing Terms', () => {
    
    describe('Visit URL', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.10travlr.com.au/pages/terms-3')
            .location('pathname')
            .should('eq','/pages/terms-3')

        });

        it('Checking Text', () => {
            cy.get('h1 > span')
            .should('contain.text','TERMS')
            
        });

    });

});