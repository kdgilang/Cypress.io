/// <reference types="cypress" />

describe('Smoke Test 10Travlr', () => {

    describe('Accessing Homepage', () => {

        it('Close Pop-Up Message', () => {

        cy.visit('https://www.10travlr.com.au')

        cy.wait(5000)

        cy.get('.intercom-tour-frame').then ( $element => {

            const $body = $element.contents().find('body')

            let stripe = cy.wrap($body)

            stripe.find('.intercom-1o29jst').click()
            
        cy.get('.privy-dismiss-content').click()

        cy.wait(3000)

        cy.get('.t-btn-inverted').click()
        
        })
    })
})
    
describe('Header Details', () => {

    it('Discover', () => {

        cy.get('.t-navbar-top-left-burger > .t-icon').click()
        
        cy.wait(3000)

        cy.visit('https://www.10travlr.com.au/pages/key-of-our-benefits-13/')
            .location('pathname')
            .should('eq', '/pages/key-of-our-benefits-13/')

        cy.wait(3000)

        cy.get('.t-btn-inverted').click()

        cy.visit('https://www.10travlr.com.au/')
            .location('pathname')
            .should('eq', '/')

            cy.wait(3000)

            cy.get('.intercom-tour-frame').then ( $element => {

                const $body = $element.contents().find('body')
    
                let stripe = cy.wrap($body)
    
                stripe.find('.intercom-1o29jst').click()

        cy.get('.privy-dismiss-content').click()

    })
})

    it('Flight', () => {

        cy.get('.t-navbar-top-left-burger > .t-icon').click()

        cy.wait(3000)

        cy.visit('https://www.10travlr.com.au/flights')
            .location('pathname')
            .should('eq', '/flights')

        cy.wait(3000)

        cy.get('.t-btn-inverted').click()

            cy.visit('https://www.10travlr.com.au/')
            .location('pathname')
            .should('eq', '/')

            cy.wait(3000)

            cy.get('.intercom-tour-frame').then ( $element => {

                const $body = $element.contents().find('body')
    
                let stripe = cy.wrap($body)
    
                stripe.find('.intercom-1o29jst').click()

        cy.get('.privy-dismiss-content').click()

    })
})

    it('Accommodation', () => {

        cy.get('.t-navbar-top-left-burger > .t-icon').click()

        cy.wait(3000)

        cy.visit('https://www.10travlr.com.au/accommodation')
            .location('pathname')
            .should('eq', '/accommodation')

        cy.wait(3000)

            cy.visit('https://www.10travlr.com.au/')
            .location('pathname')
            .should('eq', '/')

            cy.wait(3000)

            cy.get('.intercom-tour-frame').then ( $element => {

                const $body = $element.contents().find('body')
    
                let stripe = cy.wrap($body)
    
                stripe.find('.intercom-1o29jst').click()

        cy.get('.privy-dismiss-content').click()

        cy.wait(3000)

        cy.get('.t-btn-inverted').click()

    })
})

it('Activities', () => {

    cy.get('.t-navbar-top-left-burger > .t-icon').click()

    cy.wait(3000)

    cy.visit('https://www.10travlr.com.au/activities')
        .location('pathname')
        .should('eq', '/activities')

        cy.wait(3000)

        cy.get('.t-btn-inverted').click()

        cy.visit('https://www.10travlr.com.au/')
        .location('pathname')
        .should('eq', '/')

        cy.wait(3000)

        cy.get('.intercom-tour-frame').then ( $element => {

            const $body = $element.contents().find('body')

            let stripe = cy.wrap($body)

            stripe.find('.intercom-1o29jst').click()

    cy.get('.privy-dismiss-content').click()

    })
})

it('Deals & Offers', () => {

    cy.get('.t-navbar-top-left-burger > .t-icon').click()

    cy.wait(3000)

    cy.visit('https://www.10travlr.com.au/deals-and-offers')
        .location('pathname')
        .should('eq', '/deals-and-offers')

        cy.wait(3000)

        cy.get('.t-btn-inverted').click()

        cy.visit('https://www.10travlr.com.au/')
        .location('pathname')
        .should('eq', '/')

        cy.wait(3000)

        cy.get('.intercom-tour-frame').then ( $element => {

            const $body = $element.contents().find('body')

            let stripe = cy.wrap($body)

            stripe.find('.intercom-1o29jst').click()

    cy.get('.privy-dismiss-content').click()

            })
        })
    })

    describe('Footer Details', () => {

        it('Claim Your Listing', () => { 
                cy.visit('www.facebook.com')


        })
    })

















































    })
