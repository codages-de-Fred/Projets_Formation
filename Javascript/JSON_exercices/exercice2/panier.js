document.addEventListener('DOMContentLoaded', () => {

    /***************** affichage de tous les produits ************** */
    affiche(products);
})

let panier = []; //tableau des produits ajoutés
let total = 0; //prix total des commandes

function affiche(products) {
    let basket = document.getElementById('basket');
    let container = document.getElementById('container');
    let fragment = document.createDocumentFragment();
    
    products.forEach(product => {
        
        let div = document.createElement('div');
        let name = document.createElement('span');
        let price = document.createElement('span');
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
        div.appendChild(image);
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
        image.src = choix.childNodes[2].src;
        image.alt = choix.childNodes[2].alt;
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
        container.innerHTML = "";

        let tableau = document.createElement('table');
        let thead = document.createElement('thead');
        let trhead = document.createElement('tr');
        let thHeadUn = document.createElement('th');
        let thHeadDeux = document.createElement('th');
        let thHeadTrois = document.createElement('th');
        let thHeadQuatre = document.createElement('th');
        let tbody = document.createElement('tbody');

        thHeadQuatre.textContent = "quantity";
        thHeadUn.textContent = "name";
        thHeadDeux.textContent = "price";
        thHeadTrois.textContent = "image";

        container.appendChild(tableau);
        tableau.appendChild(thead);
        thead.appendChild(trhead);
        trhead.appendChild(thHeadUn);
        trhead.appendChild(thHeadDeux);
        trhead.appendChild(thHeadTrois);
        trhead.appendChild(thHeadQuatre);
        tableau.appendChild(tbody);
        
        
        panier.forEach(produit => {
            if (panier !== []) {
                let trBody = document.createElement('tr');
                let quantity = document.createElement('td');
                let name = document.createElement('td');
                let price = document.createElement('td');
                let tdImage = document.createElement('td');
                let image = document.createElement('img');
                
                quantity.textContent = produit.quantity;
                name.textContent = produit.name;
                price.textContent = produit.price;
                image.src = produit.imgSrc;
                image.alt = produit.imgAlt;
                
                tbody.appendChild(trBody);
                trBody.appendChild(quantity);
                trBody.appendChild(name);
                trBody.appendChild(price);
                tdImage.appendChild(image);
                trBody.appendChild(image);
            }
        })
            //affichage du total dans le tableau
            let trTotal = document.createElement('tr');
            let tdTotalUn = document.createElement('td');
            let tdTotalDeux = document.createElement('td');
            
            tdTotalUn.colSpan = "3";
            tdTotalUn.textContent = "total";
            tdTotalDeux.textContent = total;
            
            tbody.appendChild(trTotal);
            trTotal.appendChild(tdTotalUn);
            trTotal.appendChild(tdTotalDeux);

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
