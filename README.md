<div align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/LukyEnd/consulta-api-data-poa-angular-ngrx?style=for-the-badge">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/LukyEnd/consulta-api-data-poa-angular-ngrx?style=for-the-badge">
  <img alt="Relative date" src="https://img.shields.io/date/1642417200?style=for-the-badge">
  <img alt="GitHub followers" src="https://img.shields.io/github/followers/LukyEnd?style=for-the-badge">
</div>

# Título do projeto

Consulta da API de Transportes (Ônibus e Lotação) de Porto Alegre. Com o resultado desta consulta, é criado 2 tabelas. Uma das tabelas com os Ônibus e a outra com as Lotações. Cada transporte terá a opção de ser gerada sua rota em um Mapa através de coordenadas de latitude e longitude dadas pela própria API.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Um Editor ou IDE, como: 
  * [VSCode](https://code.visualstudio.com/download); <br>
  ou
  * [intellij](https://www.jetbrains.com/pt-br/idea/download/#section=windows);<br>
  ou
  * [Webstorm](https://www.jetbrains.com/webstorm/download/?source=google&medium=cpc&campaign=9641686251&term=webstorm&gclid=CjwKCAjwpqCZBhAbEiwAa7pXeS7DDLCEz2MetJy2zD2jhcLXXQ1lbeq-61EVRwdyPTmbH9UXICr7hBoCBlgQAvD_BwE#section=windows);

Instalar [NodeJS_LTS](https://nodejs.org/en/download/) 14 ou superior;

Instalar [Angular_CLI](https://angular.io/cli) 12 ou superior - "npm install -g @angular/cli";

### 📌 Versão Utilizadas nesse Projeto

* Angular_CLI - 12.2.14;
* Node - 14.17.3;
* npm - 6.14.13;

Para verificar as versões manualmente, basta digitar no terminal do projeto "ng version" ou "ng -v" ou "ng --version". Funcionará somente após instalação do Angular CLI;

### 🔧 Instalação do Projeto

Nesta etapa, será explicado passo a passo o que deve ser feito para ter o ambiente de desenvolvimento em execução.
 
**1-** Clique no botão Verde que tá escrito "CODE" e copie o código HTTPS que aparecer;<br>
**2-** Em sua máquina Crie uma pasta, de preferência no começo do disco. Exemplo: C:/;<br>
**3-** Dentro da nova pasta criada, clique na aba locais anteriores e digite CMD;<br>
**4-** Na aba que abriu digite "git clone (e adicione a url HTTPS que foi copiada, sem os parênteses)"<br>
    Exemplo: "git clone https://github...";<br>
**5-** Abra a nova pasta criada com o editor que foi instalado;<br>
**6-** Abra o terminal do editor e digite "npm i" ou "npm install";<br>
**7-** Após a instalação digite "npm run start" ou "ng server" para utilizar via SPA, ou "npm run dev:ssr" via SSR;<br>
**8-** Abra o navegador, de preferência em aba anônima, e digite na url "http://localhost:4200/" ou observe qual porta do localhost foi disponibilizada no Terminal do Editor;<br>
**9-** Após estes passos, o ambiente deverá estar funcionando perfeitamente.<br>

Como já falado, este sistema faz consultas de uma API disponibilizada gratuitamente na internet a qual possui dados de todos os ônibus e lotações de Porto Alegre, podendo assim, consultar várias informações de cada transporte, como o ID, Código, Nome da Linha e qual rota ele realiza. Caso o usuário deseje ver a rota de um transporte em específico, é só clicar no botão "Ver rotas" localizado na Aba da tabela chamada "itinerário", assim será gerado um mapa automaticamente, utilizando MAPBOX (uma plataforma de geolocalização). Com isto, mostrará o mapa com a linha do percurso ao ser traçado. Possue a opção de clicar na coordenada desejada e ser redirecionado para o google maps a qual se pode ver com mais detalhes informações das ruas, utilizar a câmera por satélite ou ver fotos do lugar.

## ⚙️ Executando os testes

* Para testes unitários do Angular serão utilizados o Karma e o Jasmine. 
  * Execução: "npm run test"

* Também será utilizado o Cypress para testes visuais e responsividade. 
  * Execução: "npm run cypress:open"

## 🛠️ Construído com

Ferramentas utilizadas para a criação deste projeto:

* [VsCode](https://code.visualstudio.com/download)- Editor de código de código aberto;
* [Angular_CLI](https://angular.io/cli)- O framework web usado;
* [Angular Material](https://material.angular.io/)- Biblioteca de componentes criada pelo time do Angular, com o objetivo de fornecer uma implementação consistente e fácil de usar para serem utilizados em aplicações Angular.;
* [NGRX](https://ngrx.io/)-  Grupo de bibliotecas angulares para extensões reativas e gerenciamento de estado;
* [MAPBOX](https://www.mapbox.com/)- Plataforma de geolocalização para a Criação do Mapa;
* [Cypress](https://www.cypress.io/)- Framework para automação de testes end-to-end;
* [Prettier](https://prettier.io/)- Formatador de código com suporte a diversos tipos de arquivos.

## 📋 Comandos do Projeto

* npm run start or ng s: Inicialização do projeto em SPA;
* npm run dev:ssr: Inicialização do projeto em SSR;
* npm run build:ssr: Comando utilizado para construir o aplicativo Angular para renderização  do lado do servidor - SSR;
* npm run test: utilzado para executar os testes unitários definidos neste projeto utilizando Karma e Jasmine;
* npm run lint or ng lint: rodar uma ferramenta de análise de código estático que ajuda a encontrar problemas no código e a manter um padrão de estilo consistente. Verifica o código em busca de erros, alertas ou más práticas de programação, baseado no .eslintrc.
* npm run cypress:open

## ✒️ Autor

Criado por [Lucas Sanches](https://github.com/LukyEnd) 😊
