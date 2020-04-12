Cypress.Commands.add('Homepage', () => {
    cy.visit('https://www.10travlr.com.au/')
    cy.title().should('eq', '10 Travlr - Experience the difference')
    cy.get('.privy-dismiss-content').click()
    cy.wait(5000)
    cy.get('.intercom-tour-frame').then ( $element => {
        const $body = $element.contents().find('body')
        let stripe = cy.wrap($body)
        stripe.find('.intercom-1o29jst').click()
    cy.get('.t-btn-inverted').click()
    cy.get('.t-navbar-top-left-logo-image').should('have.attr', 'src')
    cy.get('.t-navbar-top-right-menus-list-item-link').should('be.visible').and('contain', 'Login')
    cy.get('.t-hero-main-content-list-title-wrapper > .t-btn').should('be.visible').and('contain', 'Take a look')
    cy.get('#headerSearchSuggestion').should('be.visible').and('have.attr', 'type')
    cy.get(':nth-child(1) > .t-w-100 > .link-wrapper > .link-item').should('contain', 'Mix & Match Flights')
    cy.get(':nth-child(2) > .t-w-100 > .link-wrapper > .link-item').should('contain', 'Accommodation')
    cy.get(':nth-child(3) > .t-w-100 > .link-wrapper > .link-item').should('contain', 'Activities')
    cy.get(':nth-child(4) > .t-w-100 > .link-wrapper > .link-item').should('contain', 'Deals & Offers')
    cy.wait(3000)

    })

})

Cypress.Commands.add('Header', () => {
    cy.get('.t-navbar-top-left-burger > .t-icon').click()
    cy.get(':nth-child(1) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon').should('be.visible').click() 
    cy.get(':nth-child(2) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon').should('be.visible').click() 
    cy.get(':nth-child(3) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon').should('be.visible').click() 
    cy.get(':nth-child(4) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon').scrollIntoView().should('be.visible').click() 
    cy.get(':nth-child(5) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon').scrollIntoView().should('be.visible').click() 
    cy.get(':nth-child(6) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon').scrollIntoView().should('be.visible').click()
    cy.wait(3000)
    cy.get('.t-navbar-sidebar-header-icon > .t-icon').scrollIntoView()
    cy.get('.t-navbar-sidebar-header-icon > .t-icon').click()

})

Cypress.Commands.add('Footer', () => {
    cy.get('footer').scrollIntoView({ easing: 'linear' })
    cy.get('h6.t-heading-5.t-m-b-26').should('have.text', '\n            Explore by location\n          \n            Other stuff\n          Subscribe')
    cy.get('button[type="submit"]').should('be.visible')
    cy.get('select[data-gtm-event="ev_footer_multicurrency"]').should('be.visible')        
})

Cypress.Commands.add('Shortlist',() =>{
    cy.get('.title').contains('Shortlist').scrollIntoView({easing:"linear"}).should('be.visible').click()
    cy.visit('https://www.10travlr.com.au/shortlists').location('pathname').should('eq', '/shortlists')
    cy.get('h1.t-heading-2.t-color-grey-darkest').should('contain', 'All Favourite Lists')
    cy.get('.privy-dismiss-content').click()
    cy.get('.c-dropdown-checkboxes').should('exist')
    cy.get('h2.t-heading-2.title.t-m-b-16').should('have.text','\n        Popular Shortlist\n      \n        Accommodation\n      \n        Eat and Drink\n      ')

})

Cypress.Commands.add('Discover', () =>{
    cy.get('.t-navbar-top-left-burger > .t-icon').should('be.visible').click()
    cy.get(':nth-child(1) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-title > div > span').should('be.visible').click()
    cy.visit('https://www.10travlr.com.au/pages/key-of-our-benefits-13/').location('pathname').should('eq', '/pages/key-of-our-benefits-13/')
    cy.get('h1.t-m-b-32').should('be.visible').and('have.text', '\n          One stop-shop travel platform\n        ')
    cy.get('.t-btn-default').should('be.visible').and('have.text', '\n          sign up now\n        ')
})

Cypress.Commands.add('Trips', () =>{
    cy.get('.t-navbar-top-left-logo-image').click()
    cy.visit('https://www.10travlr.com.au/').location('pathname').should('eq','/')
    cy.get('.privy-dismiss-content').click()
    cy.wait(5000)
    cy.get('.intercom-tour-frame').then ( $element => {
        const $body = $element.contents().find('body')
        let stripe = cy.wrap($body)
        stripe.find('.intercom-1o29jst').click()
    cy.get('.t-btn-inverted').click()
    cy.get('.title').contains('Trips').scrollIntoView({easing:"linear"}).should('be.visible').click()
    cy.get('h1.pb--10').should('have.text', 'All Trips')
    cy.get('.form__search').should('exist').and('be.visible')
    cy.get('div.block__title__left').should('have.text', 'Most Popular Trips\n                \n            ')


    })
})

Cypress.Commands.add('Articles', () =>{
    cy.visit('https://www.10travlr.com.au/').location('pathname').should('eq','/')
    cy.get('.privy-dismiss-content').click()
    cy.wait(5000)
    cy.get('.intercom-tour-frame').then ( $element => {
        const $body = $element.contents().find('body')
        let stripe = cy.wrap($body)
        stripe.find('.intercom-1o29jst').click()
    cy.get('.t-btn-inverted').click()
    cy.get('.c-home-articles').scrollIntoView().should('be.visible')
    cy.get('.t-btn-default[data-gtm-event="ev_homepage_article_seemore"]').click()
    cy.get('h1.pb--10').should('have.text', 'News & Articles')
    cy.get('.form__search').should('be.visible')

    })
})

Cypress.Commands.add('Activities', () =>{
    cy.get('.mobile__menuButton').should('be.visible').click()
    cy.get('.mobile__accordion__menu > :nth-child(4) > label').should('be.visible').click()
    cy.visit('https://www.10travlr.com.au/activities').location('pathname').should('eq', '/activities')
    cy.get('h1.t-heading-2').should('have.text','Make the most of your travel')
    cy.get('p.t-body-text.t-mobile-m-t-8').should('have.text', 'Book from thousands of activities, tours and things to do for you and your mates')
    cy.get('#activitiesSearchDestination').should('exist')
    cy.get('button[type="submit"]').should('be.visible')

})

Cypress.Commands.add('DealsAndOffers', () =>{
    cy.get('.t-navbar-top-left-burger > .t-icon').should('be.visible').click()
    cy.get(':nth-child(5) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-title > div > span').should('be.visible').click()
    cy.visit('https://www.10travlr.com.au/deals-and-offers/').location('pathname').should('eq', '/deals-and-offers/')
    cy.get('form.t-form.t-top-form.t-form-inline').should('exist').and('be.visible')
    cy.get('.t-container').should('exist').and('be.visible')
    cy.get('h3.t-heading-3').should('have.text', '\n          More Fiji accommodation offers\n        \n          Make the most of your Fiji holiday\n        ')
})

Cypress.Commands.add('HealthAndBeauty', () =>{
    cy.get('.t-navbar-top-left-burger > .t-icon').click()
    cy.get(':nth-child(5) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon').click()
    cy.get(':nth-child(5) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-body > .t-navbar-sidebar-body-child > :nth-child(3) > .t-navbar-sidebar-body-child-item-link').click()
    cy.visit('https://www.10travlr.com.au/deals-and-offers/search?category=Health%20%26%20Beauty').location('pathname').should('eq', '/deals-and-offers/search')


})