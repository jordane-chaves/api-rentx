<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./.github/rentx-logo-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="./.github/rentx-logo-light.svg" />
    <img width="180px" title="RentX Logo" alt="RentX Logo" src="./.github/rentx-logo-light.svg" />
  </picture>
</p>

---

<p align="center">Esta é uma API de aluguel de carros.</p>

## 💻 Projeto

<p>RentX é uma API que foi construída na trilha de NodeJS do programa Ignite oferecido pela <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>.</p>

<p>Fizemos a construção deste projeto do zero ao deploy na AWS, onde me proporcionou conhecimentos incríveis em diversas tecnologias. Aprendemos conceitos e padrões de código como SOLID, TDD e CI/CD para automatizar o deploy.</p>

<p>Foi trabalhado fluxo de autenticação completo, upload de arquivos, envio de e-mails e muitos outros conhecimentos que foram abordados durante as aulas.</p>

## 🛠️ Tecnologias e Ferramentas

Algumas tecnologias e ferramentas envolvidas no projeto:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [Jest](https://jestjs.io/)
- [Typeorm](https://typeorm.io/)
- [Postgres](https://www.postgresql.org/)
- [Babel](https://babeljs.io/)
- [Swagger](https://swagger.io/)
- [Nodemailer](https://nodemailer.com/)

## 📥 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/), [Yarn (Opcional)](https://yarnpkg.com/).

## 🎲 Rodando a Aplicação

```bash
# Clone o repositório
git clone https://github.com/jordane-chaves/api-rentx.git

# Acesse o diretório do projeto
cd api-rentx

# Instale as dependências
yarn install
# ou instale com o npm install

# Crie uma cópia do arquivo `.env.example` renomeando para `.env`
cp .env.example .env

# Crie uma cópia do arquivo `ormconfig.example.json` renomeando para `ormconfig.json`
cp ormconfig.example.json ormconfig.json
```

> Acesse os arquivos `.env` e `ormconfig.json` com algum editor de sua preferência e modifique as configurações necessárias.

Após fazer todas as configurações execute o projeto

```bash
# Primeiro execute o banco de dados com o docker
docker-compose up -d database

# Execute o projeto
yarn dev
# ou execute com npm run dev
```

## Autor

<img
  style="border-radius: 50%;"
  src="https://avatars.githubusercontent.com/jordane-chaves"
  width="100px;"
  title="Foto de Jordane Chaves"
  alt="Foto de Jordane Chaves"
/>
<br />

Feito com 💜 por Jordane Chaves
