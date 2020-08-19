/// <reference types="Cypress"/>

context('Accessing Notifications', () => {
    
    describe('Visit Notifications URL', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.10travlr.com.au/my/notification').location('pathname')
            .should('eq','/login/a/49')

        });

        it('Login', () => {
            cy.get('#email')
            .type('julian.travlr@gmail.com')
    
            cy.get('#password')
            .type('qwertyuiop1234567890', {log:false})
    
            cy.get('#btn-submit')
            .click()

            cy.visit('https://www.10travlr.com.au/my/notification')
            .location('pathname')
            .should('eq','/my/notification')

        });

        it('Checking Notification Title', () => {
            cy.get('h1')
            .should('exist')
            .and('contain.text','Notifications')
    
        });

    });

});