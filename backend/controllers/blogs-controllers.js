// Importation des modules
const Message = require('../models/blogs-models');

/* ---- Create ---- */

    // Ajouter d'un message
    exports.create = (request, response) =>
    {
        //Validation de la requête
        if(!request.body.title)
        {
            response.status(400).send({message: "Le titre ne peut pas être vide !"})
            return;
        }

        // Création du message
        const message = new Message(
        {
            title: request.body.title,
            message: request.body.message,
            author: request.body.author
        });

        message
            .save(message)
            .then(donnees =>
            {
                response
                    .status(201)
                    .send(donnees);
            }) 
            .catch(err =>
            {
                response
                    .status(500)
                    .send({message: err.message || "Une erreur s’est produite lors de la création du message"});
            });
    }

/* ---- Read ---- */

    // Afficher tous les messages
    exports.findAll = (request, response) =>
    {
        const title = request.body.title;
        let condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

        Message
            .find(condition)
            .then(donnees => 
            {
                response
                    .status(200)
                    .send(donnees);
            })
            .catch(err =>
            {
                response
                    .status(500)
                    .send({message: err.message || "Une erreur s’est produite lors de la récupération des messages"});
            });
    }


    // Afficher un message
    exports.findOne = (request, response) =>
    {
        const id = request.params.id;

        Message
            .findById(id)
            .then(donnees =>
            {
                if(!donnees)
                {
                    response
                        .status(404)
                        .send({message: "Nous n'avons pas pu trouver le message qui a pour id : "+id})
                }
                else
                {
                    response
                        .status(200)
                        .send(donnees);
                }
            })
            .catch(err =>
            {
                response
                    .status(500)
                    .send({message: err.message || "Une erreur s’est produite lors de la récupération du message qui a pour id : "+id});
            });
    }

/* ---- Update ---- */

    // Modifier un message
    exports.update = (request, response) =>
    {
        if(!request.body)
        {
            response
                .status(400)
                .send({message: "Les données à mettre à jour ne peuvent pas être vides"});
            return;
        }

        if(!request.body.title)
        {
            response
                .status(400)
                .send({message: "Le titre ne peut pas être vide !"});
            return;
        }

        const id = request.params.id;

        const title = request.body.title;
        let condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

        Message
            .findByIdAndUpdate(id, request.body, condition)
            .then(donnee =>
            {
                donnee.title = request.body.title,
                donnee.message = request.body.message,
                donnee.author = request.body.author,
                donnee.modified = true,
                donnee.modified_date = Date.now()

                response
                    .status(201)
                    .send({message: "Le message a été mis à jour avec succès !"});
            })
            .catch(err =>
            {
                response
                    .status(500)
                    .send({message: err.message || "Une erreur s'est produite lors de la modification du message qui a pour id : "+id});
            });
    }

/* ---- Delete ----*/

    // Supprimer un message
    exports.deleteOne = (request, response) =>
    {
        const id = request.params.id;

        Message
            .findByIdAndRemove(id)
            .then(donnee =>
            {
                if(!donnee)
                {
                    response
                        .status(404)
                        .send({message: `Impossible de supprimer Message qui a pour id : ${id}. Peut-être que le message n’a pas été trouvé !`});
                }
                else
                {
                    response
                        .status(201)
                        .send({message: "Le message a été supprimé avec succès !"});
                }
            })
            .catch(err =>
            {
                response
                    .status(500)
                    .send({message: err.message || "Une erreur s'est produite lors de la suppression du message qui a pour id : "+id});
            });
    }

    // Supprimer tous les messages
    exports.deleteAll = (request, response) =>
    {
        Message
            .deleteMany({})
            .then(donnee =>
            {
                if(!donnee)
                {
                    response
                        .status(404)
                        .send({message: `Impossible de supprimer tous les message !`});
                }
                else
                {
                    response
                        .status(201)
                        .send({message: "Tous les messages ont été supprimé avec succès !"});
                }
            })
            .catch(err =>
            {
                response
                    .status(500)
                    .send({message: err.message || "Une erreur s'est produite lors de la suppression des messages"});
            });
    }