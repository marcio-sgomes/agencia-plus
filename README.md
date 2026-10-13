# agencia-plus

> 📦 Projeto de estudo — não recebe mais atualizações.

Site de uma agência de viagens com cadastro de clientes (CRUD completo): API REST em Spring Boot + front-end em React + banco MySQL. É a **versão final** de um trabalho feito em março de 2022.

## Contexto

Este repositório faz parte de uma série de repositórios do mesmo trabalho (agência de viagens com CRUD de clientes, 2022):

| Repositório | Data | O que é |
|---|---|---|
| [projeto-agencia](https://github.com/marcio-sgomes/projeto-agencia) | fev/2022 | Primeira landing page em React (tema Start Bootstrap Grayscale) |
| [Crud-Agencia](https://github.com/marcio-sgomes/Crud-Agencia) | fev/2022 | Primeiro CRUD de clientes em Java Servlets/JSP + JDBC |
| [front-back](https://github.com/marcio-sgomes/front-back) | mar/2022 | Versão intermediária: API Spring Boot + front React |
| **agencia-plus** | mar/2022 | **Versão final** (este repositório) |

## Tecnologias

- **Back-end (`crud/`)**: Java 17, Spring Boot 2.6 (Web + Data JPA), MySQL Connector, Maven.
- **Front-end (`front/`)**: React 17 (Create React App), React Router 5, Axios, Bootstrap 3 / React-Bootstrap.
- **Banco**: MySQL 8 (banco `api_agencia`, tabela `clientes`).

## Estrutura

```
crud/       API REST Spring Boot (endpoints em /api/clientes)
front/      Site React (páginas Início, Serviços, Portfólio, Preços, Contato e Cadastro)
diagrama/   Diagrama ER (MySQL Workbench) e diagrama de classes
scriptBD/   Dump SQL do banco api_agencia
```

## Como rodar

Pré-requisitos: JDK 17, MySQL 8 e Node.js.

1. Crie o banco importando `scriptBD/script_2303.sql` no MySQL.
2. Suba a API (porta 8080), informando as credenciais do banco por variáveis de ambiente:
   ```bash
   cd crud
   export DB_USERNAME=root DB_PASSWORD=sua_senha
   ./mvnw spring-boot:run
   ```
3. Em outro terminal, suba o front (porta 3000):
   ```bash
   cd front
   npm install
   npm start
   ```
4. Acesse `http://localhost:3000`. A API só aceita requisições (CORS) vindas de `http://localhost:3000`.
