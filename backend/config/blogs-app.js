// Importation du port
const port = require('./blogs-port');

// Configuration de l'application
const express = require('express');
const app = express();
app.set('port', port);

// Middlewares
app.use(express.json());

app.use((request, response, next) => 
{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Chemin de base
app.get('/', (request, response) =>
{
    response.send('Bienvenue sur le blog');
});

// Connexion à la base de données
require('./blogs-db');

// Exportation du module
module.exports = app;