class homePage{
    goToListOfArticles() {
        cy.visit('https://conduit.bondaracademy.com/')
    }

    selectArticle(title) {
        cy.contains('a',title).click()
    }
}

module.exports = new homePage();