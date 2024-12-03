import homePage from "../pages/homePage";
import signUpPage from "../pages/signupPage";
import createArticlePage from "../pages/createArticlePage";

describe('template spec', () => {

/* beforeEach(() => {
 cy.loginToApp()
})  */

  it.skip('Sign up with valid data', () => {
    let date = (new Date()).toISOString(); //ISOString le saca los espacios a la fecha
    signUpPage.goToSignUpForm();
    signUpPage.typeUserNameInput('testmare' + date) // Quedaria testmare2024-12-02T17:59:35.822Z 
    signUpPage.typeEmailInput('testmare' + date +'@gmail.com')
    signUpPage.typePasswordInput('test1234')
    //reemplazado para usar POM
    /*     cy.get('[placeholder="Username"]').type('testmare' + date);
    cy.get('[placeholder="Email"]').type('testmare' + date +'@gmail.com');
    cy.get('[placeholder="Password"').type('test1234') */

    cy.contains('button', 'Sign up').click()
    //cy.url().should('include', '/tetsts')
    cy.contains('a',' testmare'+ date+ ' ')

  })

  it.only('create new article', () => {

/*     cy.contains('a', ' New Article ').click();
    cy.get('[formcontrolname="title"]').type('Why the cats are great');
    cy.get('[formcontrolname="description"]').type('Cats...');
    cy.get('[formcontrolname="body"]').type('This is the body of the text');
    cy.get('[placeholder="Enter tags"]').type('cats').type('{enter}'); */
    cy.loginToApp()

    createArticlePage.navigateToCreateArticlePage();
    createArticlePage.typeTitleInput('Why the cats are great');
    createArticlePage.typeDescriptionInput('Cats...')
    createArticlePage.typeBodyInput('This is the body of the text')
    cy.contains('button',' Publish Article ').click();
    cy.contains('h1','Why the cats are great').should('contain','Why the cats are great')
  })

  it('Edit article', () => {
    //cy.contains('a','Why the cats are great').click()
    cy.intercept('GET','https://conduit-api.bondaracademy.com/api/articles/**').as('getArticless');

    homePage.selectArticle('Why the cats are great');
    cy.contains('a',' Edit Article ').click();
    //cy.wait(5000);
    
    cy.wait('@getArticles');
    cy.get('[formcontrolname="title"]').clear()
    cy.get('[formcontrolname="title"]').type('Why you should have a cat2');
    cy.contains('button',' Publish Article ').click();
    cy.contains('h1','Why you should have a cat2').should('contain','Why you should have a cat2')
    

  })

  it.skip('delete article created recently', () => {
    
    cy.contains('a','Why you should have a cat').click()
    cy.contains('button',' Delete Article ').click();
    cy.visit('/');
    cy.contains('a','Why the cats are great').should('not.exist')
    
  })

})