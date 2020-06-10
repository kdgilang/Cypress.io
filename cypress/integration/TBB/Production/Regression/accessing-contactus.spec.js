/// <reference types="Cypress"/>

context('Accessing Contact Us', () => {
    
    describe('Visit URL', () => {
        
        it('Checking URL', () => {
            cy.visit('https://support.thebalibible.com/hc/en-us/requests/new')
            .location('pathname')
            .should('eq','/hc/en-us/requests/new')

        });

        it('Checking Title', () => {
            cy.get('h1')
            .should('contain','Submit a request')


        });
        
        it('Checking all column', () => {
            cy.get('#request_anonymous_requester_email')
            .should('be.visible')
            .and('exist')

            cy.get('#request_subject')
            .should('be.visible')
            .and('exist')

            cy.get('#request_description')
            .should('be.visible')
            .and('exist')

            cy.get('#query')
            .should('be.visible')
            .and('exist')
    
        });

    });

});