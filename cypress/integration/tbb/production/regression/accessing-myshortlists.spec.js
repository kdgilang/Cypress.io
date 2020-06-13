/// <reference types="Cypress"/>

context('Accessing My Shortlists', () => {
    
    describe('Visit Shortlist URL', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.thebalibible.com/my/shortlist')

            cy.get('#email')
            .type('julian.travlr@gmail.com')
    
            cy.get('#password')
            .type('qwertyuiop1234567890', {log:false})
    
            cy.get('#btn-submit')
            .click()
            
        });

        it('Visit My Shortlist URL', () => {
            cy.get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > #shortcut__profile > .my__account__icon > .material-icons')
            .click()
            cy.get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > .dropdown-menu > [href="https://www.thebalibible.com/my/shortlist"]')
            .click()

        });

        it('Checking Shortlists Title & Text', () => {
            cy.get(':nth-child(4) > .block__horizontal__list > :nth-child(1) > .block__title__left > h2')
            .should('contain','My Lists')
            .and('exist')

            cy.get(':nth-child(4) > .block__horizontal__list > :nth-child(1) > .block__title__left > .block__title__subtitle')
            .should('contain','Create your first list and start saving your favourites!')
            .and('exist')

        });

    });
    
});