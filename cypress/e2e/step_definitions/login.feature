Feature: login
  Eu como novo usuário na lacrei saúde
  Quero realizar o login de um usuário com seu e-mail e senha
  Para preencher o cadastro basico

Scenario: login usuario
  Given que realizarei o login do usuário após cadastra-lo
  When adiciono o login e senha do usuário
  Then valido se consigo logar para a próxima página
  And preencho os dados