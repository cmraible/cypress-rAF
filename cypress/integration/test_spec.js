/// <reference types="cypress" />

describe('Cypress Background Animation', () => {

    for(var i=1; i < 100; i++) {
        it(`${i}. It opens the modal`, () => {
            cy.visit('http://localhost:3000');
            cy.wait(1000)
            cy.contains('Open').click();
            cy.contains('Hello').should('be.visible');
        });
    }



})