// Importation des modules
const http = require('http');
const port = require('./config/blogs-port');
const app = require('./config/blogs-app');

// Création du serveur
const server = http.createServer(app);

// Lancement du serveur
server.listen(port, () =>
{
    console.log(`Le serveur est disponible à l'adresse : http://localhost:${port}`)
});