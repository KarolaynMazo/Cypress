// -- obejtos de cy --
/// <reference types="cypress"/>

describe('Aserciones y tipos de aserciones', () => {
    before(() => {
        cy.visit('/automation-practice-form')
    })

    //este se ejecuta despues de todos los test 
    after(()=>{
        cy.visit('/')
    })

   //before each, cuando enc ada test se tiene que ir a la pagina,o ejecutar algo repetitivo 

    it.only('Asercion', () => {
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName')
            .should('be.visible')
            .should('have.attr', 'placeholder', 'First Name')
        cy.get('#firstName')
            .should('be.visible')
            .and('have.attr', 'placeholder', 'First Name')
    })
    it('Asercion 2', () => {
        cy.visit('/automation-practice-form')
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').then((elemento) => {
            expect(elemento).to.be.visible
            expect(elemento).to.have.attr('placeholder', 'First Name')
        })
    })
    it('Asercion 3', () => {
        //cy.visit('/automation-practice-form')
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').then((elemento) => {
            assert.equal(elemento.attr('placeholder'), 'First Name')
        })
    })
})
