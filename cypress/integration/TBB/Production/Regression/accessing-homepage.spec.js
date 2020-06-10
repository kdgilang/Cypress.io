/// <reference types="Cypress"/>

context('Accessing Homepage', () => {
    
    describe('Load TBB Production', () => {
        
        it('Visiting Homepage', () => {
            cy.visit('https://www.thebalibible.com/')
            .location('pathname')
            .should('equal', '/')
        })

        it('Accept Cookies', () => {
            cy.get('.t-btn-inverted')
            .click()
            
        });

    })

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

    describe('Jumbotron Section', () => {

        it('Checking Jumbotron Main Text', () => {
            cy.get('.t-hero-main-content-list-title-wrapper .t-heading-1')
            .should('be.visible')
            .and('contain','A one-stop-shop solution for your next Bali Holiday!')
            .scrollIntoView()

        });

        it('Checking Button Jumbotron', () => {
            cy.get('.t-hero-main-content-list-title-wrapper .t-btn')
            .should('be.visible')
            .and('contain','Check out our exclusive Mates Rates Now!')
            .invoke('attr','data-gtm-event')
            .should('equal','ev_homepage_banner_header_button')
        
        });

    });

    describe('Todays Deals Title', () => {
        
        it('Checking Title', () => {
            cy.get('.c-home-deals > .t-container > .c-card > .c-section-title-button > .section-title-button__header > .w-auto-mobile > .t-heading-2')
            .should('have.text','\n        Today’s Deals\n      ')

        });

        it('Checking Text', () => {
            cy.get('.c-home-deals > .t-container > .c-card > .c-section-title-button > .section-title-button__header > .w-auto-mobile > .sub-header')
            .should('contain', 'Save up to 70% on holiday packages and things to do')
            .and('exist')
            
        });

        it('Checking SeeMore Button', () => {
            cy.get('.c-home-deals > .t-container > .c-card > .c-section-title-button > .section-title-button__header > .section-title-button__wrapper-action > .t-btn-default')
            .should('have.attr', 'href')
            .and('contain','/deals-and-offers')

            cy.get('.c-home-deals > .t-container > .c-card > .c-section-title-button > .section-title-button__header > .section-title-button__wrapper-action > .t-btn-default')
            .should('have.attr','data-gtm-event')
            .and('equal','ev_homepage_deals_seemore')

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
        
        it('Find Inspiration', () => {
            cy.get('.c-home-find-inspiration h2.t-heading-2')
            .should('contain',' Find Inspiration')
            .and('be.visible')

            cy.get('.t-cards-wrapper :nth-child(1) .title')
            .should('contain','Shortlists')
            .and('be.visible')

            cy.get('.t-cards-wrapper :nth-child(2) .title')
            .should('contain','Trips')
            .and('be.visible')
            .scrollIntoView()

        });

    })

    describe('Destination Guides Section', () => {

        it('Checking Title', () => {
            cy.get('.c-home-destinations h2.t-heading-2')
            .should('contain', 'Destination Guides')
            .and('not.be.empty')
            .scrollIntoView()

        });

        it('Checking Button See more', () => {
            cy.get('.c-home-destinations a.t-btn-default')
            .contains('See more')
            .should('have.attr', 'data-gtm-event')
            .and('equal','ev_homepage_destination_seemore')
        
        });

        it('Checking All Contents', () => {
            cy.get('.c-home-destinations a.t-card-title')
            .should('have.attr','data-gtm-event')
            .and('equal','ev_homepage_destinations_item')
        
        });
    
    });

    describe('Compare Cheap Flights Banner', () => {
        
        it('Checking Banner', () => {
            cy.get('.c-home-holiday > .t-container > .c-card')
            .should('be.visible')
            .and('exist')
            .scrollIntoView()
        
        });

        it('Checking Banner Title', () => {
            cy.get('.c-home-holiday h3.title')
            .should('contain', 'Compare cheap flight')
            .and('not.be.empty')
        
        });

        it('Checking Banner Text', () => {
            cy.get('.c-home-holiday > .t-container > .c-card > .t-columns > .t-col-mobile-12 > .t-card-title > .t-card-title-content > .description')
            .should('contain','Find and book the best flight from hundreds of airlines')
            
        });

        it('Checking Banner Button', () => {
            cy.get('.t-card-title-content > .t-btn')
            .contains('Find flights')
            .should('have.attr', 'data-gtm-event')
            .and('equal', 'ev_homepage_holiday_button')
            .and('not.be.disabled')

        });
    
    });

    describe('Featured Accommodation Section', ()=> {

        it('Checking Title', () => {
            cy.get('h2.t-color-grey-darkest')
            .contains('Featured Accommodation')
            .should('be.visible')
            .and('exist')
        
        });

        it('Checking Button See more', () => {
            cy.get('.c-home-accommodation a.t-btn-default')
            .contains('See more')
            .should('have.attr', 'data-gtm-event')
            .and('equal','ev_homepage_accommodation_seemore')
        
        });

    });

    describe('Checking Popular Activities', () => {
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

    describe('Latest Articles Section', () => {
        
        it('Checking Title', () => {
            cy.get('.c-home-articles h2.t-heading-2')
            .should('contain', 'Latest Articles')
            .and('exist')
            .scrollIntoView()

        });

        it('Checking See more Button', () => {
            cy.get('.c-home-articles a.t-btn-default')
            .contains('See more')
            .should('have.attr', 'data-gtm-event')
            .and('equal', 'ev_homepage_article_seemore')
            
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

        it('Checking TBB', () => {
            cy.get('.c-home-social-media img.image')
            .should('have.attr', 'src')
            cy.get('.account__content h3.title')
            .should('contain', 'thebalibible')
            cy.get('.account__content a.link')
            .should('contain', 'Follow')
            .and('have.attr', 'href')

        });

        it('Checking Text', () => {
            cy.get('.social-media__content p.description')
            .should('contain', 'Join over 900,000 other like minded wanderlusters')
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
            .should('have.length', '37')
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

        it('Checking Currency Option', () => {
            cy.get('select')
            .should('have.attr', 'data-gtm-event')
            .and('equal','ev_footer_multicurrency')

        });

        it('Checking Footer Logo', () => {
            cy.get('footer .t-navbar-bottom-main-left-logo-bb')
            .should('have.attr', 'src')
            .and('exist')

        });

        it('Checking Copyright Text', () => {
            cy.get('footer .t-color-white')
            .should('contain', 'The Bali Bible is a part of the TRAVLR GROUP. © 2020 TRAVLR Pty Ltd. All Rights Reserved.')
            .and('exist')
            
        });

    });

})