/// <reference types="Cypress"/>

context('Accessing My Bookings & Deals', () => {
    
    describe('Visit Bookings & Deals URL', () => {
        
        it('Checking URL', () => {
            cy.visit('https://10travlr.freya.travlr.com/booking-management')

        });

        it('Login', () => {
            cy.get('#email').type('julian.travlr@gmail.com')
    
            cy.get('#password').type('qwertyuiop1234567890', {log:false})
    
            cy.get('#btn-submit').click()

            cy.visit('https://10travlr.freya.travlr.com/booking-management').location('pathname')
            .should('eq','/booking-management')

        });

        it('Checking Bookings & Deals Text', () => {
            cy.get('.block-intro-title')
            .should('have.text', '\n                  My Bookings & Deals\n                ')
        
        });

        it('Checking Active & History Button', () => {
            cy.get('.dropdown-sort-btn > .t-icon')
            .click()

            cy.get('a > .toggle-cap-desktop')
            .should('contain','History')
            .click()

            cy.wait(3000)

        });

        it('Login to Booking History', () => {
            cy.get('#email').type('julian.travlr@gmail.com')
    
            cy.get('#password').type('qwertyuiop1234567890', {log:false})
    
            cy.get('#btn-submit').click()

            cy.visit('https://10travlr.freya.travlr.com/booking-management?view=history')
            
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