import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given("que realizarei o cadastro do usuário",() => {
    cy.visit("paciente-staging.lacreisaude.com.br/")
    cy.get('.dyhGHG > .sc-b3674f5-1').click()
    cy.get('#first_name').type('Eduardo')
    cy.wait(1000)
    cy.get('#last_name').type('Teste')
    cy.wait(1000)
    cy.get('#email').type('taveni5091@wirelay.com')
    cy.wait(1000)
    cy.get('#email2').type('taveni5091@wirelay.com')
    cy.wait(1000)
    cy.get('#password1').type('123456Az@')
    cy.wait(1000)
    cy.get('#password2').type('123456Az@')
    cy.wait(1000)
    cy.get(':nth-child(1) > label > .check-container > span').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > label > .check-container > span').click()
    cy.wait(1000)
    cy.get('.kWXVUj > .sc-b3674f5-1').click()
    cy.wait(4000)
  },
When("verifico se os dados estao corretos" ,() => {
   cy.get(".button-box > .sc-b3674f5-0 > .sc-b3674f5-1").click()
}),
Then("valido se esta correto o funcionamento de cadastro",() => {
    cy.get('#email').type('taveni5091@wirelay.com')
    cy.get('#password').type('123456Az@')
    cy.get('.kWXVUj > .sc-b3674f5-1').click()
}))
