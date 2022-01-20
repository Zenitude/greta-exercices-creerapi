// Importation des modules
const mongoose = require('mongoose');
const paramsDb = require('./connexion-db.json');

// Paramètres de la base de données
const url = `mongodb+srv://${paramsDb.userName}:${paramsDb.password}@${paramsDb.clusterName}.fluh1.mongodb.net/${paramsDb.databaseName}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

// Connexion à la base de données
const db = mongoose
    .connect(url, options)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log('Connexion à MongoDB échouée ! '+err));

module.exports = db;