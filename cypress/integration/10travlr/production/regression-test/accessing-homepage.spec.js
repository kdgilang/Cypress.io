/// <reference types="Cypress"/>

context('Accessing Homepage', () => {
    
    describe('Load 10Travlr Production', () => {
        
        it('Closing Intercome Tour Frame', () => {
            cy.visit('https://www.10travlr.com.au/')
            .location('pathname')
            .should('equal', '/')
            
            cy.wait(3000)
            
            cy.get('.intercom-tour-frame').then ( $element => {
                const $body = $element.contents().find('body')
                let stripe = cy.wrap($body)
                stripe.find('.intercom-1o29jst').click()
            
            })
        
        })

        it('Accepting Cookies', () => {
            cy.get('.t-btn-inverted').click()
        
        })

        it('Checking Intercom Chat', () => {
            cy.get('.intercom-launcher-frame').click()
            .should('be.visible').and('exist')
        
        })

    })
    
    describe('Header', () => {
        
        it('Checking Header Container', () => {
            cy.get('header')
            .should('be.visible')
            .and('not.be.empty')
            .scrollIntoView()
        
        })

        it('Checking Top Left Button', () => {
            cy.get('.t-navbar-top-left-burger > .t-icon')
            .should('be.visible')
        
        })

        it('Checking Header Travlr Logo', () => {
            cy.get('.t-navbar-top-left-logo-image')
            .should('have.attr', 'src')
            .and('not.be.empty')
        
        })
        
        it('Checking Search Column', () => {
            cy.get('#headerSearchSuggestion')
            .invoke('attr','data-gtm-event')
            .should('equal','ev_header_searchsuggestion')
            .and('not.be.empty')
        
        })

        it('Checking Login Button', () => {
            cy.get('.t-navbar-top-right-menus-list-item-link')
            .should('be.visible')
            .and('contain','Login')
            .invoke('attr','data-gtm-event')
            .should('equal','ev_header_signin')
        
        })
    
    })

    describe('Jumbotron Section', () => {

        it('Checking Jumbotron Main Text', () => {
            cy.get('.t-hero-main-content-list-title-wrapper .t-heading-1')
            .should('be.visible')
            .and('contain','Holiday here this year')
            .scrollIntoView()

        })

        it('Checking Button Jumbotron', () => {
            cy.get('.t-hero-main-content-list-title-wrapper .t-btn')
            .should('be.visible')
            .and('contain','Take a look')
            .invoke('attr','data-gtm-event')
            .should('equal','ev_homepage_banner_header_button')
        
        })

    })

    describe('Shortcut Panel Section', ()=> {

        it('Checking Mix & Match Flights', () => {
            cy.get(':nth-child(1) div.title')
            .should('be.visible')
            .and('not.be.empty')
            .should('contain','Mix & Match Flights')
            .and('not.be.empty')

        })

        it('Checking Accommodation', () => {
            cy.get(':nth-child(2) div.title')
            .should('be.visible')
            .and('not.be.empty')
            .should('contain','Accommodation')
            .and('not.be.empty')
            
        })

        it('Checking Activities', () => {
            cy.get(':nth-child(3) div.title')
            .should('be.visible')
            .and('not.be.empty')
            .should('contain','Activities')
            .and('not.be.empty')
            
        })

        it('Checking Deals & Offers', () => {
            cy.get(':nth-child(4) div.title')
            .should('be.visible')
            .and('not.be.empty')
            .should('contain','Deals & Offers')
            .and('not.be.empty')
            .scrollIntoView()
            
        })

    })

    describe('Humm Section', () => {

        it('Checking Humm Banner', () => {
            cy.get(':nth-child(1) .img')
            .should('have.attr', 'src')
            .and('exist')
        
        })

    })

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

        })

        it('Popular Activities', () => {
            cy.get('.c-home-activities :nth-child(1)')
            .should('contain', 'Popular Activities')
            .and('be.visible')

            cy.get('.section-title-button__action')
            .contains('See more')
            .should('have.attr', 'data-gtm-event')
            .and('equal','ev_homepage_activities_seemore')

        })

    })

    describe('Sign Up Banner Section', () => {

        it('Checking Content Left',() => {
            cy.get('h3.title')
            .should('contain', 'Sign Up, it’s FREE')
            .and('be.visible')

        })

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

        })
    })

    describe('Recommended Accommodation Section', ()=> {

        it('Checking Title', () => {
            cy.get('h2.t-color-grey-darkest')
            .contains('Recommended Accommodation')
            .should('be.visible')
            .and('exist')
        })

        it('Checking Button See more', () => {
            cy.get('.c-home-accommodation a.t-btn-default')
            .contains('See more')
            .should('have.attr', 'data-gtm-event')
            .and('equal','ev_homepage_accommodation_seemore')
        })

    })

    describe('Trending Destinations', () => {

        it('Checking Title', () => {
            cy.get('.c-home-trending-destinations h2.t-heading-2')
            .should('contain', 'Trending Destinations')
            .and('be.visible')
            .scrollIntoView()
        
        })

        it('Checking Content', () => {
            cy.get('p.t-m-b-15')
            .should('contain', 'Browse accomodation in')
            
            cy.get('h3.t-heading-2')
            .should('contain', 'Melbourne')
        })
    
    })

    describe('Mix and Match Flights Banner', () => {
        
        it('Checking Banner', () => {
            cy.get('.c-home-holiday > .t-container > .c-card')
            .should('be.visible')
            .and('exist')
            .scrollIntoView()
        })

        it('Checking Banner Title', () => {
            cy.get('.c-home-holiday h3.title')
            .should('contain', 'Mix and Match Flights')
            .and('not.be.empty')
        
        })

        it('Checking Banner Button', () => {
            cy.get('.t-card-title-content > .t-btn')
            .contains('Find flights')
            .should('have.attr', 'data-gtm-event')
            .and('equal', 'ev_homepage_holiday_button')
            .and('not.be.disabled')

        })
    
    })

    describe('Destination Guides Section', () => {

        it('Checking Title', () => {
            cy.get('.c-home-destinations h2.t-heading-2')
            .should('contain', 'Destination Guides')
            .and('not.be.empty')
            .scrollIntoView()

        })

        it('Checking Button See more', () => {
            cy.get('.c-home-destinations a.t-btn-default')
            .contains('See more')
            .should('have.attr', 'data-gtm-event')
            .and('equal','ev_homepage_destination_seemore')
        })

        it('Checking All Contents', () => {
            cy.get('.c-home-destinations a.t-card-title')
            .should('have.attr','data-gtm-event')
            .and('equal','ev_homepage_destinations_item')
        
        })
    
    })

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

        })

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

        })

        it('Checking Banner Buttons', () => {
            cy.get('.bg-banner .download-wrapper')
            .find('a')
            .should('have.attr', 'href')
            cy.get('.bg-banner a.pl-10')
            .should('have.attr', 'href')
        
        })

    });

    describe('Home Social Media', () => {

        it('Checking Instagram', () => {
            cy.get('.c-home-social-media')
            .find('a')
            .should('have.attr', 'href')
        
        })

        it('Checking 10Travlr', () => {
            cy.get('.c-home-social-media img.image')
            .should('have.attr', 'src')
            cy.get('.account__content h3.title')
            .should('contain', '10travlr')
            cy.get('.account__content a.link')
            .should('contain', 'Follow')
            .and('have.attr', 'href')

        })

        it('Checking Text', () => {
            cy.get('.social-media__content p.description')
            .should('contain', 'Daily travel inspiration from around the world ')
            .and('not.be.empty')

        })

        it('Checking Image Slider', () => {
            cy.get('.c-image-slider .c-carousel')
            .should('have.attr', 'tabindex')
        
        })
        
    });




















})