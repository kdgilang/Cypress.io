/// <reference types="Cypress"/>

context('Accessing Homepage', () => {
    
    describe('Load 10Travlr Production', () => {
        
        it('Visit 10Travlr', () => {
            cy.visit('https://www.10travlr.com.au/')
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

    describe('Humm Section', () => {

        it('Checking Humm Banner', () => {
            cy.get(':nth-child(1) .img')
            .should('have.attr', 'src')
            .and('exist')
        
        });

    });

    describe('C-Card Section', () => {
        
        it('Find Inspiration For You', () => {
            cy.get('.c-home-find-inspiration h2.t-heading-2')
            .should('contain',' Find Inspiration for you')
            .and('be.visible')

            cy.get('.t-cards-wrapper :nth-child(1) .title')
            .should('contain','Shortlists')
            .and('be.visible')

            cy.get('.t-cards-wrapper :nth-child(2) .title')
            .should('contain','Trips')
            .and('be.visible')
            .scrollIntoView()

        });

        it('Popular Activities', () => {
            cy.get('.c-home-activities :nth-child(1)')
            .should('contain', 'Popular Activities')
            .and('be.visible')

            cy.get('.section-title-button__action')
            .contains('See more')
            .should('have.attr', 'data-gtm-event')
            .and('equal','ev_homepage_deals_seemore')

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

    describe('Destination Guides Section', () => {

        it('Checking Title', () => {
            cy.get('.c-home-destinations h2.t-heading-2')
            .should('contain', 'Destination Guides')
            .and('not.be.empty')
            .scrollIntoView()

        });

        it('Checking All Contents', () => {
            cy.get('.c-home-destinations a.t-card-title')
            .should('have.attr','data-gtm-event')
            .and('equal','ev_homepage_destinations_item')
        
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

    describe('Mobile Banner', () => {
        
        it('Checking Banner', () => {
            cy.get('.bg-banner')
            .should('have.attr', 'style')
            .and('exist')

        });

        it('Checking Banner Content', () => {
            cy.get('.bg-banner .content-container')
            .find('a')
            .should('have.class', 'app-logo-link')
            .find('img')
            .and('have.attr', 'src')
            cy.get('.content-container > h2')
            .should('contain', 'Get our app')
            .and('not.be.empty')
            .scrollIntoView()

        });

        it('Checking Banner Buttons', () => {
            cy.get('.bg-banner .download-wrapper')
            .find('a')
            .should('have.attr', 'href')
            cy.get('.bg-banner a.pl-10')
            .should('have.attr', 'href')
        
        });

    });

    describe('Home Social Media', () => {

        it('Checking Instagram', () => {
            cy.get('.c-home-social-media')
            .find('a')
            .should('have.attr', 'href')
        
        });

        it('Checking 10Travlr', () => {
            cy.get('.c-home-social-media img.image')
            .should('have.attr', 'src')
            cy.get('.account__content h3.title')
            .should('contain', '10travlr')
            cy.get('.account__content a.link')
            .should('contain', 'Follow')
            .and('have.attr', 'href')

        });

        it('Checking Text', () => {
            cy.get('.social-media__content p.description')
            .should('contain', 'Daily travel inspiration from around the world ')
            .and('not.be.empty')

        });

        it('Checking Image Slider', () => {
            cy.get('.c-image-slider .c-carousel')
            .should('have.attr', 'tabindex')
        
        });

    });

    describe('Footer', () => {
        
        it('Checking ID & Class of Footer', () => {
            cy.get('footer')
            .should('have.id', 'travlrFooter')
            .scrollIntoView()
            
        });

        it('Checking Explore by & Other Stuff', () => {
            cy.get('footer .footer-list')
            .find('li')
            .should('have.length', '33')
            cy.get('footer a.t-m-b-10')
            .should('have.attr','href')
            
        });

        it('Checking Subscribe Container', () => {
            cy.get('footer p.t-body-text')
            .should('contain', 'To get the latest deals, news & more')

            cy.get('#footerSubscribeEmail')
            .click()
            .type('QA.test@gmail.com')
            .clear()

        });

        it('Checking Social Media Logo & Button', () => {
            cy.get('footer ul.social-media')
            .find('li')
            .should('have.length','6')
            .and('be.visible')

            cy.get('#footerSubscribeSubmit')
            .should('contain','Subscribe')
            .and('have.value', 'Subscribe')
            
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