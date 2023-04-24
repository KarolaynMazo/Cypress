describe('Tipo de localizadores', () => {
    //localizador
    it.only('Obtener por medio tag', () => {
        cy.visit('/automation-practice-form')
        cy.get('input')
    })

    it('Obtener por medio de un atributo', () => {
        // cy.visit('/automation-practice-form')
        cy.get('[placeholder="First Name"]')
    })
    it('Obtener por medio de un atributo y un tipo de elemento', () => {
        // cy.visit('/automation-practice-form')
        cy.get('input[placeholder="First Name"]')
    })
    it('Obtener por medio de un id', () => {
        //cy.visit('/automation-practice-form')
        cy.get('#firstName')
    })

    //delimitar los localizadores quede mas exacto
    it.only('Usando contains localizadores', () => {
        cy.contains('Student Registration Form')
        cy.contains('.header-wrapper', 'Widget') //toma la clase o el selector, despues el texto
    })
    it.only('Usando parent localizadores', () => {
        //obteniendo el elemento padre
        cy.get('input[placeholder="First Name"]').parent()
        //obteniendo los elementos padres
        cy.get('input[placeholder="First Name"]').parents().find('label')
        cy.get('form').find('label')// el find siempre debe ir ligado a un elemto del from 
        
    })
})
