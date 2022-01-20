module.exports = app => 
{
    // Importation des modules
    const app = require('../config/blogs-app');
    const controllers = require('../controllers/blogs-controllers');
    const route = require('express').Router();
    
    // Créer un nouveau message
    route.post("/", controllers.create);
    
    // Afficher tous les messages
    route.get("/", controllers.findAll);
    
    // Afficher un message avec son id
    route.get("/:id", controllers.findOne);
    
    // Modifier un message avec son id
    route.put("/:id", controllers.update);
    
    // Supprimer un message avec son id
    route.delete("/:id", controllers.deleteOne);
    
    // Supprimer tous les messages
    route.delete("/", controllers.deleteAll);
    
    app.use("api/messages", route);
}