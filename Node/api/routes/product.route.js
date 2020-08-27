//on récupère express
const express = require('express');
const router = express.Router();

//on récupère le model product
let Product = require('../models/Product');
const product = require('../models/Product');

//on définit ensuite nos routes
//pour renvoyer ts nos products en cas de réception d'une requête GET sur notre serveur
router.route('/').get((req, res) => {
    //une fois la requête reçue on chercher ts les products en bdd 
    //et on renvoie au format json
    //Product.find() permet d'aller chercher ttes les représentations de product
    //et renvoie un objet contenant des potentielles erreurs
    // Il attend comme paramètre une fct callback qui définira quoi faire au retour des résultats
    Product.find( (err, products) => {
        //en cas d'erreur
        if (err) {
            res.status(500).json({message: `Error retrieving products : ${err}`});
        }
        //si on a bien reçu les produits
        else {
            //on renvoie une réponse http contenant lesproduits au format json
            res.json(products);
        }
    });
});

//on créé une route permettant l'ajout de products
//la route est donc paramétrée pour HTTP POST
router.route('/').post((req, res) => {
    //on récupère le corps de la requêtecontenant la représentation json du product à ajouter
    //new product permet de créer un nvel objet selon le model Product
    const product = new Product(req.body);
    //on enregistre ensuite le product nvllmt dréé ds la bdd
    //save() renvoie un objet Promise, et save(). then() permet de gérer le cas où save() a réussi
    product.save().then(
        //on définit quoi faire en cas de réussite
        product => res.json(product)
    )
    //si une erreur arrive on le gère ds le .catch() de la promise
    .catch(
        err => res.json({message: `Unable to save product to database : ${err}`})
    );
});

//on créé une route pour récupérer un seul élément
router.route('/:id').get((req, res) => {
    //pour récupérer le parmètre id de la requête, on utilise req.params
    const id = req.params.id;
    //on cherche ensuite la ressource associée en bdd
    Product.findById(id, (err, product) => {
        if(err) {
            res.status(500).json({message: `Error retrieving product : ${err}`});
        } else {
            if (product) {
                res.json(product);
            } else {
                res.status(404).json({message: `Product ${id} not found`});
            }
        }
    });
});

//on créé une route pour supprimer un product
router.route("/:id").delete((req, res) => {
    const id = req.params.id;
    Product.findByIdAndDelete(id, (err, product) => {
        if(err) {
            res.status(500).json({message: `Error deleting product ${id} : ${err}`});
        } else {
            if (product) {
                res.json({message: `Product ${id} successfully deleted`});
            } else {
                res.status(404).json({message: `Product ${id} not found`});
            }
        }
    });
});

//on exporte ensuite nos routes
module.exports = router;