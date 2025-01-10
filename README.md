# Projeto_LS
Desafio QA LS

### Configurar o ambiente de testes: 
Isolar o ambiente de testes, deixa-lo longe do ambiente de produção para verificação de bugs.
Verificar o cenário dos testes, conforme os desafios passados, está em Gherkin, cada desafio.

### Executar os casos de teste:
Identificar a URL para realização dos cenários/casos de teste.
Verificar cada um dos desafios, reportar os bugs e identifica-los com prints ou videos.

#### Desafio 1

##Gherkin
language: pt-br

Funcionalidade: Cadastrar novo usuário
  Eu como novo usuário na lacrei saúde
  Quero realizar o cadastro de um usuário clicando no criar conta
  Para logar no site e verificar o profissional de saúde

Cenário: Cadastrar usuário
  Dado que realizarei o cadastro do usuário
  E verifico se o usuário está recebendo o e-mail
  Quando receber o e-mail
  Então valido pelo e-mail, redirecionando-me para o site da lacrei saúde

Funcionalidade: Login
  Eu como usuário que já tenho cadastro na lacrei saúde
  Quero realizar o login no site
  Para ter acesso a plataforma

Cenário: Realizar login com sucesso
  Dado que eu estou no site
  E preencho o campo login e senha
  Quando realizar o login
  Então seguirei para a próxima página

Cenário: Realizar login com usuário inexistente
  Dado que eu estou no site
  E preencho o campo login e senha com dado do usuário inexistente
  Quando realizar o login
  Então deverá aparecer a mensagem de usuário inexistente 

Cenário: Buscar um profissional de saúde cadastrado
  Dado que eu estou no site
  E preencho a pesquisa com dado do usuário
  Quando realizar a busca do profissional
  Então aparecerá os dados do profissional

Cenário: Buscar um profissional de saúde inexistente
  Dado que eu estou no site
  E preencho a pesquisa com dado do usuário inexistente
  Quando realizar a busca do profissional
  Então deverá aparecer a mensagem de usuário inexistente 

Cenário: Editar o perfil do usuário cadastrado
  Dado que o usuário necessita modificar algum dado
  E realizo a busca no site para edita-lo
  Quando tenho acesso ao perfil do usuário 
  Então edito-o

Cenário: Esquecer a senha e resetar
  Dado que tentei realizar o login
  E a senha ou e-mail estão incorretos preciso modificar a senha
  Quando esqueço-a ou aparece mensagem de erro
  Então reseto a senha e aparece um e-mail para reseta-la

Cenário: Esquecer a senha e resetar com a mesma que a atual
  Dado que tentei realizar o login
  E a senha ou e-mail estão incorretos preciso modificar a senha
  Quando esqueço-a
  E modifico pela mesma que a atual
  Então aparecerá uma mensagem identificando que a senha é a mesma

Bugs:

1 - Na parte de resetar a senha, ao adicionar o e-mail ele deixa passar o e-mail com inicial maiuscula e minuscula, mas na hora do cadastro não.
Sugestão: No cadastro e reset deixar livre o maiusculo/minusculo a letra a exemplo do e-mail utilizado no loom (H, h, inicial).

2 - Esquecer a senha e resetar aparece a mensagem de que é uma senha anterior.
Sugestão: Enviar um token com uma nova senha, modifica-la e não será a mesma senha da anterior, neste caso.

3 - Ao realizar a busca de profissional, não identifiquei o meu.
Sugestão: Mesmo logado com o usuário que será o profissional, conseguir identifica-lo é algo importante, para a edição do perfil ou para verificação de perfil como visualização pessoal e geral.

4 - Na versão mobile a seta do teclado não prossegue.
Sugestão: Que ao clicar na seta do teclado, prossiga com o que foi selecionado a exemplo da busca de profissional.

Evidência: https://www.loom.com/share/f512cf9c3e0543629bb951085241093b - Loom do desafio


---------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Desafio 2

De acordo. 
Desafios centralizados no GitHub em Gherkin e readme atualizado.

---------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Desafio 3

Funcionalidade: Verificar tráfego no site
  Eu como usuário do site
  Quero realizar a verificação de desempenho do site
  Para entender se o site vai crashar (quebrar)

Cenário: Verificar crash no site
  Dado que utilizei ferramenta específica 
  E verifico se a página inicial vai quebrar
  Quando acesso a página inicial com código
  Então valido a página e compreendo se tem inconformidades ou não

Código utilizado:
import http from 'k6/http';
import { sleep } from "k6";
// realizado import do http e sleep

export const options = {
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'constant-vus',
        vus: 20,
        duration: '20s',
      },
    },
  };
export default () => {
    http.get('https://paciente-staging.lacreisaude.com.br/');
    
        sleep(1);
    }
//realizada 20 entradas em 20 segundos. 

Comando usado: k6 run index.js

