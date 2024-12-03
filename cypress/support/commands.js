// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('loginToApp', () => {
    cy.session('Login', () => {
        // solo coloco /login porque lee la url de BaseUrl definida en el archivo de configuracion
        cy.visit('/login')
        cy.get('[placeholder="Email"]').type('marevatest@gmail.com')
        cy.get('[placeholder="Password"]').type('lian2024')
        cy.get('form').submit()
        cy.url().should('eql', "https://conduit.bondaracademy.com/")

    })
    
    
/*     const userCredentials = {
        user: {
            email: "marevatest@gmail.com", 
            password: "lian2024"
        }
    }

    cy.request('POST', 'https://conduit.bondaracademy.com/login', userCredentials)
    .its('body').then( body => {
        const token = body.user.token
        cy.wrap(token).as('token')
        cy.visit('/', {
            onBeforeLoad (win) {
                win.localStorage.setItem('jwtToken', token)
            }
        })
    }) */
})