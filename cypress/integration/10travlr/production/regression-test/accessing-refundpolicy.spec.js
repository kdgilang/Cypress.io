/// <reference types="Cypress"/>

context('Accessing Refund Policy', () => {
    
    describe('Visit URL', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.10travlr.com.au/pages/refund-policy-5')
            .location('pathname')
            .should('eq','/pages/refund-policy-5')

        });

        it('Checking Text', () => {
            cy.get('.t-heading-1 > strong')
            .should('have.text','REFUND POLICY')
            
        });

    });

});