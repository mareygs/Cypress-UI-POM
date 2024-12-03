class newArticlePage{
    elements = {
        titleInput: () => cy.get('[formcontrolname="title"]'),
        descriptionInput: () =>  cy.get('[formcontrolname="description"]'),
        bodyInput: () => cy.get('[formcontrolname="body"]')    
    }

    typeTitleInput(title) {
        this.elements.titleInput().type(title)
    }

    typeDescriptionInput(description) {
        this.elements.descriptionInput().type(description)
    }

    typeBodyInput(body) {
        this.elements.bodyInput().type(body)
    }

    navigateToCreateArticlePage() {
        cy.visit('https://conduit.bondaracademy.com/editor')
    }




}

module.exports = new newArticlePage();