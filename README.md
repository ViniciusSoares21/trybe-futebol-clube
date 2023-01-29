# Trybe Futebol clube 

A [Trybe](https://www.betrybe.com/) é uma escola de tecnologia que oferece cursos de desenvolvimento web, e o projeto Trybe Futebol Clube é um projeto prático desenvolvido para aprimorar os conhecimentos em Programação Orientada a Objetos (POO), princípios SOLID e TypeScript.

## Objetivo 

O projeto Trybe Futebol Clube (TFC) é uma aplicação Full Stack que exibe informações sobre jogos e classificações de futebol. O desenvolvimento usará o método TDD para criar uma API e integrar as aplicações com o banco de dados atraves do docker-compose. O back-end será modelado com Sequelize e será consumido pelo front-end fornecido no projeto pela trybe. Ao fazer login, os usuários poderão ver as informações e também alterar resultados das partidas e inserir partidas em andamento.

## Tecnologias e Ferramentas

<details>
  <summary><strong>💻 Front-end</strong></summary>
  
 - HTML
 - CSS
 - [ReactJS](https://pt-br.reactjs.org/)
 - [React router](https://reactrouter.com/en/main)
</details>

<details>
  <summary><strong>💾 Back-end</strong></summary>
  
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [JWT](https://jwt.io/)
- ORM - Interface da aplicação com o banco de dados
- POO - Programação Orientada a Objetos
- SOLID
</details>
<details>
  <summary><strong>🔍 Testes no Back-end</strong></summary>
  
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
</details>
<details>
  <summary><strong>🕵️ Alinhamento de código</strong></summary>
  
- [ESlint](https://eslint.org/)
</details>

## Execução do Projeto

<details>
<summary><strong>⚙️ Configurações</strong></summary>
1.Clone o Projeto.

    git clone git@github.com:ViniciusSoares21/trybe-futebol-clube.git
    
2.Entre no diretório do projeto

    cd trybe-futebol-clube
    
3.Instale as dependências na pasta front-end e back-end rodando o comando abaixo em cada pasta.

    npm install

4.<strong>Na pasta app do projeto </strong>, suba os containers app_backend, app_frontend e db. <br />
  -   ⚠️ Para rodar a aplicação dessa forma você deve ter o [Docker](https://www.docker.com/) instalado na sua máquina.
  
    npm run compose:up:dev
    
</details>

<details>
<summary><strong>🚀 Inicialização</strong></summary>

Entre na pata de fornt-end e rode o comando 

    npm start
    
Para fazer login:
 - Email: admin@admin.com
 - senha: secret_admin

</details>

##  Execução dos testes

Entre no diretório do back-end, abra o terminal e rode o comando

    npm test
    
  


