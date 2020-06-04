/// <reference types="Cypress"/>

context('Accessing Create List', () => {
    
    describe('Create List', () => {
        
        it('Go to 10Travlr URL', () => {
            cy.visit('https://www.10travlr.com.au/')
            .location('pathname')
            .should('eq','/')

            cy.get('.intercom-tour-frame').then ( $element => {
                const $body = $element.contents().find('body')
                let stripe = cy.wrap($body)
                stripe.find('.intercom-1o29jst')
                .click()
            })

        });

        it('Login', () => {
            cy.get('.t-navbar-top-right-menus-list-item-link').click()

            cy.get('#email')
            .type('julian.travlr@gmail.com')
    
            cy.get('#password')
            .type('qwertyuiop1234567890', {log:false})
    
            cy.get('#btn-submit')
            .click()

            cy.visit('https://www.10travlr.com.au/')
            .location('pathname')
            .should('eq','/')

            cy.wait(3000)


            cy.get('.intercom-tour-frame').then ( $element => {
                const $body = $element.contents().find('body')
                let stripe = cy.wrap($body)
                stripe.find('.intercom-1o29jst')
                .click()
            })
            
        });

        it('Go to Create List', () => {
            cy.get('.t-navbar-top-right-menus-list-item-link > .t-display-table-cell > .t-icon')
            .click()
            .should('be.visible')

            cy.get(':nth-child(6) > .t-navbar-top-right-menus-list-item-child-item-link')
            .click()

        });

        it('Fill Create List Form', () => {
            cy.get('#listName')
            .type('QA TESTING')
            .should('be.visible')

            cy.get('#description')
            .type('Just For Testing')
            .should('be.visible')

            cy.get('#create')
            .click()
            .should('be.visible')
        
        });

    });

});