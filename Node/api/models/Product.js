const mongoose = require('mongoose');
//on récupère le composant Schema de monggose pour générer un schéma de données
const Schema = mongoose.Schema; 

//on récupère le model Categories pour créer une relation many to one
let Categories = require('./Categories');

/**
 * on définit notre schema pour notre collection product
 */
const product = new Schema(
    {
        //on définit d'abord nos prpriétés
        name: {
            type: String
        },
        description: {
            type: String
        },
        price: {
            type: Number
        },
        categories : [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Categories'
            }
        ]
    }, {
        //on définit ds quelle collection on stockera le schema
        collection: 'product'
    }
);

//on exporte ensuite le modèle généré par mongoose pour utilisation ds notre serveur
module.exports = mongoose.model('product', product);