

describe('primera prueba', () => {
    //navegacion
    it('Navegar nuestra pagina', () => {
        cy.visit('https://nodejs.org/en/download/')
    })
    it('Recargar pagina', () => {
        cy.reload(true)
    }) 
    it('Recargar pagina, de manera forzada', () => {
        cy.visit('https://www.google.com.co/search?q=plazti')
        cy.reload(true)
    }) 
    it.only('Devolverse atras', () => {
        cy.visit('https://www.google.com/search?q=hbo&rlz=1C1UEAD_enCO1043CO1043&oq=hbo+&aqs=chrome..69i57j0i433i512l2j69i60j69i65j69i61j69i60l2.1413j0j7&sourceid=chrome&ie=UTF-8')
        cy.visit('https://www.youtube.com/')
        cy.go('back')
       //cy.go('forward')
        
    })
})
