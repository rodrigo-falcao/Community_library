# 📚 Community Library [BACK-END] 

![status](https://img.shields.io/badge/status-finalizado-green)
![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite)
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express)
![SQLite](https://img.shields.io/badge/SQLite-3.x-003B57?logo=sqlite)
![JWT](https://img.shields.io/badge/JWT-authentication-000000?logo=jsonwebtokens)
![Postman](https://img.shields.io/badge/Postman-API%20Test-FF6C37?logo=postman)
![License](https://img.shields.io/badge/license-MIT-green)

Este projeto é um backend para gerenciamento de retiradas de livros em uma biblioteca. Ele permite criar tabelas de usuários, tabelas de livros e controlar o uso dos livros (empréstimos e devoluções).

## 📌 Funcionalidades

### **Usuários**
- Cadastro de usuários com informações como nome, e-mail, senha e avatar.
- Atualização de informações do usuário.
- Exclusão de usuários.
- Listagem de todos os usuários cadastrados.
- Autenticação via JWT para proteger rotas.

### **Livros**
- Cadastro de livros com título, autor e outras informações relevantes.
- Atualização de informações dos livros.
- Exclusão de livros.
- Listagem de todos os livros disponíveis.
- Busca de livros por ID.

### **Empréstimos**
- Registro de empréstimos de livros vinculados a usuários.
- Controle de datas de devolução.
- Exclusão de empréstimos.
- Listagem de todos os empréstimos.
- Busca de empréstimos por ID.


## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação de APIs.
- **SQLite**: Banco de dados leve e eficiente.
- **JWT (JSON Web Token)**: Para autenticação e proteção de rotas.
- **bcrypt**: Para hash de senhas.
- **Zod**: Para validação de dados.
- **dotenv**: Para gerenciamento de variáveis de ambiente.

```
community-library/
├── src/
│   ├── config/
│   │   └── database.js              # Configuração do banco de dados SQLite
│   ├── controller/
│   │   ├── user.controllers.js      # Controladores de usuários
│   │   ├── book.controllers.js      # Controladores de livros
│   │   └── loan.controllers.js      # Controladores de empréstimos
│   ├── middlewares/
│   │   ├── auth.middleware.js       # Middleware de autenticação
│   │   ├── validation.middleware.js # Middleware de validação
│   ├── repositories/
│   │   ├── user.repositories.js     # Repositório de usuários
│   │   ├── book.repositories.js     # Repositório de livros
│   │   └── loan.repositories.js     # Repositório de empréstimos
│   ├── routes/
│   │   ├── user.routes.js           # Rotas de usuários
│   │   ├── book.routes.js           # Rotas de livros
│   │   └── loan.routes.js           # Rotas de empréstimos
│   ├── schema/
│   │   ├── user.schema.js           # Validação de dados de usuários
│   │   ├── book.schema.js           # Validação de dados de livros
│   │   └── loan.schema.js           # Validação de dados de empréstimos
│   ├── service/
│   │   ├── user.services.js         # Lógica de negócios para usuários
│   │   ├── book.services.js         # Lógica de negócios para livros
│   │   └── loan.services.js         # Lógica de negócios para empréstimos
│   └── index.js                     # Arquivo principal do servidor
├── .env.example                     # Variáveis de ambiente
├── package.json                     # Dependências do projeto
└── readme.md                        # Documentação do projeto
```

## 🧭 Como executar o projeto

#### **Pré-requisitos**
- Certifique-se de ter o **Node.js** instalado (versão >= 14.x).
- Instale o gerenciador de pacotes **npm** (vem junto com o Node.js).

#### **Configuração**
1. Clone o repositório:
   ```bash
   git clone https://github.com/rodrigo-falcao/Community_library.git
   cd community-library
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   SECRET_JWT= ######
   ```

4. Configure o banco de dados SQLite:
   - O banco será criado automaticamente ao iniciar o servidor.

#### **Executando o servidor**
Inicie o servidor com o seguinte comando:
```bash
npm run dev
```

O servidor estará disponível em:
```
http://localhost:3000/
```

## 🔗 Rotas da API

### **Usuários**
- **POST /users**: Criação de um novo usuário.
- **GET /users**: Listagem de todos os usuários.
- **GET /users/:id**: Busca de um usuário por ID.
- **PUT /users/:id**: Atualização de informações de um usuário.
- **DELETE /users/:id**: Exclusão de um usuário.

### **Livros**
- **POST /books**: Cadastro de um novo livro.
- **GET /books**: Listagem de todos os livros.
- **GET /books/:id**: Busca de um livro por ID.
- **PUT /books/:id**: Atualização de informações de um livro.
- **DELETE /books/:id**: Exclusão de um livro.

### **Empréstimos**
- **POST /loans**: Registro de um novo empréstimo.
- **GET /loans**: Listagem de todos os empréstimos.
- **GET /loans/:id**: Busca de um empréstimo por ID.
- **DELETE /loans/:id**: Exclusão de um empréstimo.

## 📦 Requisitos

- **Node.js** >= 14.x
- **Express** >= 4.x
- **SQLite** (banco de dados)

## 🛡️ Segurança
- As senhas dos usuários são armazenadas com hash utilizando **bcrypt**.
- As rotas protegidas utilizam autenticação via **JWT**.

🔹 Projeto criado para aprendizado e prática! 🚀 Sinta-se à vontade para contribuir ou sugerir melhorias. 😊
