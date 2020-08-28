/**
 * pour mettre en place notre server et le faire écouter sur un port
 * il faut utiliser express
 * Pour importer un module node, on utilise require
 * Ici, on charge le module express contenu ds node modules ds une constante nommée express
 */
const express = require('express');
//on charge body-parser qui permettra la lecture des corps de requête HTTP
const bodyParser = require('body-parser');
//on charge le module cors qui permettra les requêtes Cross Origin
const cors = require('cors');
const helloRoute = require('./routes/helloWorld.route');
const productRoute = require('./routes/product.route');
const categoriesRoute = require('./routes/categories.route');

/**
 * on apporte notre ODM mongoose
 * pour dialoguer avec la bdd (comme doctrine)
 * les options useNewUrlParser et useUnifiedTopology mises à true permettent d'éviter les erreurs de deprecation (avertissement au développeur en vue de la remplacer)
 * useFindAndModify pour indiquer à mongoose qu'on n'utilise pas cette méthode car elle est dépréciée, on est sur un nv modèle de mongoose
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(
    //si tout se passe bien
    () => console.log('db connected'),
    //sinon en deuxième paramètre
    err => console.error(`db error ${err}`)
);

/**
 * on appelle ensuite express pour générer notre server
 */
const app = express();

/**
 * on définit un port d'écoute de notre server
 */
const port = 4000;

/**
 * on indique à notre app express d'utiliser nos routes
 * const helloRoute se charge automatiquement
 * on indique à express d'utiliser bodyParser pour intercepter le json ds les requêtes
 * on indique à express d'utiliser cors
 */
app.use(bodyParser.json());
app.use(cors());
app.use("/", helloRoute);
app.use('/product', productRoute);
app.use('/categories', categoriesRoute);

/**
 * on demande ensuite au serveur d'écouter sur le port défini"
 */
const server = app.listen(port, () => console.log('serveur lancé sur le port ' + port));
