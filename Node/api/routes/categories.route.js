const express = require('express');
const router = express.Router();

let Categories = require('../models/Categories');
const { Router } = require('express');

//ts les produits
router.route('/').get((req, res) => {
    Categories.find((err, categories) => {
        if (err) {
            res.status(500).json({message: `Error retrieving categories : ${err}`});
        } else {
            res.json(categories);
        }
    });
});

//une seule catégorie
router.route('/:id').get((req, res) => {
    const id = req.params.id;
    Categories.findById(id, (err, categorie) => {
        if(err) {
            res.status(500).json({message: `Error retrieving categorie : ${err}`});
        } else {
            if (categorie) {
                res.json(categorie);
            } else {
                res.status(404).json({message: `Product ${id} not found`});
            }
        }
    });
});

//ajouter une catégorie
router.route('/').post((req, res) => {
    const categorie = new Categories(req.body);
    categorie.save().then(
        categorie => res.json(categorie)
    ).catch(
        err => res.json({message: `Unable to save categorie to database : ${err}`})
    );
});

//supprimer une catégorie
router.route('/:id').delete((req, res) => {
    const id = req.params.id;
    Categories.findByIdAndDelete(id, (err, categorie) => {
        if(err) {
            res.status(500).json({message: `Error deleting categorie ${id} : ${err}`});
        } else {
            if (categorie) {
                res.json({message: `Categorie ${id} successfully deleted`});
            } else {
                res.status(404).json({message: `Categorie ${id} not found`});
            }
        }
    });
});

//modifier une catégorie
router.route('/:id').put((req, res) => {
    const id = req.params.id;
    Categories.findByIdAndUpdate(id, req.body, {new: true}, (err, categorie) => {
        if(err) {
            res.status(500).json({message: `Error updating categorie ${id} : ${err}`});
        } else {
            if(categorie) {
                res.json(categorie);
            } else {
                res.status(404).json({message: `Categorie ${id} not found`});
            }
        }
    });
});

module.exports = router;