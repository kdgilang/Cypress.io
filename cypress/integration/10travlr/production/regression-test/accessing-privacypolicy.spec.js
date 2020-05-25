/// <reference types="Cypress"/>

context('Accessing Privacy Policy', () => {
    
    describe('Visit URL', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.10travlr.com.au/pages/privacy-policy-1')
            .location('pathname')
            .should('eq','/pages/privacy-policy-1')

        });

        it('Checking Text', () => {
            cy.get('.t-heading-1')
            .should('have.text','PRIVACY POLICY')
        
        });

    });

});