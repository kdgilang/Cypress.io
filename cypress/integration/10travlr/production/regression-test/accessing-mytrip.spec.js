/// <reference types="Cypress"/>

context('Accessing My Trips', () => {
    
    describe('Visit My Trips URL', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.10travlr.com.au/my/trip').location('pathname')
            .should('eq','/login/a/49')

        });

        it('Login', () => {
            cy.get('#email').type('julian.travlr@gmail.com')
    
            cy.get('#password').type('qwertyuiop1234567890', {log:false})
    
            cy.get('#btn-submit').click()

            cy.visit('https://www.10travlr.com.au/my/trip').location('pathname')
            .should('eq','/my/trip')

        });

        it('Checking My Trips Title', () => {
            cy.get(':nth-child(1) > :nth-child(1) > .block__title__left > h2')
            .should('contain.text','My Trips').and('exist')

        });

        it('Checking Create one & Browse Popular list Button', () => {
            cy.get(':nth-child(1) > .block-empty-state-my-account > .empty__box > .link > .t-button-primary')
            .should('be.visible')
            .and('contain.text','Create one')
            
            cy.get(':nth-child(2) > .block-empty-state-my-account > .empty__box > .link > .t-button-primary')
            .should('have.attr','href')
            .and('contain','https://www.10travlr.com.au/trips')

        });

    });

});