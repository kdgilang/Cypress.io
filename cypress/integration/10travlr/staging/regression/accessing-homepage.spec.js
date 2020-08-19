/// <reference types="Cypress"/>

context('Accessing Homepage', () => {
    
    describe('Load 10Travlr Staging', () => {
        
        it('Visit 10Travlr', () => {
            cy.visit('https://10travlr.freya.travlr.com/')
            .location('pathname')
            .should('equal', '/')
        
        });

        it('Accepting Cookies', () => {
            cy.get('.t-v-align-middle > .t-btn-inverted')
            .click()
        
        });

    });
    
    describe('Header', () => {
        
        it('Checking Header Container', () => {
            cy.get('header')
            .should('be.visible')
            .and('not.be.empty')
            .scrollIntoView()
        
        });

        it('Checking Top Left Button', () => {
            cy.get('.t-navbar-top-left-burger > .t-icon')
            .should('be.visible')
        
        });

        it('Checking Header Travlr Logo', () => {
            cy.get('.t-navbar-top-left-logo-image')
            .should('have.attr', 'src')
            .and('not.be.empty')
        
        });
        
        it('Checking Search Column', () => {
            cy.get('#headerSearchSuggestion')
            .invoke('attr','data-gtm-event')
            .should('equal','ev_header_searchsuggestion')
            .and('not.be.empty')
        
        });

        it('Checking Login Button', () => {
            cy.get('.t-navbar-top-right-menus-list-item-link')
            .should('be.visible')
            .and('contain','Login')
            .invoke('attr','data-gtm-event')
            .should('equal','ev_header_signin')
        
        });
    
    });

    describe('Sign Up Banner Section', () => {

        it('Checking Content Left',() => {
            cy.get('h3.title')
            .should('contain', 'Sign Up, it’s FREE')
            .and('be.visible')

        });

        it('Checking Content Right', () => {

            cy.get('.banner-promotion__container-content')
            .should('be.visible')
            .and('exist')
            .scrollIntoView()
            
            cy.get('h3.title')
            .should('contain', 'Plus member access to:')
            .and('not.be.empty')

            cy.get('.content-right__list-member-access')
            .find('li')
            .should('have.length', '3')

            cy.get('.content-right__wrapper-inner > .t-btn')
            .contains('Sign Up')
            .invoke('attr','data-gtm-event')
            .should('equal', 'ev_homepage_bannerpromo_button')

        });

    });

    describe('Trending Destinations', () => {

        it('Checking Title', () => {
            cy.get('.c-home-trending-destinations h2.t-heading-2')
            .should('contain', 'Trending Destinations')
            .and('be.visible')
            .scrollIntoView()
        
        });

        it('Checking Content', () => {
            cy.get('p.t-m-b-15')
            .should('contain', 'Browse accomodation in')
            
            cy.get('h3.t-heading-2')
            .should('contain', 'Melbourne')
       
        });
    
    });

    describe('Latest Articles Section', () => {
        
        it('Checking Title', () => {
            cy.get('.c-home-articles h2.t-heading-2')
            .should('contain', 'Latest Articles')
            .and('exist')
            .scrollIntoView()

        });

    });

    describe('Footer', () => {
        
        it('Checking ID & Class of Footer', () => {
            cy.get('footer')
            .should('have.id', 'travlrFooter')
            .scrollIntoView()
            
        });
        
        it('Checking Footer Logo', () => {
            cy.get('footer .t-navbar-bottom-main-left-logo-bb')
            .should('have.attr', 'src')
            .and('exist')

        });

        it('Checking Copyright Text', () => {
            cy.get('footer .t-color-white')
            .should('contain', '© Copyright 10 Travlr. All rights reserved.')
            .and('exist')
            
        });

    });

})