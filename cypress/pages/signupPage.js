class signUpPage {
    elements = {
        userNameInput: () => cy.get('[placeholder="Username"]'),
        emailInput: () => cy.get('[placeholder="Email"]'),
        passInput: () => cy.get('[placeholder="Password"')
    }
    goToSignUpForm() {
        cy.visit('https://conduit.bondaracademy.com/register')
    }  

    typeUserNameInput(username) {
        this.elements.userNameInput().type(username)
    }

    typeEmailInput(email) {
        this.elements.emailInput().type(email)
    }

    typePasswordInput(pass) {
        this.elements.passInput().type(pass)
    }

    
}

module.exports = new signUpPage();



