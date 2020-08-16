describe('Guest Routes check', () => {
    it('Guest routes check', () => {
        cy.visit('http://localhost:3000'),
        cy.get('h1').contains('Welcome')
    })
})

// describe('Protected Routes check', () => {
//     it('Protected routes check', () => {
//         cy.visit('http://localhost:3000/profile'),
//         cy.visit('http://localhost:3000/addecotrail')
//     })
// })