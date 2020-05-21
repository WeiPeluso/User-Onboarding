/*Get the Name input and type a name in it.
Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
Get the Email input and type an email address in it
Get the password input and type a password in it
Set up a test that will check to see if a user can check the terms of service box
Check to see if a user can submit the form data
Check for form validation if an input is left empty
*/



describe('Form input',()=>{

    it('can navigate to the site',()=>{
        cy.visit('http://localhost:3000/')
    })

//Get the Name input and type a name in it.
//Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
it('name input',()=>{
  cy.get('input[name="name"]')
  .type("wei peluso")
  .should('have.value',"wei peluso")

})

//Get the Email input and type an email address in it

it('email input',()=>{
    cy.get('input[name="email"]')
    .type("weipeluso@gmail.com")
    .should('have.value',"weipeluso@gmail.com")
  
  })

//Get the password input and type a password in it
it('password input',()=>{
    cy.get('input[name="password"]')
    .type("123456")
    .should('have.value',"123456")
  })

  //Set up a test that will check to see if a user can check the terms of service box
it('check terms of service',()=>{
  cy.get('input[name="termsOfService"]')
  .check()
  .should('be.checked') 

})

  //Check to see if a user can submit the form data

  it('check submit button',()=>{
    cy.get('button')
    .should('not.be.disabled')

  })

})

 // Check for form validation if an input is left empty

 describe('Form validation',()=>{

    it('name is required',()=>{
        
        cy.visit('http://localhost:3000/')
        cy.contains("The name is required").should('not.exist')
        cy.get('input[name="name"]')
        .type("w")
        cy.contains("The name must be at least 3 characters long").should('exist')
        cy.get('input[name="name"]')
        .type("e")
        cy.contains("The name must be at least 3 characters long").should('exist')
        cy.get('input[name="name"]')
        .type("i")
        cy.contains("The name must be at least 3 characters long").should('not.exist')
        
    })



 })