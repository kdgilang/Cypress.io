/// <reference types="Cypress"/>

context('Accessing Business Portal', () => {
    
    describe('Visit Business portal', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.thebalibible.com/activities/api-test-product-37058')
            // .location('pathname')
            // .should('eq','/')
        
        });

        it('Login', () => {
            cy.get('.t-navbar-top-right-menus-list-item-link')
            .click()

            cy.get('#email')
            .type('julian.travlr@gmail.com')
    
            cy.get('#password')
            .type('qwertyuiop1234567890', {log:false})
    
            cy.get('#btn-submit')
            .click()

        });

    });

});