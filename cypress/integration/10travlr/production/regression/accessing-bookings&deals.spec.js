/// <reference types="Cypress"/>

context('Accessing My Bookings & Deals', () => {
    
    describe('Visit Bookings & Deals URL', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.10travlr.com.au/booking-management')

        });

        it('Login', () => {
            cy.get('#email').type('julian.travlr@gmail.com')
    
            cy.get('#password').type('qwertyuiop1234567890', {log:false})
    
            cy.get('#btn-submit').click()

            cy.visit('https://www.10travlr.com.au/booking-management').location('pathname')
            .should('eq','/booking-management')

        });

        it('Checking Bookings & Deals Text', () => {
            cy.get('.block-intro-title')
            .should('have.text', '\n                  My Bookings & Deals\n                ')
        
        });

        it('Checking See All Tab', () => {
            cy.get('#see-all > :nth-child(1) > :nth-child(1) > .block__booking__management > .empty__box > .empty__box__img')
            .should('have.attr','src')
            
        });

        it('Checking Active Logo', () => {
            cy.get('#see-all > :nth-child(1) > :nth-child(1) > .block__booking__management > .empty__box > .empty__box__img')
            .should('have.attr','src')
            .and('contain','https://www.10travlr.com.au/shared/assets/images/no-transaction-img.svg')
            
        });

        it('Checking Active & History Button', () => {
            cy.get('.dropdown-sort-btn > .t-icon')
            .should('be.visible')

            cy.get('a > .toggle-cap-desktop')
            .should('contain','History')
            .click()

            cy.wait(3000)

        });

        it('Login to Booking History', () => {
            cy.get('#email').type('julian.travlr@gmail.com')
    
            cy.get('#password').type('qwertyuiop1234567890', {log:false})
    
            cy.get('#btn-submit').click()

            cy.visit('https://www.10travlr.com.au/booking-management?view=history')
            
        });

        it('Checking History Logo', () => {
            cy.get('#see-all > :nth-child(1) > :nth-child(1) > .block__booking__management > .empty__box > .empty__box__img')
            .should('have.attr','src')
            .and('contain','https://www.10travlr.com.au/shared/assets/images/no-transaction-img-history.svg')
            
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