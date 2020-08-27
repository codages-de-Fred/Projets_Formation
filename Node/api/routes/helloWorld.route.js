/**
 * ce fichier sert à définir des routes qui pourront être importées ds Express pour notre serveur
 * pour cela, il faut récupérer une instance de express
 */
const express = require('express');
const app = express();
//ces deux lignes peuvent s'écrire : const app = require('express')();

/**
 * pour définir des routes ds express on va appeler le composant Router de express
 */
const router = express.Router();


/**
 * pour déclarer une route on utilise la méthode route du router
 * on définit une route selon un chemin, puis une méthode
 * puis la fct qui s'exécutera lorsque la route aura reçu une requête
 * Ds la fct à exécuter, on reçoit 2 paramètres : la requête HTTP et la réponse HTTP
 */
router.route("/").get( (req, res) => {
    //on utilise l'objet réponse (res) pour envoyer nos données
    res.json({message: 'Hello World !'});
});

/**
 * pour rendre dispo notre module de routes aux autres parties de l'application
 * il faut l'exporter
 * modul.export permet de rendre dispo des données ds une aplli node
 */
module.exports = router;