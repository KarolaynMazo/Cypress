// -- obejtos de cy --
/// <reference types="cypress"/>

describe('Esperando por elementos', () => {
    before(() => {
        cy.visit('/automation-practice-form')
    })
   
    it('Esperar por un tiempo definido', () => {
        
     cy.wait(5000)  //esto es milisegundosss
        
    })
    it('Esperar por un elemento', () => {
        cy.get('#userEmail',{timeout:6000})

    })
    it('Esperar por un elemento y hacer asercion', () => {
        cy.get('#userEmail',{timeout:6000}).should('be.visible')

    })
  
})

describe('Esperando por elementos',{browser:chrome}, () => {
    before(() => {
        cy.visit('/')
    })
   
    it.only('deshabilitar un retry', () => {
       // cy.get(':nth-child(2) > :nth-child(1) > .card-body > h5',{timeout:6000})
        cy.get(':nth-child(2) > :nth-child(1) > .card-body > h5',{timeout:0}) // cuando queremos que el elemnto este explicito 



    })
  
  
})