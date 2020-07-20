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
        let divProduct = document.createElement('div');
        let name = document.createElement('div');
        let price = document.createElement('div');
        let image = document.createElement('img');
        let divButtons = document.createElement('div');
        let button = document.createElement('button');
        let retour = document.createElement('button');
        let divInput = document.createElement('div');
        let label = document.createElement('label');
        let quantity = document.createElement('input');
        let section = document.createElement('section');

        button.id = 'button';
        retour.id = 'retour';
        quantity.type = 'number';
        quantity.id = 'quantity';
        quantity.name = "ajout";
        label.for = "ajout";
        label.textContent = "nombre de produits à ajouter au panier : ";
        nombreAjout = 0;
        divProduct.id = "divProduct";

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

        divButtons.appendChild(button);
        divButtons.appendChild(retour);
        section.appendChild(divButtons);
        divProduct.appendChild(name);
        divProduct.appendChild(price);
        divProduct.appendChild(image);
        section.appendChild(divProduct);
        divInput.appendChild(label);
        divInput.appendChild(quantity);
        section.appendChild(divInput);
        container.appendChild(section);

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
            } else if (nombreAjout < 0) {
                alert("veuillez entrer des nombres positifs");
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

            let section = document.createElement('section');
            let tableau = document.createElement('table');
            let thead = document.createElement('thead');
            let trhead = document.createElement('tr');
            let thHeadUn = document.createElement('th');
            let thHeadDeux = document.createElement('th');
            let thHeadTrois = document.createElement('th');
            let thHeadQuatre = document.createElement('th');
            let thHeadCinq = document.createElement('th');
            let tbody = document.createElement('tbody');
            let liste = document.createElement('button');

            thHeadQuatre.textContent = "quantity";
            thHeadUn.textContent = "name";
            thHeadDeux.textContent = "price";
            thHeadTrois.textContent = "image";
            thHeadCinq.textContent = "ajouter/enlever";
            liste.textContent = "retour à la liste";

            container.appendChild(section);
            section.appendChild(liste);
            section.appendChild(tableau);
            tableau.appendChild(thead);
            thead.appendChild(trhead);
            trhead.appendChild(thHeadQuatre);
            trhead.appendChild(thHeadUn);
            trhead.appendChild(thHeadDeux);
            trhead.appendChild(thHeadTrois);
            trhead.appendChild(thHeadCinq);
            tableau.appendChild(tbody);
            
            
            panier.forEach(produit => {
                if (panier !== []) {
                    let trBody = document.createElement('tr');
                    let quantity = document.createElement('td');
                    let name = document.createElement('td');
                    let price = document.createElement('td');
                    let tdImage = document.createElement('td');
                    let image = document.createElement('img');
                    let tdAddSup = document.createElement('td');
                    let ajout = document.createElement('button');
                    let enleve = document.createElement('button');
                    let annuler = document.createElement('button');

                    image.className = "images";
                    
                    quantity.textContent = produit.quantity;
                    name.textContent = produit.name;
                    price.textContent = produit.price;
                    image.src = produit.imgSrc;
                    image.alt = produit.imgAlt;
                    ajout.textContent = "+";
                    ajout.id = "ajout";
                    enleve.textContent = "-";
                    enleve.id = "enleve";
                    annuler.textContent = "supprimer";
                    annuler.id = "supprimer";
                    
                    tbody.appendChild(trBody);
                    trBody.appendChild(quantity);
                    trBody.appendChild(name);
                    trBody.appendChild(price);
                    tdImage.appendChild(image);
                    trBody.appendChild(tdImage);
                    tdAddSup.appendChild(ajout);
                    tdAddSup.appendChild(enleve);
                    trBody.appendChild(tdAddSup);
                    trBody.appendChild(annuler);

                    //ajouter éléments
                    ajout.addEventListener('click', () => {
                        produit.quantity++;
                        total = parseFloat(total) + parseFloat(produit.price);
                        nombreCommandes++;
                        afficheNombreCommandes();
                        affichePanier();
                    })

                    //enlever éléments
                    enleve.addEventListener('click', () => {
                        produit.quantity--;
                        if (produit.quantity === 0) {
                            supprimeElementPanier(produit);
                        } else {
                            total = parseFloat(total) - parseFloat(produit.price);
                            nombreCommandes--;
                            afficheNombreCommandes();
                            affichePanier();
                        }
                    })
                    
                    //supprimer un élément du panier
                    annuler.addEventListener('click', () => {
                        supprimeElementPanier(produit);
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
function afficheNombreCommandes() {
    let panneauNombreCommandes = document.getElementById('nombreCommandes');
    panneauNombreCommandes.textContent = nombreCommandes;
}
function supprimeElementPanier(produit) {
    for (let i=0; i < panier.length; i++) {
        if (panier[i] === produit) {
            nombreCommandes = parseInt(nombreCommandes) - parseInt(produit.quantity);
            total -= (parseFloat(produit.price)*parseFloat(produit.quantity)).toFixed(2);
            panier.splice(i, 1);
            afficheNombreCommandes();
            affichePanier();
        }
    }
}

