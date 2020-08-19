/// <reference types="Cypress"/>

context('Accessing Venue', () => {
    
    describe('Visit Venue URL', () => {
        
        it('Checking URL', () => {
            cy .visit('https://www.10travlr.com.au/venue')
            
        });

        it('Login', () => {
            cy.get('#email').type('julian.travlr@gmail.com')
            cy.get('#password').type('qwertyuiop1234567890', {log:false})
            cy.get('#btn-submit').click()
            .should('be.visible')
            .and('contain','Log in')
            cy.visit('https://www.10travlr.com.au/venue')

            Cypress.on('uncaught:exception', (err, runnable) => {
                throw err
    
                done()
            })

            cy.visit('https://www.10travlr.com.au/venue')

        });

        it('Checking Venue Text', () => {
            cy.get('h3.m-t-0')
            .should('have.text','Add a venue')
            .and('be.visible')

        });

        it('Checking Form', () => {
            cy.get('.form-item-row > :nth-child(2) > .form-control')
            .should('be.visible')
            .and('exist')

        });

        it('Checking Content', () => {
            cy.get('#content')
            .should('be.visible')
            .and('exist')
            
        });

    });

});