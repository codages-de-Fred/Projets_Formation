document.addEventListener('DOMContentLoaded', () => {

    /***************** affichage de tous les produits ************** */
    affiche(products);
})

let panier = []; //tableau des produits ajoutés
let total = 0; //prix total des commandes
let nombreCommandes = 0;

function affiche(products) {
    let basket = document.getElementById('basket');
    let container = document.getElementById('container');
    //pour afficher en une seule fois
    let fragment = document.createDocumentFragment();

    function afficheNombreCommandes() {
        let panneauNombreCommandes = document.getElementById('nombreCommandes');
        panneauNombreCommandes.textContent = nombreCommandes;
    }

    afficheNombreCommandes();
    
    products.forEach(product => {
        
        let div = document.createElement('div');
        let name = document.createElement('div');
        let price = document.createElement('div');
        let divImage = document.createElement('div');
        let image = document.createElement('img');
        
        div.className = "eachProduct";
        name.className = "name";
        price.className = "price";
        image.className = "images";
        
        name.textContent = product.name;
        price.textContent = product.price + "€";
        image.src = product.image;
        image.alt = "image du produit";
        
        div.appendChild(name);
        div.appendChild(price);
        div.appendChild(divImage);
        divImage.appendChild(image);
        fragment.appendChild(div);
    });
    container.appendChild(fragment);

 /************* affichage de chaque produit ****************************** */

    //pour les classes les ranger ds un tableau
    let eachProduct = Array.from(document.getElementsByClassName("eachProduct"));
    //on parcours le tableau pour chq élément
    eachProduct.forEach(choix => choix.addEventListener('click', (event) => {
        let container = document.getElementById('container');
        container.innerHTML = "";

        let name = document.createElement('span');
        let price = document.createElement('span');
        let image = document.createElement('img');
        let button = document.createElement('button');
        let retour = document.createElement('button');
        let quantity = document.createElement('input');

        button.id = 'button';
        retour.id = 'retour';
        quantity.type = 'number';
        quantity.id = 'quantity';
        nombreAjout = 0;

        name.textContent = choix.childNodes[0].textContent;
        price.textContent = choix.childNodes[1].textContent;
        image.src = choix.childNodes[2].firstChild.src;
        image.alt = choix.childNodes[2].firstChild.alt;
        button.textContent = "ajouter au panier";
        retour.textContent = "retour à la liste";
        
        basketName = name.textContent;
        basketPrice = price.textContent;
        basketImgSrc = image.src;
        basketImgAlt = image.alt;
        //enlève € pour le calcul du prix total
        priceWithoutEuros = basketPrice.slice(0, basketPrice.length-1);

        container.appendChild(button);
        container.appendChild(retour);
        container.appendChild(name);
        container.appendChild(price);
        container.appendChild(image);
        container.appendChild(quantity);

        //si on utilise les flêches d'incrémentation
        quantity.addEventListener('click', (event) => {
            nombreAjout = quantity.value;
        })
        //si on entre le nombre de produits avec le clavier
        quantity.addEventListener('keyup', (event) => {
            nombreAjout = quantity.value;
        })

        /**** ajout au panier *********** */
        let addBasket = document.getElementById('button');
        addBasket.addEventListener('click', (eventTotal) => {
            if (nombreAjout === 0) {
                alert("veuillez entrer le nombre d'ajouts");
            } else {
                traduitObjet(basketName, basketPrice, basketImgSrc, basketImgAlt, nombreAjout);
                total += nombreAjout*priceWithoutEuros;
                nombreCommandes = parseInt(nombreCommandes) + parseInt(nombreAjout);
                afficheNombreCommandes();
            }
        })
        /**** retour à la liste des produits ******* */
        let pushRetour = document.getElementById('retour');
        pushRetour.addEventListener('click', () => {
            container.innerHTML = "";
            fragment.innerHTML = "";
            affiche(products);
        })
    }, {once: false}))

    /***** affichage du panier ************** */
    basket.addEventListener('click', () => {
        affichePanier();
        
        function affichePanier() {
            container.innerHTML = "";
            let tableau = document.createElement('table');
            let thead = document.createElement('thead');
            let trhead = document.createElement('tr');
            let thHeadUn = document.createElement('th');
            let thHeadDeux = document.createElement('th');
            let thHeadTrois = document.createElement('th');
            let thHeadQuatre = document.createElement('th');
            let tbody = document.createElement('tbody');
            let liste = document.createElement('button');

            thHeadQuatre.textContent = "quantity";
            thHeadUn.textContent = "name";
            thHeadDeux.textContent = "price";
            thHeadTrois.textContent = "image";
            liste.textContent = "retour à la liste";

            container.appendChild(liste);
            container.appendChild(tableau);
            tableau.appendChild(thead);
            thead.appendChild(trhead);
            trhead.appendChild(thHeadQuatre);
            trhead.appendChild(thHeadUn);
            trhead.appendChild(thHeadDeux);
            trhead.appendChild(thHeadTrois);
            tableau.appendChild(tbody);
            
            
            panier.forEach(produit => {
                if (panier !== []) {
                    let trBody = document.createElement('tr');
                    let quantity = document.createElement('td');
                    let name = document.createElement('td');
                    let price = document.createElement('td');
                    let tdImage = document.createElement('td');
                    let image = document.createElement('img');
                    let annuler = document.createElement('button');
                    
                    quantity.textContent = produit.quantity;
                    name.textContent = produit.name;
                    price.textContent = produit.price;
                    image.src = produit.imgSrc;
                    image.alt = produit.imgAlt;
                    annuler.textContent = "supprimer";
                    annuler.id = "supprimer";
                    
                    tbody.appendChild(trBody);
                    trBody.appendChild(quantity);
                    trBody.appendChild(name);
                    trBody.appendChild(price);
                    tdImage.appendChild(image);
                    trBody.appendChild(image);
                    trBody.appendChild(annuler);
                    
                    //supprimer un élément du panier
                    annuler.addEventListener('click', () => {
                        for (let i=0; i < panier.length; i++) {
                            if (panier[i] === produit) {
                                nombreCommandes = parseInt(nombreCommandes) - parseInt(produit.quantity);
                                total -= (parseFloat(produit.price)*parseFloat(produit.quantity)).toFixed(2);
                                panier.splice(i, 1);
                                afficheNombreCommandes();
                                affichePanier();
                            }
                        }
                    })
                }
            })
            //affichage du total dans le tableau
            let trTotal = document.createElement('tr');
            let tdTotalUn = document.createElement('td');
            let tdTotalDeux = document.createElement('td');
            
            tdTotalUn.colSpan = "3";
            tdTotalUn.textContent = "total";
            tdTotalDeux.textContent = parseFloat(total).toFixed(2) + "€";
            
            tbody.appendChild(trTotal);
            trTotal.appendChild(tdTotalUn);
            trTotal.appendChild(tdTotalDeux);
            
            //retour à la liste
            liste.addEventListener('click', () => {
                container.innerHTML = "";
                fragment.innerHTML = "";
                affiche(products);
            })
        }
    })
}
 //traduit les paramètres de l'élément envoyer au panier en objet
    function traduitObjet(a, b, c, d, e) {
        selectProduct = {
            name: a,
            price: b,
            imgSrc: c,
            imgAlt: d,
            quantity: e
        }
        panier.push(selectProduct);
    }
