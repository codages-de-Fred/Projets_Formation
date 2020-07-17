document.addEventListener('DOMContentLoaded', () => {
    /****************** panier *********************** */
    let basket = document.getElementById('basket');

    let panier = [];
    

    /***************** affichage de tous les produits ************** */
    affiche(products);
    
    function affiche(products) {
        let container = document.getElementById('container');
        
        let fragment = document.createDocumentFragment();
        fragment.appendChild(basket);

        products.forEach(product => {
            
            let div = document.createElement('div');
            let name = document.createElement('span');
            let price = document.createElement('span');
            let image = document.createElement('img');
            
            div.className = "eachProduct";
            name.className = "name";
            price.className = "price";
            
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
    }

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

        button.id = 'button';
        retour.id = 'retour';

        name.textContent = choix.childNodes[0].textContent;
        price.textContent = choix.childNodes[1].textContent + "€";
        image.src = choix.childNodes[2].src;
        image.alt = choix.childNodes[2].alt;
        button.textContent = "ajouter au panier";
        retour.textContent = "retour à la liste";

        basketName = name.textContent;
        basketPrice = price.textContent;
        basketImgSrc = image.src;
        basketImgAlt = image.alt;
        
        container.appendChild(button);
        container.appendChild(retour);
        container.appendChild(name);
        container.appendChild(price);
        container.appendChild(image);

        /**** ajout au panier *********** */
        let addBasket = document.getElementById('button');
        addBasket.addEventListener('click', () => {
            traduitObjet(basketName, basketPrice, basketImgSrc, basketImgAlt);
        })

        /**** retour à la liste des produits ******* */
        let pushRetour = document.getElementById('retour');
        pushRetour.addEventListener('click', () => {
            container.innerHTML = "";
            affiche(products);
        })

    }, true)
    )

    /***** affichage du panier ************** */
    basket.addEventListener('click', () => {
        container.innerHTML = "";

        let tableau = document.createElement('table');
        let thead = document.createElement('thead');
        let trhead = document.createElement('tr');
        let thHeadUn = document.createElement('th');
        let thHeadDeux = document.createElement('th');
        let thHeadTrois = document.createElement('th');
        let tbody = document.createElement('tbody');

        thHeadUn.textContent = "name";
        thHeadDeux.textContent = "price";
        thHeadTrois.textContent = "image";

        container.appendChild(tableau);
        tableau.appendChild(thead);
        thead.appendChild(trhead);
        trhead.appendChild(thHeadUn);
        trhead.appendChild(thHeadDeux);
        trhead.appendChild(thHeadTrois);

        panier.forEach(produit => {
            if (panier !== []) {
                let trBody = document.createElement('tr');
                let name = document.createElement('td');
                let price = document.createElement('td');
                let tdImage = document.createElement('td');
                let image = document.createElement('img');
                
                
                name.textContent = produit.name;
                price.textContent = produit.price;
                image.src = produit.imgSrc;
                image.alt = produit.imgAlt;

                tableau.appendChild(trBody);
                trBody.appendChild(name);
                trBody.appendChild(price);
                tdImage.appendChild(image);
                trBody.appendChild(image);
            }
        })
    })

    //traduit les paramètres de l'élément envoyer au panier en objet
    function traduitObjet(a, b, c, d) {
        selectProduct = {
            name: a,
            price: b,
            imgSrc: c,
            imgAlt: d
        }
        panier.push(selectProduct);
        console.log(panier);
    }
})
