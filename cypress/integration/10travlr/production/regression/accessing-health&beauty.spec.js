/// <reference types="Cypress"/>

context('Accessing Health & Beauty', () => {
    
    describe('Visit Health & Beauty URL', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.10travlr.com.au/deals-and-offers/search?category=Health%20%26%20Beauty').location('pathname')
            .should('eq', '/deals-and-offers/search')

        });

        it('Checking Form', () => {
            cy.get('form.t-form')
            .should('be.visible')

        });

        it('Checking Search Button', () => {
            cy.get('button[data-gtm-event="ev_deals_search_button"]').contains(' Search Deals ')
            .should('be.visible')

        });

        it('Checking Humm Banner', () => {
            cy.get('.c-banner-humm')
            .should('exist')
            .and('be.visible')

        });
        
    });

});