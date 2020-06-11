/// <reference types="Cypress"/>

context('Accessing Discover', () => {

    describe('Visit 10Travlr Discover', () => {

        it('Checking URL TBB Discover', () => {
            cy.visit('https://www.thebalibible.com/inspiration')
            .location('pathname')
            .should('eq', '/inspiration')

        });

        it('Checking Inspiration Title', () => {
            cy.get('.pb--10')
            .should('contain','Inspiration')

        });

        it('Checking Inspiration Text', () => {
            cy.get('.block__intro > p')
            .should('contain','Be inspired by Bali-goers and Bali-dreamers and get the latest news, articles and deals!')

        });

        it('Checking Popular List', () => {
            cy.get(':nth-child(2) > .block__title > .block__title__left > h2')
            .should('contain','Popular Lists')
            cy.get(':nth-child(2) > .block__title > .block__title__right > .block__title__right__link')
            .should('have.attr','href')
            .and('contain','https://www.thebalibible.com/shortlists')

        });

        it('Checking Popular Trips', () => {
            cy.get(':nth-child(3) > .block__title > .block__title__left > h2')
            .should('contain','Popular Trips')
            cy.get(':nth-child(3) > .block__title > .block__title__right > .block__title__right__link')
            .should('have.attr','href')
            .and('contain','https://www.thebalibible.com/trips')
            
        });

        it('Checking News & Articles', () => {
            cy.get('.block__grid__four > .block__title > .block__title__left > h2')
            .should('contain','News & Articles')
            cy.get('.block__grid__four > .block__title > .block__title__right > .block__title__right__link')
            .should('have.attr','href')
            .and('contain','https://www.thebalibible.com/articles')

        });

        it('Checking Top Users', () => {
            cy.get('.block__top__users > .block__title > .block__title__left > h2')
            .should('contain','Top Users')
            cy.get('.block__top__users > .block__title > .block__title__right > .block__title__right__link')
            .should('have.attr','href')
            .and('contain','https://www.thebalibible.com/users')

        });

        it('Checking Deals & Offers', () => {
            cy.get('.mb--40 > .block__title > .block__title__left > h2')
            .should('contain','Deals & Offers')
            cy.get('.mb--40 > .block__title > .block__title__right > .block__title__right__link')
            .should('have.attr','href')
            .and('contain','https://www.thebalibible.com/deals-and-offers')
            
        });
        
    })

});