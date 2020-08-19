/// <reference types="Cypress"/>

context('Accessing Articles', () => {
    
    describe('Visit 10Travlr Articles', () => {

        it('Checking URL', () => {
            cy.visit('https://10travlr.freya.travlr.com/articles')
            .location('pathname')
            .should('eq','/articles')

        });

        it('Checking Articles Title', () => {
            cy.get('h1.pb--10')
            .should('have.text', 'News & Articles')

        });

        it('Checking Articles Form', () => {
            cy.get('.form__search')
            .should('be.visible')

        });

        it('Checking Sort by Button', () => {
            cy.get('select')
            .eq(0)
            .select('latest')
            .should('have.value','latest')
            
        });
    })
});