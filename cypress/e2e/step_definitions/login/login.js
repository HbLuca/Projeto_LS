import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

Given("que realizarei o login do usuário após cadastra-lo",() => {
  },
When("adiciono o login e senha do usuário" ,() => {
    cy.visit("paciente-staging.lacreisaude.com.br/")
    cy.get('#email').type('taveni5091@wirelay.com')
    cy.get('#password').type('123456Az@')
    cy.get('.kWXVUj > .sc-b3674f5-1').click()
    cy.wait(1000)
}),
Then("valido se consigo logar para a próxima página",() => {
    cy.get(".button-container > .sc-b3674f5-0 > .sc-b3674f5-1").click()
}),

And ("preencho os dados",() => {
    cy.get(":nth-child(3) > .sc-c48c9750-1 > .sc-c48c9750-2 > .sc-c48c9750-3").click()
    cy.wait(1000)
    cy.get(":nth-child(2) > .sc-b3674f5-0 > .sc-b3674f5-1").click()
    cy.get(":nth-child(2) > .sc-c48c9750-1 > .sc-c48c9750-2 > .sc-c48c9750-3").click()
    cy.wait(1000)
    cy.get(":nth-child(2) > .sc-b3674f5-0 > .sc-b3674f5-1").click()
    cy.get(":nth-child(2) > .sc-c48c9750-1 > .sc-c48c9750-2 > .sc-c48c9750-3").click()
    cy.wait(1000)
    cy.get(":nth-child(2) > .sc-b3674f5-0 > .sc-b3674f5-1").click()
    cy.get(":nth-child(3) > .sc-c48c9750-1 > .sc-c48c9750-2 > .sc-c48c9750-3").click()
    cy.wait(1000)
    cy.get(":nth-child(2) > .sc-b3674f5-0 > .sc-b3674f5-1").click()
    cy.get(":nth-child(2) > .sc-8f709adc-1 > .sc-8f709adc-2 > .sc-8f709adc-3 > .sc-8f709adc-4").click()
    cy.wait(1000)
    cy.get(":nth-child(2) > .sc-b3674f5-0 > .sc-b3674f5-1").click()
    cy.get(".kWXVUj > .sc-b3674f5-1").click()
}
))
