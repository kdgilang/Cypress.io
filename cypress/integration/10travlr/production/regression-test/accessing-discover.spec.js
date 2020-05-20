/// <reference types="Cypress"/>

context('Accessing Discover', () => {

    describe('Visit 10Travlr Discover', () => {

        it('Checking URL 10Travlr Discover', () => {
            cy.visit('https://www.10travlr.com.au/pages/key-of-our-benefits-13/').location('pathname')
            .should('eq', '/pages/key-of-our-benefits-13/')

        });

        it('Checking Header Text', () => {
            cy.get('h1.t-m-b-32')
            .should('be.visible')
            .and('contain', 'One stop-shop travel platform')

        });

        it('Checking Sign Up Button', () => {
            cy.get('.t-btn-default')
            .should('be.visible')
            .and('contain', 'sign up now')
            
        });

        it('Checking Middle Text 10Travlr', () => {
            cy.get('.t-container > h2')
            .should('be.visible')
            .and('not.be.empty')

        });

        it('Accepting Cookies', () => {
            cy.get('.t-btn-inverted')
            .click()

        });

        it('Checking Images Container', () => {
            cy.get('.t-position-relative > :nth-child(1) > .t-display-table > :nth-child(1) > .t-m-b-32')
            .should('be.visible')
            .and('have.attr', 'src')

        });

        it('Checking Discover Table', () => {
            cy.get('.t-background-white.t-p-t-64')
            .should('exist')
            .and('be.visible')
            .scrollIntoView()

        });

        it('Checking Explore Flight Button', () => {

            cy.get(':nth-child(6) > .t-container > .t-p-l-32 > .t-m-b-16 > .t-color-secondary')
            .should('have.class','t-color-secondary')
            .and('contain','Flights')
            .scrollIntoView()
            cy.get(':nth-child(6) > .t-container > .t-p-l-32 > .t-btn-tertiary')
            .should('have.attr', 'href')
            .and('contain', '/flights')
            

        });

        it('Checking Explore Accommodation Button', () => {
            cy.get(':nth-child(7) > .t-container > .t-p-r-32 > .t-m-b-16 > .t-color-secondary')
            .should('have.class','t-color-secondary')
            .and('contain','Hotels')
            .scrollIntoView()
            cy.get(':nth-child(7) > .t-container > .t-p-r-32 > .t-btn-tertiary')
            .should('have.attr', 'href')
            .and('contain', '/accommodation')
            
        });

        it('Checking Explore Activities Button', () => {
            cy.get(':nth-child(8) > .t-container > .t-p-l-32 > .t-m-b-16 > .t-color-secondary')
            .should('have.class','t-color-secondary')
            .and('contain','Things to Do')
            .scrollIntoView()
            cy.get(':nth-child(8) > .t-container > .t-p-l-32 > .t-btn-tertiary')
            .should('have.attr', 'href')
            .and('contain', '/activities')

        });

        it('Checking Explore Deals Button', () => {
            cy.get(':nth-child(9) > .t-container > .t-p-r-32 > .t-m-b-16 > .t-color-secondary')
            .should('have.class','t-color-secondary')
            .and('contain','Deals')
            .scrollIntoView()
            cy.get(':nth-child(9) > .t-container > .t-p-r-32 > .t-btn-tertiary')
            .should('have.attr', 'href')
            .and('contain', '/deals')

        });

        it('Checking Explore Shortlists Button', () => {
            cy.get(':nth-child(10) > .t-container > .t-p-l-32 > h2.t-m-b-16 > .t-color-secondary')
            .should('have.class','t-color-secondary')
            .and('contain','love')
            .scrollIntoView()
            cy.get(':nth-child(10) > .t-container > .t-p-l-32 > .t-btn-tertiary')
            .should('have.attr', 'href')
            .and('contain', '/shortlists')

        });

        it('Checking Mobile Button', () => {
            cy.get(':nth-child(11) > .t-container > .t-p-r-32 > .t-m-b-16 > .t-color-secondary')
            .should('have.class','t-color-secondary')
            .and('contain','Expert advice')
            .scrollIntoView()
            cy.get(':nth-child(1) > .t-display-block > .t-w-100')
            .should('have.attr','src')
            .and('contain','https://s3-ap-southeast-2.amazonaws.com/static.trvcdn.net/shared/assets/images/Apple+Store@2x.png')
            cy.get(':nth-child(3) > .t-display-block > .t-w-100')
            .should('have.attr','src')
            .and('contain','https://s3-ap-southeast-2.amazonaws.com/static.trvcdn.net/shared/assets/images/Google+Play@2x.png')

        });

        it('Checking Sign Up Button', () => {
            cy.get('[style="background-color: rgb(230, 247, 255);"] > .t-container > .t-p-l-32 > .t-m-b-16 > .t-color-secondary')
            .should('have.class','t-color-secondary')
            .and('contain','One place')
            .scrollIntoView()
            cy.get('[style="background-color: rgb(230, 247, 255);"] > .t-container > .t-p-l-32 > .t-btn-tertiary')
            .should('have.attr', 'href')
            .and('contain', '/register')

        });

        it('Checking 10Travlr Logo', () => {
            cy.get('.t-background-white.t-text-align-center > .t-m-b-32')
            .should('have.attr', 'src')
            .and('contain','https://s3-ap-southeast-2.amazonaws.com/static.trvcdn.net/shared/assets/images/10travlr+logo@2x.jpg')

        });

        it('Checking FAQ Button', () => {
            cy.get('.align-left-mobile > .t-btn-tertiary')
            .scrollIntoView()
            .should('have.attr', 'href')
            .and('contain', 'https://10travlr.zendesk.com/hc/en-us')

        });
        
    })

});