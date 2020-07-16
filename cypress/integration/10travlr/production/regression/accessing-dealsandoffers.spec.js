/// <reference types="Cypress"/>

context('Accessing Deals & Offers', () => {
    
    describe('Visit Deals & Offers', () => {
        
        it('Checking Deals & Offers URL', () => {
            cy.visit('https://www.10travlr.com.au/deals-and-offers/')
            .location('pathname')
            .should('eq', '/deals-and-offers/')
        
        });

        it('Checking Deals Form', () => {
            cy.get('form.t-form.t-top-form.t-form-inline')
            .should('exist').and('be.visible')

        });

        it('Checking Deals Container', () => {
            cy.get('.t-container')
            .should('exist').and('be.visible')

        });

        it('Checking Humm Banner', () => {
            cy.get('.c-banner-humm')
            .should('exist')
            .and('be.visible')

        });

    });

});