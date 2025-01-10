import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
Given("que realizarei o login",() => {
    cy.visit("paciente-staging.lacreisaude.com.br/")
    cy.get('#email').type('taveni5091@wirelay.com')
    cy.get('#password').type('123456Az@')
    cy.get('.kWXVUj > .sc-b3674f5-1').click()
    cy.wait(1000)
  },
When("realizo a pesquisa de profissional" ,() => {
    cy.get("#search").click()
    cy.get("#search").type('teste')
    cy.get('.search-button-box > .sc-b3674f5-0 > .sc-b3674f5-1').click()
}),
Then("valido se encontrei o profissional de saúde",() => {
}))
