/// <reference types="Cypress"/>

context('Accessing Business Portal', () => {
    
    describe('Visit Business portal', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.10travlr.com.au/business_premium/test-test-test-1282692/overview')
            .location('pathname')
            .should('eq','/accommodation/detail/test-test-test-1282692')
        
        });

        it('Login', () => {
            cy.get('.mobile__header > .container-Common > .common__shortcut > .common__login > .common__login__link')
            .click()

            cy.get('#email')
            .type('julian.travlr@gmail.com')
    
            cy.get('#password')
            .type('qwertyuiop1234567890', {log:false})
    
            cy.get('#btn-submit')
            .click()

        });

        it('Visit Business Portal', () => {
            cy.get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > #shortcut__profile > .my__account__text')
            .click()

            cy.get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > .dropdown-menu > [href="https://www.10travlr.com.au/business_premium/test-test-test-1282692/overview"]')
            .click()
            
        });

    });

});