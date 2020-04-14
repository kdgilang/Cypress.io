Cypress.Commands.add('Homepage', () => {
    cy
    
    .visit('/')
    .title()
    .should('eq', '10 Travlr - Experience the difference')
    .get('.privy-dismiss-content').click()
    .wait(5000)
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
    .wait(3000)

    })

})

Cypress.Commands.add('Header', () => {
    cy

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
    .wait(3000)
    .get('.t-navbar-sidebar-header-icon > .t-icon')
    .scrollIntoView()
    .get('.t-navbar-sidebar-header-icon > .t-icon').click()

})

Cypress.Commands.add('Footer', () => {
    cy.get('footer').scrollIntoView({ easing: 'linear' })
    cy.get('h6.t-heading-5.t-m-b-26').should('have.text', '\n            Explore by location\n          \n            Other stuff\n          Subscribe')
    cy.get('button[type="submit"]').should('be.visible')
    cy.get('select[data-gtm-event="ev_footer_multicurrency"]').should('be.visible')        

})

Cypress.Commands.add('Shortlist',() => {
    cy.get('.title').contains('Shortlist').scrollIntoView({easing:"linear"}).should('be.visible').click()
    cy.visit('/shortlists').location('pathname').should('eq', '/shortlists')
    cy.get('h1.t-heading-2.t-color-grey-darkest').should('contain', 'All Favourite Lists')
    cy.get('.privy-dismiss-content').click()
    cy.get('.c-dropdown-checkboxes').should('exist')
    cy.get('h2.t-heading-2.title.t-m-b-16').should('have.text','\n        Popular Shortlist\n      \n        Accommodation\n      \n        Eat and Drink\n      ')

})

Cypress.Commands.add('Discover', () => {
    cy.get('.t-navbar-top-left-burger > .t-icon').should('be.visible').click()
    cy.get(':nth-child(1) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-title > div > span').should('be.visible').click()
    cy.visit('/pages/key-of-our-benefits-13/').location('pathname').should('eq', '/pages/key-of-our-benefits-13/')
    cy.get('h1.t-m-b-32').should('be.visible').and('have.text', '\n          One stop-shop travel platform\n        ')
    cy.get('.t-btn-default').should('be.visible').and('have.text', '\n          sign up now\n        ')

})