Resultado:

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: index.js
     output: -

  scenarios: (100.00%) 1 scenario, 20 max VUs, 50s max duration (incl. graceful stop):
           * contacts: 20 looping VUs for 20s (gracefulStop: 30s)


     data_received..................: 9.9 MB 472 kB/s
     data_sent......................: 60 kB  2.9 kB/s
     http_req_blocked...............: avg=18.22ms  min=0s       med=0s       max=313.9ms  p(90)=0s       p(95)=306.58ms
     http_req_connecting............: avg=722.02µs min=0s       med=0s       max=14.24ms  p(90)=0s       p(95)=10.08ms
     http_req_duration..............: avg=184.77ms min=140.34ms med=159ms    max=493.7ms  p(90)=204.96ms p(95)=421.25ms
       { expected_response:true }...: avg=184.77ms min=140.34ms med=159ms    max=493.7ms  p(90)=204.96ms p(95)=421.25ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 340
     http_req_receiving.............: avg=11.66ms  min=0s       med=304.25µs max=135.48ms p(90)=4.54ms   p(95)=122.12ms
     http_req_sending...............: avg=20.01µs  min=0s       med=0s       max=1.52ms   p(90)=0s       p(95)=0s
     http_req_tls_handshaking.......: avg=2.56ms   min=0s       med=0s       max=48.99ms  p(90)=0s       p(95)=40.11ms
     http_req_waiting...............: avg=173.08ms min=139.87ms med=158.55ms max=359.4ms  p(90)=203.98ms p(95)=296.75ms
     http_reqs......................: 340    16.229501/s
     iteration_duration.............: avg=1.21s    min=1.14s    med=1.16s    max=1.81s    p(90)=1.21s    p(95)=1.7s
     iterations.....................: 340    16.229501/s
     vus............................: 20     min=20      max=20
     vus_max........................: 20     min=20      max=20

                                                                                                                                          
running (20.9s), 00/20 VUs, 340 complete and 0 interrupted iterations                                                                     
contacts ✓ [======================================] 20 VUs  20s  

//20 usuários em 20.9 segundos, de acordo.

---------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Desafio 4

Funcionalidade: Verificar tela de login.
  Eu como novo usuário na lacrei saúde
  Quero realizar a verificação de acessibilidade no site
  Para entender se está acessível ou não

Cenário: Verificar home page (página inicial)
  Dado que utilizei ferramentas específicas 
  E verifico se a página inicial está acessível
  Quando acesso a página inicial
  Então valido a página e compreendo se tem inconformidades ou não

Ferramentas utilizadas: NVDA (Leitor de tela), Lighthouse e CCA (Color Contrast Analyzer).

WCAG:
1.3.1 - Informações e Relações [A]
Justificativa: A não existência de um H1 na página inicial, faz com que se tenha uma quebra de ordenação correta da página.

1.4.13 - Conteúdo em foco por mouse ou teclado [AA] 
Justificativa: Ao pressionar a tecla TAB deveria abranger a tela toda, mas apenas com o mouse que consigo ir para a parte h2, se seguir com o TAB, infelizmente passa desapercebido.

2.4.2 - Pagina com Titulo [A]
Justificativa: Nao encontra-se o h1 na pagina.

Bugs:

1 - Falta H1 como título principal, a página encontra o H2 no Boas-vindas à Lacrei saúde.
Sugestão: Verificar com o Dev Front-end para adicionar o Boas-vindas à Lacrei saúde como H1 e o Entre ou crie sua conta Lacrei Saúde como H2, seguindo a ordem correta.

2 - Ao navegar com o TAB não consegue-se acessar a parte do Boas-vindas, apenas indo para a parte inicial e acessando o Ir para conteudo principal
Sugestão: Com o TAB conseguir acessar tudo na página.

3 - Não identificação da imagem na tela inicial
Sugestão: Ter a descrição, mas no final identificar como imagem.

Evidência: https://www.loom.com/share/e3188adf57a14659b363d23a84058af7?sid=41ed7100-77b6-4986-a66a-a885430d4690


---------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Desafio 5

Funcionalidade: Verificar responsividade
  Eu como usuário na lacrei saúde
  Quero realizar a verificação de responsividade na página inicial
  Para entender se está responsivo para todos

Cenário: Verificar a responsividade da home page (página inicial)
  Dado que inspecionei a página inicial
  E verifico se a página inicial está responsiva nos tipos de dispositivos
  Quando acesso a página inicial
  Então valido a página e compreendo se tem inconformidades ou não

Bugs:
1 - Ao utilizar o redimensionamento para o Iphone SE, Samsung Galaxy S8+, Surface Duo,  não apareceu a imagem de olho fechado na parte da senha 
nem na vertical e horizontal.
Sugestão: Que apareça em todos os aparelhos e de todas as formas de rotatividade.
2 - Ao utilizar o redimensionamento para o Iphone SE, Samsung Galaxy S8+, Surface Duo,  não apareceu a imagem do Dr e paciente
na horizontal.
Sugestão: Caso a parte de pixelagem e tamanho seja suficiente, que apareça também, caso contrário, deixar da forma que está. 

Evidência: https://www.loom.com/share/61619b0e6df1463c9ce8b3e679c3e54c?sid=ee2b1d5b-5ff3-443f-9125-877ea94f2cbe

---------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Desafio 6
De acordo, documentados no readme.

---------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Desafio 7

Está em parte de código, o restante está aqui no readme
