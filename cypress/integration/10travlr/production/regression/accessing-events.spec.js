/// <reference types="Cypress"/>

context('Accessing Events', () => {
    
    describe('Visit Events URL', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.10travlr.com.au/events').location('pathname')
            .should('eq', '/events')

        });

        it('Checking Events Title', () => {
            cy.get('.main__title')
            .should('contain','Events')

        });

        it('Checking Table', () => {
            cy.get('.event-table')
            .should('exist')
            .and('be.visible')

        });

        it('Checking Description', () => {
           cy.get('p.main__description')
            .should('exist')
            .and('be.visible')

        });

        it('Checking Search Column', () => {
            cy.get('.search-query')
            .should('exist')
            .and('be.visible')

        });

        it('Checking Reset Button', () => {
            cy.get('.t-link-primary')
            .should('exist')
            .and('be.visible')

        });

        it('Checking List Your Event Title', () => {
            cy.get('.aside__event__info > h4')
            .should('contain','List your event for free!')
            .and('be.visible')

        });

        it('Checking Add Your Event Button', () => {
            cy.get('.link__add')
            .should('contain','Add Your Event')
            .and('be.visible')
            
        });

    });

});