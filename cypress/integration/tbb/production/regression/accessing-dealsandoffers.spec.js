/// <reference types="Cypress"/>

context('Accessing Deals & Offers', () => {
    
    describe('Visit Deals & Offers', () => {
        
        it('Checking Deals & Offers URL', () => {
            cy.visit('https://www.thebalibible.com/deals-and-offers/')
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

        it('Checking Deals Text', () => {
            cy.get('h3.t-heading-3')
            .should('contain', 'Popular Deals')

        });

        it('Checking Humm Banner', () => {
            cy.get('.c-banner-humm')
            .should('exist')
            .and('be.visible')

        });

    });

});