Cypress.Commands.add('Trips', () => {
    cy.get('.t-navbar-top-left-logo-image').click()
    cy.visit('/').location('pathname').should('eq','/')
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

Cypress.Commands.add('Articles', () => {
    cy.visit('/').location('pathname').should('eq','/')
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

Cypress.Commands.add('Activities', () => {
    cy.get('.mobile__menuButton').should('be.visible').click()
    cy.get('.mobile__accordion__menu > :nth-child(4) > label').should('be.visible').click()
    cy.visit('/activities').location('pathname').should('eq', '/activities')
    cy.get('h1.t-heading-2').should('have.text','Make the most of your travel')
    cy.get('p.t-body-text.t-mobile-m-t-8').should('have.text', 'Book from thousands of activities, tours and things to do for you and your mates')
    cy.get('#activitiesSearchDestination').should('exist')
    cy.get('button[type="submit"]').should('be.visible')

})

Cypress.Commands.add('DealsAndOffers', () => {
    cy.get('.t-navbar-top-left-burger > .t-icon').should('be.visible').click()
    cy.get(':nth-child(5) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-title > div > span').should('be.visible').click()
    cy.visit('/deals-and-offers/').location('pathname').should('eq', '/deals-and-offers/')
    cy.get('form.t-form.t-top-form.t-form-inline').should('exist').and('be.visible')
    cy.get('.t-container').should('exist').and('be.visible')
    cy.get('h3.t-heading-3').should('have.text', '\n          More Fiji accommodation offers\n        \n          Make the most of your Fiji holiday\n        ')
})

Cypress.Commands.add('HealthAndBeauty', () => {
    cy.get('.t-navbar-top-left-burger > .t-icon').click()
    cy.get(':nth-child(5) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon').click()
    cy.get(':nth-child(5) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-body > .t-navbar-sidebar-body-child > :nth-child(3) > .t-navbar-sidebar-body-child-item-link').click()
    cy.visit('/deals-and-offers/search?category=Health%20%26%20Beauty').location('pathname').should('eq', '/deals-and-offers/search')
    cy.get('form.t-form').should('be.visible')
    cy.get('button[data-gtm-event="ev_deals_search_button"]').contains(' Search Deals ').should('be.visible')
    cy.get('.c-banner-humm').should('exist')

})

Cypress.Commands.add('Events', () => {
    cy.visit('/events').location('pathname').should('eq', '/events')
    cy.get('.event-table').should('exist')
    cy.get('p.main__description').should('exist')

})

Cypress.Commands.add('Venue', () => {
    cy.visit('/venue')
    cy.get('#email').type('julian.travlr@gmail.com')
    cy.get('#password').type('qwertyuiop1234567890', {log:false})
    cy.get('#btn-submit').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
        throw err
    })
    cy.visit('https://www.10travlr.com.au/venue').location('pathname').should('eq', '/venue')
    cy.get('h3.m-t-0').should('have.text','Add a venue')
    cy.get('.form-item-row > :nth-child(2) > .form-control').should('be.visible').and('exist')
    cy.get('#content').should('be.visible').and('exist')

})

Cypress.Commands.add('Login', () => {
    cy.visit('/')
    cy.get('.privy-dismiss-content').click()
    cy.wait(5000)
    cy.get('.intercom-tour-frame').then ( $element => {
        const $body = $element.contents().find('body')
        let stripe = cy.wrap($body)
        stripe.find('.intercom-1o29jst').click()
    cy.get('.t-btn-inverted').click()
    cy.get('.t-navbar-top-right-menus-list-item-link').click()
    cy.get('#email').type('julian.travlr@gmail.com')
    cy.get('#password').type('qwertyuiop1234567890', {log:false})
    cy.get('img').should('have.attr','src')
    cy.get('#email').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get(':nth-child(3) > .small').should('contain','Email')
    cy.get(':nth-child(4) > .small').should('contain','Password')
    cy.get('#btn-submit').click()

    })
})

Cypress.Commands.add('BookingAndDeals', () => {
    cy.get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > #shortcut__profile > .my__account__text').click()
    cy.get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > .dropdown-menu > [href="https://www.10travlr.com.au/booking-management?view=active"]').click()
    cy.get('#email').type('julian.travlr@gmail.com')
    cy.get('#password').type('qwertyuiop1234567890', {log:false})
    cy.get('#btn-submit').click()
    cy.visit('/booking-management').location('pathname').should('eq','/booking-management')
    cy.get('.block-intro-title').should('have.text', '\n                  My Bookings & Deals\n                ')
    cy.get('#see-all > :nth-child(1) > :nth-child(1) > .block__booking__management > .empty__box > .empty__box__img').should('have.attr','src')
    cy.get('#see-all > :nth-child(1) > :nth-child(1) > .block__booking__management > .empty__box > .see-link > .see-link-a').should('be.visible')
})

Cypress.Commands.add('MyShortlists', () => {
    cy.get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > #shortcut__profile > .my__account__text').click()
    cy.get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > .dropdown-menu > [href="https://www.10travlr.com.au/my/shortlist"]').click()
    cy.get('#email').type('julian.travlr@gmail.com')
    cy.get('#password').type('qwertyuiop1234567890', {log:false})
    cy.get('#btn-submit').click()
    cy.visit('/my/shortlist').location('pathname').should('eq', '/my/shortlist')
    cy.get('.privy-dismiss-content').click()
    cy.get('.change__cover__btn > a').should('exist')
    cy.get('.link__follow > .t-button-outline-secondary').should('exist')
    cy.get('.more').should('be.visible')
    
})

