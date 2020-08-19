/// <reference types="Cypress"/>

context('Accessing Contact Us', () => {
    
    describe('Visit URL', () => {
        
        it('Checking URL', () => {
            cy.visit('https://10travlr.freya.travlr.com/contact-us')
            .location('pathname')
            .should('eq','/contact-us')

        });

        it('Checking MAP', () => {
            cy.get('#mapThumb')
            .should('be.visible')
            .and('exist')

        });

    });

});