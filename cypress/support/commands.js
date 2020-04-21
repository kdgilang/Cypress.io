/// <reference types="Cypress"/>

// Start-10Travlr-Production-Regression-Testing
describe('10Travlr-Production', () => {

    Cypress.Commands.add('homepageproduction10travlr', () => {
        cy
    
        .visit('https://www.10travlr.com.au/')
        .title()
        .should('eq', '10 Travlr - Experience the difference')
   
        // .get('.privy-dismiss-content').click()
    
        .get('.intercom-tour-frame').then ( $element => {
            const $body = $element.contents().find('body')
            let stripe = cy.wrap($body)
            stripe.find('.intercom-1o29jst').click()
        })

        cy

        .get('.t-btn-inverted').click()

        .get('.t-navbar-top-left-logo-image')
        .should('have.attr', 'src')

        .get('.t-navbar-top-right-menus-list-item-link')
        .should('be.visible').and('contain', 'Login')

        .get('.t-hero-main-content-list-title-wrapper > .t-btn')
        .should('be.visible').and('contain', 'Take a look')



    })

    Cypress.Commands.add('headerandfooterproduction10travlr', () => {
        cy

        .visit('https://www.10travlr.com.au/')
        .title()
        .should('eq', '10 Travlr - Experience the difference')

        .get('.intercom-tour-frame').then ( $element => {
            const $body = $element.contents().find('body')
            let stripe = cy.wrap($body)
            stripe.find('.intercom-1o29jst').click()
        })

        .get('.t-btn-inverted').click()

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

        .get('footer')
        .scrollIntoView({ easing: 'linear' })
        
        .get('h6.t-heading-5.t-m-b-26')
        .should('have.text', '\n            Explore by location\n          \n            Other stuff\n          Subscribe')
        
        .get('button[type="submit"]')
        .should('be.visible')
        
        .get('select[data-gtm-event="ev_footer_multicurrency"]')
        .should('be.visible')

    })
      

    Cypress.Commands.add('shortlistsproduction10travlr',() => {
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

    Cypress.Commands.add('discoverproduction10travlr', () => {
        cy

        .visit('https://www.10travlr.com.au/pages/key-of-our-benefits-13/').location('pathname')
        .should('eq', '/pages/key-of-our-benefits-13/')
    
        .get('h1.t-m-b-32')
        .should('be.visible').and('have.text', '\n          One stop-shop travel platform\n        ')
    
        .get('.t-btn-default')
        .should('be.visible').and('have.text', '\n          sign up now\n        ')

    })

//  Cypress.Commands.add('tripsproduction10travlr', () => {
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

    Cypress.Commands.add('articlesproduction10travlr', () => {
        cy

        .visit('https://www.10travlr.com.au/articles').location('pathname')
        .should('eq','/articles')
    
        // .get('.privy-dismiss-content').click()
    
        .get('h1.pb--10')
        .should('have.text', 'News & Articles')
    
        .get('.form__search')
        .should('be.visible')

    })

    Cypress.Commands.add('activitiesproduction10travlr', () => {
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

    Cypress.Commands.add('dealsandoffersproduction10travlr', () => {
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

    Cypress.Commands.add('healthandbeautyproduction10travlr', () => {
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

    Cypress.Commands.add('eventsproduction10travlr', () => {
        cy

        .visit('https://www.10travlr.com.au/events').location('pathname')
        .should('eq', '/events')
    
        .get('.event-table')
        .should('exist')
    
        .get('p.main__description')
        .should('exist')

    })

    // Cypress.Commands.add('venueproduction10travlr', (done) => {
    //     cy
        

    //     .visit('https://www.10travlr.com.au/venue')
    
    //     .get('#email').type('julian.travlr@gmail.com')
    
    //     .get('#password').type('qwertyuiop1234567890', {log:false})
    
    //     .get('#btn-submit').click()
    //     .should('be.visible')

    //     .visit('https://www.10travlr.com.au/venue')
        
        // Cypress.on('uncaught:exception', (err, runnable) => {
        //     throw err

        //     done()
        // })

        // .visit('https://www.10travlr.com.au/venue')

        // .get('h3.m-t-0')
        // .should('have.text','Add a venue')
    
        // .get('.form-item-row > :nth-child(2) > .form-control')
        // .should('be.visible').and('exist')
    
        // .get('#content')
        // .should('be.visible').and('exist')

    // })

    Cypress.Commands.add('loginproduction10travlr', () => {
        cy

        .visit('https://www.10travlr.com.au/')

        // .get('.privy-dismiss-content').click()

        .get('.intercom-tour-frame').then ( $element => {
            const $body = $element.contents().find('body')
            let stripe = cy.wrap($body)
            stripe.find('.intercom-1o29jst').click()

        })
    
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

    Cypress.Commands.add('bookingsanddealsproduction10travlr', () => {
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

    Cypress.Commands.add('myshortlistsproduction10travlr', () => {
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

    Cypress.Commands.add('mytripproduction10travlr', () => {
        cy

        .visit('https://www.10travlr.com.au/my/trip').location('pathname')
        .should('eq','/login/a/49')

        .get('#email').type('julian.travlr@gmail.com')
    
        .get('#password').type('qwertyuiop1234567890', {log:false})
    
        .get('#btn-submit').click()

        .visit('https://www.10travlr.com.au/my/trip').location('pathname')
        .should('eq','/my/trip')

        .get(':nth-child(1) > :nth-child(1) > .block__title__left > h2')
        .should('contain.text','My Trips').and('exist')
        
        .get(':nth-child(1) > .block-empty-state-my-account > .empty__box > .link > .t-button-primary')
        .should('be.visible').and('contain.text','Create one')
        
        .get(':nth-child(2) > .block-empty-state-my-account > .empty__box > .link > .t-button-primary')
        .should('be.visible').and('contain.text','Browse Popular Trips')

    })

    Cypress.Commands.add('myarticleproduction10travlr', () => {
        cy

        .visit('https://www.10travlr.com.au/my/article').location('pathname')
        .should('eq','/login/a/49')

        .get('#email').type('julian.travlr@gmail.com')
    
        .get('#password').type('qwertyuiop1234567890', {log:false})
    
        .get('#btn-submit').click()

        .visit('https://www.10travlr.com.au/my/article').location('pathname')
        .should('eq','/my/article')

        .get(':nth-child(1) > :nth-child(1) > .block__title__left > h2')
        .should('contain.text','My Articles').and('exist')

        .get(':nth-child(1) > .block-empty-state-my-account > .empty__box > .link > .t-button-primary')
        .should('be.visible').and('contain.text','Create one')
    
    })
    
    Cypress.Commands.add('notificationproduction10travlr', () => {
        cy

        .visit('https://www.10travlr.com.au/my/notification').location('pathname')
        .should('eq','/login/a/49')

        .get('#email').type('julian.travlr@gmail.com')
    
        .get('#password').type('qwertyuiop1234567890', {log:false})
    
        .get('#btn-submit').click()

        .visit('https://www.10travlr.com.au/my/notification').location('pathname')
        .should('eq','/my/notification')

        .get('h1')
        .should('exist').and('contain.text','Notifications')

    })

    Cypress.Commands.add('createlistproduction10travlr', () => {
        cy

        .visit('https://www.10travlr.com.au/').location('pathname')
        .should('eq','/')
        
        .get('.intercom-tour-frame').then ( $element => {
            const $body = $element.contents().find('body')
            let stripe = cy.wrap($body)
            stripe.find('.intercom-1o29jst').click()
        })

        .get('.t-navbar-top-right-menus-list-item-link').click()

        .get('#email').type('julian.travlr@gmail.com')
    
        .get('#password').type('qwertyuiop1234567890', {log:false})
    
        .get('#btn-submit').click()

        .visit('https://www.10travlr.com.au/').location('pathname')
        .should('eq','/')

        // cy.wait(5000)

        // .get('.intercom-tour-frame').then ( $element => {
        //     const $body = $element.contents().find('body')
        //     let stripe = cy.wrap($body)
        //     stripe.find('.intercom-1o29jst').click()
        // })
        
        .get('.t-navbar-top-right-menus-list-item-link-myaccount').click()
        .should('be.visible')

        .get(':nth-child(6) > .t-navbar-top-right-menus-list-item-child-item-link').click()
        
        .get('#listName').type('QA TESTING')
        .should('be.visible')

        .get('#description').type('Just For Testing')
        .should('be.visible')
        
        .get('#create').click()
        .should('be.visible')

        .get('.wrap__box__item > :nth-child(1) > .modal-button > .caption')
        .scrollIntoView()

        // .get('.wrap__box__item > #sh-2360 > .btn__actions > .action__edit__article > .a__link').click()
        // .should('be.visible')

        // .get('#updateShortlist > .modal-dialog > .modal-content > .modal-body > .form--material--design > .my__profile__form__field > .mt--10 > .form-group > .form-control').clear()
        // .type('Update Testing')
        // .should('be.visible')
        
        // .get('#updateShortlist > .modal-dialog > .modal-content > .modal-body > .form--material--design > .my__profile__form__field > .order__3 > .Btns > .btn__submit').click()
        // .should('be.visible')

    })
    
    Cypress.Commands.add('businessportalproduction10travlr', () => {
        cy

        .visit('https://www.10travlr.com.au/business_premium/test-test-test-1282692/overview')
        .location('pathname')
        .should('eq','/accommodation/detail/test-test-test-1282692')

        .get('.mobile__header > .container-Common > .common__shortcut > .common__login > .common__login__link').click()

        .get('#email').type('julian.travlr@gmail.com')
    
        .get('#password').type('qwertyuiop1234567890', {log:false})
    
        .get('#btn-submit').click()

        .get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > #shortcut__profile > .my__account__text').click()

    })

    Cypress.Commands.add('logoutproduction10travlr', () => {
        cy

        .visit('https://www.10travlr.com.au/').location('pathname')
        .should('eq','/')
        
        .get('.intercom-tour-frame').then ( $element => {
            const $body = $element.contents().find('body')
            let stripe = cy.wrap($body)
            stripe.find('.intercom-1o29jst').click()
        })

        .get('.t-navbar-top-right-menus-list-item-link').click()

        .get('#email').type('julian.travlr@gmail.com')
    
        .get('#password').type('qwertyuiop1234567890', {log:false})
    
        .get('#btn-submit').click()

        .visit('https://www.10travlr.com.au/').location('pathname')
        .should('eq','/')

        .get('.t-navbar-top-right-menus-list-item-link-myaccount').click()

        .get(':nth-child(8) > .t-navbar-top-right-menus-list-item-child-item-link').click()

        
    })
    
    Cypress.Commands.add('accessingcontactusproduction10travlr', () => {
        cy

        .visit('https://www.10travlr.com.au/contact-us')
        .location('pathname')
        .should('eq','/contact-us')

        .get('#mapThumb')
        .should('be.visible').and('exist')

        .get('h2')
        .should('have.text','Let us help you with your next journey...')


        
    })
    
    Cypress.Commands.add('termsproduction10travlr', () => {
        cy

        .visit('https://www.10travlr.com.au/pages/terms-3')
        .location('pathname')
        .should('eq','/pages/terms-3')

        .get('h1 > span')
        .should('contain.text','TERMS')
        
    })
    
    Cypress.Commands.add('dmcaproduction10travlr', () => {
        cy

        .visit('https://www.10travlr.com.au/pages/dmca-4')
        .location('pathname')
        .should('eq','/pages/dmca-4')

        .get('.t-heading-1')
        .should('have.text','DMCA')

        


        
    })
    Cypress.Commands.add('refundpoliciproduction10travlr', () => {
        cy

        .visit('https://www.10travlr.com.au/pages/refund-policy-5')
        .location('pathname')
        .should('eq','/pages/refund-policy-5')

        .get('.t-heading-1 > strong')
        .should('have.text','REFUND POLICY')


        
    })
    Cypress.Commands.add('privacypolicyproduction10travlr', () => {
        cy

        .visit('https://www.10travlr.com.au/pages/privacy-policy-1')
        .location('pathname')
        .should('eq','/pages/privacy-policy-1')

        .get('.t-heading-1')
        .should('have.text','PRIVACY POLICY')
        
    })
})
// End-10Travlr-Production-Regression-Testing



// Start-10Travlr-Staging-Smoke-Testing
// describe('10Travlr-Staging', () => {

//     Cypress.Commands.add('homepageproduction10travlr', () => {
//         cy
    
//         .visit('https://www.10travlr.com.au/')
//         .title()
//         .should('eq', '10 Travlr - Experience the difference')
   
//         // .get('.privy-dismiss-content').click()
    
//         .get('.intercom-tour-frame').then ( $element => {
//             const $body = $element.contents().find('body')
//             let stripe = cy.wrap($body)
//             stripe.find('.intercom-1o29jst').click()
//         })

//         cy

//         .get('.t-btn-inverted').click()

//         .get('.t-navbar-top-left-logo-image')
//         .should('have.attr', 'src')

//         .get('.t-navbar-top-right-menus-list-item-link')
//         .should('be.visible').and('contain', 'Login')

//         .get('.t-hero-main-content-list-title-wrapper > .t-btn')
//         .should('be.visible').and('contain', 'Take a look')



//     })

//     Cypress.Commands.add('headerandfooterproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/')
//         .title()
//         .should('eq', '10 Travlr - Experience the difference')

//         .get('.intercom-tour-frame').then ( $element => {
//             const $body = $element.contents().find('body')
//             let stripe = cy.wrap($body)
//             stripe.find('.intercom-1o29jst').click()
//         })

//         .get('.t-btn-inverted').click()

//         .get('#headerSearchSuggestion')
//         .should('be.visible').and('have.attr', 'type')

//         .get(':nth-child(1) > .t-w-100 > .link-wrapper > .link-item')
//         .should('contain', 'Mix & Match Flights')

//         .get(':nth-child(2) > .t-w-100 > .link-wrapper > .link-item')
//         .should('contain', 'Accommodation')

//         .get(':nth-child(3) > .t-w-100 > .link-wrapper > .link-item')
//         .should('contain', 'Activities')

//         .get(':nth-child(4) > .t-w-100 > .link-wrapper > .link-item')
//         .should('contain', 'Deals & Offers')

//         .get('.t-navbar-top-left-burger > .t-icon').click()

//         .get(':nth-child(1) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
//         .should('be.visible').click() 
        
//         .get(':nth-child(2) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
//         .should('be.visible').click() 
        
//         .get(':nth-child(3) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
//         .should('be.visible').click() 
        
//         .get(':nth-child(4) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
//         .scrollIntoView()
//         .should('be.visible').click() 
        
//         .get(':nth-child(5) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
//         .scrollIntoView()
//         .should('be.visible').click() 
        
//         .get(':nth-child(6) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
//         .scrollIntoView()
//         .should('be.visible').click()
        
//         .get('.t-navbar-sidebar-header-icon > .t-icon')
//         .scrollIntoView()
        
//         .get('.t-navbar-sidebar-header-icon > .t-icon').click()

//         .get('footer')
//         .scrollIntoView({ easing: 'linear' })
        
//         .get('h6.t-heading-5.t-m-b-26')
//         .should('have.text', '\n            Explore by location\n          \n            Other stuff\n          Subscribe')
        
//         .get('button[type="submit"]')
//         .should('be.visible')
        
//         .get('select[data-gtm-event="ev_footer_multicurrency"]')
//         .should('be.visible')

//     })
      

//     Cypress.Commands.add('shortlistsproduction10travlr',() => {
//         cy

//         .visit('https://www.10travlr.com.au/shortlists').location('pathname')
//         .should('eq', '/shortlists')

//         .get('.title').contains('Shortlist').scrollIntoView({easing:"linear"})
//         .should('be.visible').click()
    
//         .get('h1.t-heading-2.t-color-grey-darkest')
//         .should('contain', 'All Favourite Lists')
    
//         // .get('.privy-dismiss-content').click()

//         .get('.c-dropdown-checkboxes')
//         .should('exist')
    
//         .get('h2.t-heading-2.title.t-m-b-16')
//         .should('have.text','\n        Popular Shortlist\n      \n        Accommodation\n      \n        Eat and Drink\n      ')

//     })

//     Cypress.Commands.add('discoverproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/pages/key-of-our-benefits-13/').location('pathname')
//         .should('eq', '/pages/key-of-our-benefits-13/')
    
//         .get('h1.t-m-b-32')
//         .should('be.visible').and('have.text', '\n          One stop-shop travel platform\n        ')
    
//         .get('.t-btn-default')
//         .should('be.visible').and('have.text', '\n          sign up now\n        ')

//     })

// //  Cypress.Commands.add('tripsproduction10travlr', () => {
// //     cy

// //     .visit('https://www.10travlr.com.au/trips').location('pathname')
// //     should('eq','/trips')
    
// //     .get('h1.pb--10')
// //     .should('have.text', 'All Trips')
    
// //     .get('.form__search')
// //     .should('exist').and('be.visible')
    
// //     .get('div.block__title__left')
// //     .should('have.text', 'Most Popular Trips\n                \n            ')

// // })

//     Cypress.Commands.add('articlesproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/articles').location('pathname')
//         .should('eq','/articles')
    
//         // .get('.privy-dismiss-content').click()
    
//         .get('h1.pb--10')
//         .should('have.text', 'News & Articles')
    
//         .get('.form__search')
//         .should('be.visible')

//     })

//     Cypress.Commands.add('activitiesproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/activities').location('pathname')
//         .should('eq', '/activities')

//         .get('h1.t-heading-2')
//         .should('have.text','Make the most of your travel')
    
//         .get('p.t-body-text.t-mobile-m-t-8')
//         .should('have.text', 'Book from thousands of activities, tours and things to do for you and your mates')
    
//         .get('#activitiesSearchDestination')
//         .should('exist')
    
//         .get('button[type="submit"]')
//         .should('be.visible')

//     })

//     Cypress.Commands.add('dealsandoffersproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/deals-and-offers/').location('pathname')
//         .should('eq', '/deals-and-offers/')
    
//         .get('form.t-form.t-top-form.t-form-inline')
//         .should('exist').and('be.visible')
    
//         .get('.t-container')
//         .should('exist').and('be.visible')
    
//         .get('h3.t-heading-3')
//         .should('have.text', '\n          More Fiji accommodation offers\n        \n          Make the most of your Fiji holiday\n        ')
//     })

//     Cypress.Commands.add('healthandbeautyproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/deals-and-offers/search?category=Health%20%26%20Beauty').location('pathname')
//         .should('eq', '/deals-and-offers/search')
    
//         .get('form.t-form')
//         .should('be.visible')
    
//         .get('button[data-gtm-event="ev_deals_search_button"]').contains(' Search Deals ')
//         .should('be.visible')
    
//         .get('.c-banner-humm')
//         .should('exist')

//     })

//     Cypress.Commands.add('eventsproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/events').location('pathname')
//         .should('eq', '/events')
    
//         .get('.event-table')
//         .should('exist')
    
//         .get('p.main__description')
//         .should('exist')

//     })

//     Cypress.Commands.add('venueproduction10travlr', () => {
//         cy
    
//         .visit('https://www.10travlr.com.au/venue').location('pathname')
//         .should('eq', '/venue')
    
//         .get('#email').type('julian.travlr@gmail.com')
    
//         .get('#password').type('qwertyuiop1234567890', {log:false})
    
//         .get('#btn-submit').click()
//         Cypress.on('uncaught:exception', (err, runnable) => {
//             throw err
//         })

//         .get('h3.m-t-0')
//         .should('have.text','Add a venue')
    
//         .get('.form-item-row > :nth-child(2) > .form-control')
//         .should('be.visible').and('exist')
    
//         .get('#content')
//         .should('be.visible').and('exist')

//     })

//     Cypress.Commands.add('loginproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/')

//         // .get('.privy-dismiss-content').click()

//         .get('.intercom-tour-frame').then ( $element => {
//             const $body = $element.contents().find('body')
//             let stripe = cy.wrap($body)
//             stripe.find('.intercom-1o29jst').click()

//         })
    
//         .get('.t-btn-inverted').click()
    
//         .get('.t-navbar-top-right-menus-list-item-link').click()
    
//         .get('#email').type('julian.travlr@gmail.com')
    
//         .get('#password').type('qwertyuiop1234567890', {log:false})
    
//         .get('img')
//         .should('have.attr','src')
    
//         .get('#email')
//         .should('be.visible')
    
//         .get('#password')
//         .should('be.visible')
    
//         .get(':nth-child(3) > .small')
//         .should('contain','Email')
    
//         .get(':nth-child(4) > .small')
//         .should('contain','Password')
        
//         .get('#btn-submit').click()

//     })

//     Cypress.Commands.add('bookingsanddealsproduction10travlr', () => {
//         cy

    
//         .visit('https://www.10travlr.com.au/booking-management')
    
//         .get('#email').type('julian.travlr@gmail.com')
    
//         .get('#password').type('qwertyuiop1234567890', {log:false})
    
//         .get('#btn-submit').click()

//         .visit('https://www.10travlr.com.au/booking-management').location('pathname')
//         .should('eq','/booking-management')

    
//         .get('.block-intro-title')
//         .should('have.text', '\n                  My Bookings & Deals\n                ')
    
//         .get('#see-all > :nth-child(1) > :nth-child(1) > .block__booking__management > .empty__box > .empty__box__img')
//         .should('have.attr','src')
    
//         .get('#see-all > :nth-child(1) > :nth-child(1) > .block__booking__management > .empty__box > .see-link > .see-link-a')
//         .should('be.visible')
//     })

//     Cypress.Commands.add('myshortlistsproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/my/shortlist')

//         .get('#email').type('julian.travlr@gmail.com')
    
//         .get('#password').type('qwertyuiop1234567890', {log:false})
    
//         .get('#btn-submit').click()

//         .visit('https://www.10travlr.com.au/my/shortlist').location('pathname')
//         .should('eq','/my/shortlist')
    
//         .get('.change__cover__btn > a')
//         .should('exist')
    
//         .get('.link__follow > .t-button-outline-secondary')
//         .should('exist')
    
//         .get('.more')
//         .should('be.visible')
    
//     })

//     Cypress.Commands.add('mytripproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/my/trip').location('pathname')
//         .should('eq','/login/a/49')

//         .get('#email').type('julian.travlr@gmail.com')
    
//         .get('#password').type('qwertyuiop1234567890', {log:false})
    
//         .get('#btn-submit').click()

//         .visit('https://www.10travlr.com.au/my/trip').location('pathname')
//         .should('eq','/my/trip')

//         .get(':nth-child(1) > :nth-child(1) > .block__title__left > h2')
//         .should('contain.text','My Trips').and('exist')
        
//         .get(':nth-child(1) > .block-empty-state-my-account > .empty__box > .link > .t-button-primary')
//         .should('be.visible').and('contain.text','Create one')
        
//         .get(':nth-child(2) > .block-empty-state-my-account > .empty__box > .link > .t-button-primary')
//         .should('be.visible').and('contain.text','Browse Popular Trips')

//     })

//     Cypress.Commands.add('myarticleproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/my/article').location('pathname')
//         .should('eq','/login/a/49')

//         .get('#email').type('julian.travlr@gmail.com')
    
//         .get('#password').type('qwertyuiop1234567890', {log:false})
    
//         .get('#btn-submit').click()

//         .visit('https://www.10travlr.com.au/my/article').location('pathname')
//         .should('eq','/my/article')

//         .get(':nth-child(1) > :nth-child(1) > .block__title__left > h2')
//         .should('contain.text','My Articles').and('exist')

//         .get(':nth-child(1) > .block-empty-state-my-account > .empty__box > .link > .t-button-primary')
//         .should('be.visible').and('contain.text','Create one')
    
//     })
    
//     Cypress.Commands.add('notificationproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/my/notification').location('pathname')
//         .should('eq','/login/a/49')

//         .get('#email').type('julian.travlr@gmail.com')
    
//         .get('#password').type('qwertyuiop1234567890', {log:false})
    
//         .get('#btn-submit').click()

//         .visit('https://www.10travlr.com.au/my/notification').location('pathname')
//         .should('eq','/my/notification')

//         .get('h1')
//         .should('exist').and('contain.text','Notifications')

//     })

//     Cypress.Commands.add('createlistproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/').location('pathname')
//         .should('eq','/')
        
//         .get('.intercom-tour-frame').then ( $element => {
//             const $body = $element.contents().find('body')
//             let stripe = cy.wrap($body)
//             stripe.find('.intercom-1o29jst').click()
//         })

//         .get('.t-navbar-top-right-menus-list-item-link').click()

//         .get('#email').type('julian.travlr@gmail.com')
    
//         .get('#password').type('qwertyuiop1234567890', {log:false})
    
//         .get('#btn-submit').click()

//         .visit('https://www.10travlr.com.au/').location('pathname')
//         .should('eq','/')

        
        
//         .get('.t-navbar-top-right-menus-list-item-link-myaccount').click()
//         .should('be.visible')

//         .get(':nth-child(6) > .t-navbar-top-right-menus-list-item-child-item-link').click()
        
//         .get('#listName').type('QA TESTING')
//         .should('be.visible')

//         .get('#description').type('Just For Testing')
//         .should('be.visible')
        
//         .get('#create').click()
//         .should('be.visible')

//         .get('.wrap__box__item > :nth-child(1) > .modal-button > .caption')
//         .scrollIntoView()

//         // .get('.wrap__box__item > #sh-2360 > .btn__actions > .action__edit__article > .a__link').click()
//         // .should('be.visible')

//         // .get('#updateShortlist > .modal-dialog > .modal-content > .modal-body > .form--material--design > .my__profile__form__field > .mt--10 > .form-group > .form-control').clear()
//         // .type('Update Testing')
//         // .should('be.visible')
        
//         // .get('#updateShortlist > .modal-dialog > .modal-content > .modal-body > .form--material--design > .my__profile__form__field > .order__3 > .Btns > .btn__submit').click()
//         // .should('be.visible')

//     })
    
//     Cypress.Commands.add('businessportalproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/business_premium/test-test-test-1282692/overview')
//         .location('pathname')
//         .should('eq','/accommodation/detail/test-test-test-1282692')

//         .get('.mobile__header > .container-Common > .common__shortcut > .common__login > .common__login__link').click()

//         .get('#email').type('julian.travlr@gmail.com')
    
//         .get('#password').type('qwertyuiop1234567890', {log:false})
    
//         .get('#btn-submit').click()

//         .get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > #shortcut__profile > .my__account__text').click()

//     })

//     Cypress.Commands.add('logoutproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/').location('pathname')
//         .should('eq','/')
        
//         .get('.intercom-tour-frame').then ( $element => {
//             const $body = $element.contents().find('body')
//             let stripe = cy.wrap($body)
//             stripe.find('.intercom-1o29jst').click()
//         })

//         .get('.t-navbar-top-right-menus-list-item-link').click()

//         .get('#email').type('julian.travlr@gmail.com')
    
//         .get('#password').type('qwertyuiop1234567890', {log:false})
    
//         .get('#btn-submit').click()

//         .visit('https://www.10travlr.com.au/').location('pathname')
//         .should('eq','/')

//         .get('.t-navbar-top-right-menus-list-item-link-myaccount').click()

//         .get(':nth-child(8) > .t-navbar-top-right-menus-list-item-child-item-link').click()

        
//     })
    
//     Cypress.Commands.add('accessingcontactusproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/contact-us')
//         .location('pathname')
//         .should('eq','/contact-us')

//         .get('#mapThumb')
//         .should('be.visible').and('exist')

//         .get('h2')
//         .should('have.text','Let us help you with your next journey...')


        
//     })
    
//     Cypress.Commands.add('termsproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/pages/terms-3')
//         .location('pathname')
//         .should('eq','/pages/terms-3')

//         .get('h1 > span')
//         .should('contain.text','TERMS')
        
//     })
    
//     Cypress.Commands.add('dmcaproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/pages/dmca-4')
//         .location('pathname')
//         .should('eq','/pages/dmca-4')

//         .get('.t-heading-1')
//         .should('have.text','DMCA')

        


        
//     })
//     Cypress.Commands.add('refundpoliciproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/pages/refund-policy-5')
//         .location('pathname')
//         .should('eq','/pages/refund-policy-5')

//         .get('.t-heading-1 > strong')
//         .should('have.text','REFUND POLICY')


        
//     })
//     Cypress.Commands.add('privacypolicyproduction10travlr', () => {
//         cy

//         .visit('https://www.10travlr.com.au/pages/privacy-policy-1')
//         .location('pathname')
//         .should('eq','/pages/privacy-policy-1')

//         .get('.t-heading-1')
//         .should('have.text','PRIVACY POLICY')
        
//     })
// })
// End-10Travlr-Staging-Smoke-Testing
    
    
    


