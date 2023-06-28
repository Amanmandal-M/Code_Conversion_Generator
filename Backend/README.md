<h1 align="center">Code Conversion Generator Backend</h1>

<br>

## About

<br>

This is Code conversion generator so developers or user they can convert their code in any languages.

<br>

## Clone Repository

<br>

```
git clone https://github.com/Amanmandal-M/Code_Conversion_Generator.git
```

<br>

## Installation

<br>

```
cd Backend

npm i / npm install
```

<br>

## Start the Backend server

<br>

```
npm run start

node server.js
```

<br>

##  MVC Structure

```
├── index.js
├── configs
|    └── db.js
├── models
|    └── codeConversionModels.js
├── routes
|    └── codeConversionRoutes.js
├──controllers
|    └── codeConversionController.js
```

Note : 

- You can use any of them .

- PORT = `8080`
- Before doing anything first create .env file and put your `OPENAI_API_KEY = <Your OpenAI Key>`
- `MONGO_URI = <Your MongoAtlas Link>`

<br>

## Backend Deployment URL

<h2>
    <strong>
        <a href="https://code-converter.up.railway.app">Railway</a>
    </strong>
</h2>