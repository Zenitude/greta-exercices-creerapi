// Importation des modules
const mongoose = require('../config/blogs-db');

// Création du schéma du model
const schemaBlog = mongoose.Schema(
{
    title: {type: String, require:true},
    message: {type: String, require:true},
    author: {type: String, default: 'Visiteur'},
    create_date : {type: Date, default: Date.now()},
    modified : {type:Boolean, default:false},
    modified_date : {type: Date, default: ''}
});

// Exportation du model
module.exports = mongoose.model('blog', schemaBlog);