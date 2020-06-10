/// <reference types="Cypress"/>


context('Accessing Activities', () => {
    
    describe('Visit Activities URL', () => {
        
        it('Checking Activities URL', () => {
            cy.visit('https://www.thebalibible.com/activities')
            .location('pathname')
            .should('eq', '/activities')
       
        });

        it('Accept Cookies', () => {
            cy.get('.t-btn-inverted')
            .click()

        });

        it('Checking Activities Text', () => {
            cy.get('h1.t-heading-2')
            .should('have.text','Make the most of your travel')
            cy.get('p.t-body-text.t-mobile-m-t-8')
            .should('have.text', 'Book from thousands of activities, tours and things to do for you and your mates')

        });

        it('Checking Activities Search', () => {
            cy.get('#activitiesSearchDestination')
            .should('exist')

        });

        it('Checking Submit Button', () => {
            cy.get('button[type="submit"]')
            .should('be.visible')

        });


    });

});