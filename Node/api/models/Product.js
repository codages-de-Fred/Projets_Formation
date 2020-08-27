const mongoose = require('mongoose');
//on récupère le composant Schema de monggose pour générer un schéma de données
const Schema = mongoose.Schema; 

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
        }
    }, {
        //on définit ds quelle collection on stockera le schema
        collection: 'product'
    }
);

//on exporte ensuite le modèle généré par mongoose pour utilisation ds notre serveur
module.exports = mongoose.model('product', product);