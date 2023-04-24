describe('Guardando Elementos', () => {
    it.only('Repeticion', () => {
        cy.visit('/automation-practice-form')
        //obteniendo el elemento padre
        cy.get('input[placeholder="First Name"]').parent()
        cy.get('input[placeholder="First Name"]').parents()
        //obteniendo los elementos padres
        cy.get('input[placeholder="First Name"]').parents().find('label')
        cy.get('form').find('label')// el find siempre debe ir ligado a un elemto del from 
        
    })

    it.only('Evitando repetición', () => {
        //visito la pagina
        cy.visit('/automation-practice-form')
        //obteniendo el elemento padre
        cy.get('input[placeholder="First Name"]').parents('form').then((form)=>{

            const inpunts = form.find('input')
            const divs = form.find('div')
            const labels = form.find('label')

            expect(inpunts.length).to.eq(15)
            cy.wrap(inpunts).should('have.length',15)
            expect(divs.length).to.eq(70)
            expect(labels.length).to.eq(16)

            console.log('soy la longitud',inpunts.length)
            cy.wrap(inpunts).should('have.length',15)

           // debugger

           cy.task('log',inpunts.length)
           cy.log(' soy la ultima longitud', inpunts.length)
           cy.pause()  // para pausar en un punto especifico 
           
        })
        cy.get('input[placeholder="First Name"]').parents()
        cy.get('input[placeholder="First Name"]').then(console.log)// debbuger
        //obteniendo los elementos padres
        cy.get('input[placeholder="First Name"]').parents().find('label')
        cy.get('form').find('label')// el find siempre debe ir ligado a un elemto del from 
        
    })
})
