/// <reference types="Cypress"/>

context('Login', () => {
    
    describe('Login to URL', () => {
        
        it('Visit URL', () => {
            cy.visit('https://10travlr.freya.travlr.com/')
            cy.wait(3000)
    
        });

        it('Click Login', () => {
            cy.get('.t-navbar-top-right-menus-list-item-link')
            .click()
            .should('contain','Login')
            .and('be.visible')
            cy.wait(3000)

        });

        it('Fill Login Form', () => {
           cy.get('#email')
           .type('julian.travlr@gmail.com')
           cy.get('#password')
           .type('qwertyuiop1234567890', {log:false})

        });

        it('Checking Logo Above Form', () => {
            cy.get('img')
            .should('have.attr','src')

        });
        
        it('Checking all Form Text & Column', () => {
            cy.get('#email')
            .should('be.visible')
    
            cy.get('#password')
            .should('be.visible')
    
            cy.get(':nth-child(3) > .small')
            .should('contain','Email')
    
            cy.get(':nth-child(4) > .small')
            .should('contain','Password')
        
            cy.get('#btn-submit')
            .click()

            cy.visit('https://10travlr.freya.travlr.com/')
            .location('pathname')
            .should('eq', '/')

        });

    });

});