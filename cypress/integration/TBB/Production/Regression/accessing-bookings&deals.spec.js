/// <reference types="Cypress"/>

context('Accessing My Bookings & Deals', () => {
    
    describe('Visit Bookings & Deals URL', () => {
        
        it('Checking URL', () => {
            cy.visit('https://thebalibible.com/booking-management')

        });

        it('Login', () => {
            cy.get('#email').type('julian.travlr@gmail.com')
    
            cy.get('#password').type('qwertyuiop1234567890', {log:false})
    
            cy.get('#btn-submit').click()

        });

        it('Go to Booking and Management', () => {
            cy.get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > #shortcut__profile > .my__account__icon > .material-icons')
            .click()

            cy.get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > .dropdown-menu > [href="https://www.thebalibible.com/booking-management?view=active"]')
            .click()

        });


        it('Checking Bookings & Deals Text', () => {
            cy.get('.block-intro-title')
            .should('contain', 'My Bookings & Deals')
        
        });

        it('Checking See All Tab', () => {
            cy.get('#see-all > :nth-child(1) > :nth-child(1) > .block__booking__management > .empty__box > .empty__box__img')
            .should('have.attr','src')
            
        });

        it('Checking Active Logo', () => {
            cy.get('#see-all > :nth-child(1) > :nth-child(1) > .block__booking__management > .empty__box > .empty__box__img')
            .should('have.attr','src')
            .and('contain','https://www.thebalibible.com/shared/assets/images/no-transaction-img.svg')
            
        });

        it('Checking Active & History Button', () => {
            cy.get('.dropdown-sort-btn > .t-icon')
            .click()

            cy.get('a > .toggle-cap-desktop')
            .should('contain','History')
            .click()

            cy.wait(3000)

        });

        it('Checking History Logo', () => {
            cy.get('#deals > :nth-child(1) > :nth-child(1) > .block__booking__management > .empty__box > .empty__box__img')
            .should('have.attr','src')
            .and('contain','https://www.thebalibible.com/shared/assets/images/no-transaction-img-history.svg')
            
        });


        it('Checking All Tab History', () => {
            cy.get('.active > .nav-li-a')
            .click()

            cy.get(':nth-child(3) > .nav-li-a')
            .click()

            cy.get(':nth-child(4) > .nav-li-a')
            .click()

            cy.get(':nth-child(5) > .nav-li-a')
            .click()

        });

    });

});