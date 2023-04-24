// -- obejtos de cy --
/// <reference types="cypress"/>

describe('Interactuando con los elementos', () => {
    let texto
    it('Click', () => {
        cy.visit('/buttons')
        cy.get('button').eq(3).click()
        cy.get('#dynamicClickMessage')
            .should('be.visible')
            .and('contain', 'You have done a dynamic click')
    })

    it('doble clik', () => {
        cy.visit('/buttons')
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage')
            .should('be.visible')
            .and('contain', 'You have done a double click')
    })

    it('clik derecho', () => {
        cy.visit('/buttons')
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage')
            .should('be.visible')
            .and('contain', 'You have done a right click')
    })

    it('clik forzado', () => {
        cy.visit('/dynamic-properties')
        //     cy.get('#enableAfter').click({timeout:0})//desabilito el tiempo se ejecucion
        cy.get('#enableAfter').click({ timeout: 0, force: true }) //click forzado
    })

    it('clik por posicion', () => {
        cy.visit('buttons')
        cy.get('button').eq(3).parent().parent().click('topRight')
        cy.get('button').eq(3).parent().parent().click('bottomLeft')
        cy.get('button').eq(3).parent().parent().click(5, 60)
    })

    it('Input type text', () => {
        cy.visit('/automation-practice-form')
        cy.get('#firstName').type('Karolayn')
        cy.get('#lastName').type('Mazo')
        cy.get('#firstName').type('{SelectAll}{backspace}')
        cy.get('#firstName').type('Juan')
        cy.get('#firstName').clear()
    })

    it('Input type checkbox y radio button', () => {
        cy.visit('/automation-practice-form')
        // cy.get('#gender-radio-1').click({force:true})
        // cy.get('#gender-radio-1').check() // tiene un label sobre puesto y por eso no funciona
        //cy.get('#gender-radio-1').check({force:true})
        cy.get('label[for="gender-radio-1"]').click()

        //interaccion con los checks

        //cy.get('#hobbies-checkbox-1').check({force:true})
        //  cy.get('#hobbies-checkbox-1').uncheck({force:true})
        cy.get('label[for="hobbies-checkbox-1"]').click()
    })

    it('Extrayendo informacion 1', () => {
        cy.visit('/automation-practice-form')
        cy.get('#firstName').as('nombre')
        cy.get('@nombre').type('Karolayn')

        cy.get('@nombre').then((nombre) => {
            texto = nombre.val()
            expect(nombre.val()).to.equal('Karolayn')
        })
    })
    it('compartiendo informacion 1', () => {
        cy.visit('/automation-practice-form')
        cy.get('#lastName').as('nombre2')
        cy.get('@nombre2').type(texto)
    })
    // forma correcta de compartir informacion
    it('Extrayendo informacion 2', function () {
        cy.visit('/automation-practice-form')
        cy.get('#firstName').as('nombre')
        cy.get('@nombre').type('Karolayn')

        cy.get('@nombre').then((nombre) => {
            texto = nombre.val()
            expect(nombre.val()).to.equal('Karolayn')
        })

        cy.get('@nombre').invoke('val').should('equal', 'Karolayn')
        cy.get('@nombre').invoke('val').as('nombreGlobal')
    })
    it('compartiendo informacion 2', function () {
        cy.visit('/automation-practice-form')
        cy.get('#lastName').as('nombre2')
        cy.get('#firstName').type(this.nombreGlobal)
    })

    it('Interactuando con select ', function () {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('.custom-select').select(8)
        cy.get('.custom-select').select('Italy').should('have.value', '6')
    })

    it.only('Interactuando con select dinamico', function () {
        cy.visit('https://react-select.com/home')
        cy.get('#react-select-6-input').type(' ')
        cy.get('#react-select-6-listbox')
            .children()
            .children()
            .each(($elemento) => {
                if ($elemento.text() === 'Red') {
                    //$elemento.on('click')
                    $elemento.click()
                }
            })

          //  cy.get('#react-select-6-option-2').click()
    })
})
