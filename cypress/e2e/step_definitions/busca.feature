Feature: buscar profissionais
  Eu como novo usuário na lacrei saúde
  Quero realizar o login
  Para verificar o profissional de saúde

Scenario: busca de profissionais 
  Given que realizarei o login
  When realizo a pesquisa de profissional
  Then valido se encontrei o profissional de saúde