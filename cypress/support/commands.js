

// Start-10Travlr-Production-Smoke-Testing

Cypress.Commands.add('homepage10travlr', () => {
    cy
    
    .visit('https://www.10travlr.com.au/')
    .title()
    .should('eq', '10 Travlr - Experience the difference')
   
    // .get('.privy-dismiss-content').click()
    
    .get('.intercom-tour-frame').then ( $element => {
        const $body = $element.contents().find('body')
        let stripe = cy.wrap($body)
        stripe.find('.intercom-1o29jst').click()

        .get('.t-btn-inverted').click()

        .get('.t-navbar-top-left-logo-image')
        .should('have.attr', 'src')

        .get('.t-navbar-top-right-menus-list-item-link')
        .should('be.visible').and('contain', 'Login')

        .get('.t-hero-main-content-list-title-wrapper > .t-btn')
        .should('be.visible').and('contain', 'Take a look')

        .get('#headerSearchSuggestion')
        .should('be.visible').and('have.attr', 'type')

        .get(':nth-child(1) > .t-w-100 > .link-wrapper > .link-item')
        .should('contain', 'Mix & Match Flights')

        .get(':nth-child(2) > .t-w-100 > .link-wrapper > .link-item')
        .should('contain', 'Accommodation')

        .get(':nth-child(3) > .t-w-100 > .link-wrapper > .link-item')
        .should('contain', 'Activities')

        .get(':nth-child(4) > .t-w-100 > .link-wrapper > .link-item')
        .should('contain', 'Deals & Offers')

        .get('.t-navbar-top-left-burger > .t-icon').click()

        .get(':nth-child(1) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
        .should('be.visible').click() 
        
        .get(':nth-child(2) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
        .should('be.visible').click() 
        
        .get(':nth-child(3) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
        .should('be.visible').click() 
        
        .get(':nth-child(4) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
        .scrollIntoView()
        .should('be.visible').click() 
        
        .get(':nth-child(5) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
        .scrollIntoView()
        .should('be.visible').click() 
        
        .get(':nth-child(6) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
        .scrollIntoView()
        .should('be.visible').click()
        
        .get('.t-navbar-sidebar-header-icon > .t-icon')
        .scrollIntoView()
        
        .get('.t-navbar-sidebar-header-icon > .t-icon').click()

        .get('footer').scrollIntoView({ easing: 'linear' })
        
        .get('h6.t-heading-5.t-m-b-26')
        .should('have.text', '\n            Explore by location\n          \n            Other stuff\n          Subscribe')
        
        .get('button[type="submit"]')
        .should('be.visible')
        
        .get('select[data-gtm-event="ev_footer_multicurrency"]')
        .should('be.visible')  
    })

})
      

Cypress.Commands.add('shortlists10travlr',() => {
    cy

    .visit('https://www.10travlr.com.au/shortlists').location('pathname')
    .should('eq', '/shortlists')

    .get('.title').contains('Shortlist').scrollIntoView({easing:"linear"})
    .should('be.visible').click()
    
    .get('h1.t-heading-2.t-color-grey-darkest')
    .should('contain', 'All Favourite Lists')
    
    // .get('.privy-dismiss-content').click()
    
    .get('.c-dropdown-checkboxes')
    .should('exist')
    
    .get('h2.t-heading-2.title.t-m-b-16')
    .should('have.text','\n        Popular Shortlist\n      \n        Accommodation\n      \n        Eat and Drink\n      ')

})

Cypress.Commands.add('discover10travlr', () => {
    cy

    .visit('https://www.10travlr.com.au/pages/key-of-our-benefits-13/').location('pathname')
    .should('eq', '/pages/key-of-our-benefits-13/')
    
    .get('h1.t-m-b-32')
    .should('be.visible').and('have.text', '\n          One stop-shop travel platform\n        ')
    
    .get('.t-btn-default')
    .should('be.visible').and('have.text', '\n          sign up now\n        ')

})

// Cypress.Commands.add('trips10travlr', () => {
//     cy

//     .visit('https://www.10travlr.com.au/trips').location('pathname')
//     should('eq','/trips')
    
//     .get('h1.pb--10')
//     .should('have.text', 'All Trips')
    
//     .get('.form__search')
//     .should('exist').and('be.visible')
    
//     .get('div.block__title__left')
//     .should('have.text', 'Most Popular Trips\n                \n            ')

// })

Cypress.Commands.add('articles10travlr', () => {
    cy

    .visit('https://www.10travlr.com.au/articles').location('pathname')
    .should('eq','/articles')
    
    // .get('.privy-dismiss-content').click()
    
    .get('h1.pb--10')
    .should('have.text', 'News & Articles')
    
    .get('.form__search')
    .should('be.visible')

})

Cypress.Commands.add('activities10travlr', () => {
    cy

    .visit('https://www.10travlr.com.au/activities').location('pathname')
    .should('eq', '/activities')

    .get('h1.t-heading-2')
    .should('have.text','Make the most of your travel')
    
    .get('p.t-body-text.t-mobile-m-t-8')
    .should('have.text', 'Book from thousands of activities, tours and things to do for you and your mates')
    
    .get('#activitiesSearchDestination')
    .should('exist')
    
    .get('button[type="submit"]')
    .should('be.visible')

})

Cypress.Commands.add('dealsandoffers10travlr', () => {
    cy

    .visit('https://www.10travlr.com.au/deals-and-offers/').location('pathname')
    .should('eq', '/deals-and-offers/')
    
    .get('form.t-form.t-top-form.t-form-inline')
    .should('exist').and('be.visible')
    
    .get('.t-container')
    .should('exist').and('be.visible')
    
    .get('h3.t-heading-3')
    .should('have.text', '\n          More Fiji accommodation offers\n        \n          Make the most of your Fiji holiday\n        ')
})

Cypress.Commands.add('healthandbeauty10travlr', () => {
    cy

    .visit('https://www.10travlr.com.au/deals-and-offers/search?category=Health%20%26%20Beauty').location('pathname')
    .should('eq', '/deals-and-offers/search')
    
    .get('form.t-form')
    .should('be.visible')
    
    .get('button[data-gtm-event="ev_deals_search_button"]').contains(' Search Deals ')
    .should('be.visible')
    
    .get('.c-banner-humm')
    .should('exist')

})

Cypress.Commands.add('events10travlr', () => {
    cy

    .visit('https://www.10travlr.com.au/events').location('pathname')
    .should('eq', '/events')
    
    .get('.event-table')
    .should('exist')
    
    .get('p.main__description')
    .should('exist')

})

Cypress.Commands.add('venue10travlr', () => {
    
    cy.visit('https://www.10travlr.com.au/venue').location('pathname')
    .should('eq', '/venue')
    
    cy.get('#email').type('julian.travlr@gmail.com')
    
    cy.get('#password').type('qwertyuiop1234567890', {log:false})
    
    cy.get('#btn-submit').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
        throw err
    })
    
    cy

    .get('h3.m-t-0')
    .should('have.text','Add a venue')
    
    .get('.form-item-row > :nth-child(2) > .form-control')
    .should('be.visible').and('exist')
    
    .get('#content')
    .should('be.visible').and('exist')

})

Cypress.Commands.add('login10travlr', () => {
    cy

    .visit('https://www.10travlr.com.au/')

    // .get('.privy-dismiss-content').click()

    .get('.intercom-tour-frame').then ( $element => {
        const $body = $element.contents().find('body')
        let stripe = cy.wrap($body)
        stripe.find('.intercom-1o29jst').click()
    
        .get('.t-btn-inverted').click()
    
        .get('.t-navbar-top-right-menus-list-item-link').click()
    
        .get('#email').type('julian.travlr@gmail.com')
    
        .get('#password').type('qwertyuiop1234567890', {log:false})
    
        .get('img')
        .should('have.attr','src')
    
        .get('#email')
        .should('be.visible')
    
        .get('#password')
        .should('be.visible')
    
        .get(':nth-child(3) > .small')
        .should('contain','Email')
    
        .get(':nth-child(4) > .small')
        .should('contain','Password')
        
        .get('#btn-submit').click()

    })
})

Cypress.Commands.add('bookingsanddeals10travlr', () => {
    cy

    
    .visit('https://www.10travlr.com.au/booking-management')
    
    .get('#email').type('julian.travlr@gmail.com')
    
    .get('#password').type('qwertyuiop1234567890', {log:false})
    
    .get('#btn-submit').click()

    .visit('https://www.10travlr.com.au/booking-management').location('pathname')
    .should('eq','/booking-management')

    
    .get('.block-intro-title')
    .should('have.text', '\n                  My Bookings & Deals\n                ')
    
    .get('#see-all > :nth-child(1) > :nth-child(1) > .block__booking__management > .empty__box > .empty__box__img')
    .should('have.attr','src')
    
    .get('#see-all > :nth-child(1) > :nth-child(1) > .block__booking__management > .empty__box > .see-link > .see-link-a')
    .should('be.visible')
})

Cypress.Commands.add('myshortlists10travlr', () => {
    cy

    .visit('https://www.10travlr.com.au/my/shortlist')

    .get('#email').type('julian.travlr@gmail.com')
    
    .get('#password').type('qwertyuiop1234567890', {log:false})
    
    .get('#btn-submit').click()

    .visit('https://www.10travlr.com.au/my/shortlist').location('pathname')
    .should('eq','/my/shortlist')
    
    .get('.change__cover__btn > a')
    .should('exist')
    
    .get('.link__follow > .t-button-outline-secondary')
    .should('exist')
    
    .get('.more')
    .should('be.visible')
    
})

// End-10Travlr-Production-Smoke-Testing


