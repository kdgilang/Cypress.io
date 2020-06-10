/// <reference types="Cypress"/>

context('Accessing Trips', () => {
    
    describe('Visit 10Travlr Trips', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.10travlr.com.au/trips')
            .location('pathname')
            .should('eq','/trips')

        });

        it('Checking Trips Title', () => {
            cy.get('h1.pb--10')
            .should('have.text', 'All Trips')
            
        });
            
        it('Checking Form Trips', () => {
            cy.get('.form__search')
            .should('exist')
            .and('be.visible')
            
        });
        
        it('Checking Trips Text', () => {
            cy.get('div.block__title__left')
            .should('have.text', 'Most Popular Trips\n                \n            ')
            .and('exist')

        });

        it('Checking Sort by Button', () => {
            cy.get('select')
            .eq(0)
            .select('latest')
            .should('have.value','latest')
            
        });

    });

});