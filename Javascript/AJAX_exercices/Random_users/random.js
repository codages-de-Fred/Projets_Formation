document.addEventListener('DOMContentLoaded', () => {
    let request = new XMLHttpRequest();
    let select = document.getElementById('nationality');
    let boxHomme = document.getElementById('homme');
    let boxFemme = document.getElementById('femme');
    let search = document.getElementById('search');

    let nationality = null;
    let genderMale = false;
    let genderFemale = false;
    let gender = null;

    select.addEventListener('click', (event) => {
        nationality = event.target.value;
    })
    boxHomme.addEventListener('change', (event) => {
        if (event.target.checked) {
            genderMale = true;
        } else {
            genderMale = false;
        }
    })
    boxFemme.addEventListener('change', (event) => {
        if (event.target.checked) {
            genderFemale = true;
        } else {
            genderFemale = false;
        }
    })

    search.addEventListener('click', () => {
        if (searchGender(genderMale, genderFemale) !== "erreur") {
            gender = searchGender(genderMale, genderFemale);
            request.open('GET', 'https://randomuser.me/api/?results=20&nationality=' + nationality + '&gender='+ gender);
            request.send();
            request.addEventListener('load', (event) => {
                let reponse = JSON.parse(event.target.response);
                console.log(reponse)
                afficheResults(reponse);
            })
        } else {
            alert("Veuillez sélectionner le genre");
        }
    })

})

function searchGender(a, b) {
    if (a && !b) {
        return "male";
    }
    if (!a && b) {
        return "female";
    }
    if (a && b) {
        return "";
    }
    if (!a && !b) {
        return "erreur";
    }
}

function afficheResults(reponse) {
    let liste = document.getElementById('liste');

    liste.innerHTML = "";

    reponse.results.forEach(user => {
        let photo = document.createElement('img');
        let divPhoto = document.createElement('div');
        let imgName = document.createElement('img');
        let imgAdress = document.createElement('img');
        let imgTel = document.createElement('img');
        let imgDob = document.createElement('img');
        let divIcones = document.createElement('div');
        let divAfficheTop = document.createElement('div');
        let divAfficheBottom = document.createElement('div');
        let person = document.createElement('div');

        photo.className = "photo";
        imgTel.src = "images/tel.svg";
        imgName.src = "images/name.svg";
        imgAdress.src = "images/adress.svg";
        imgDob.src = "images/dob.svg";
        imgAdress.className = "icones adress";
        imgTel.className = "icones tel";
        imgDob.className = "icones dob";
        imgName.className = "icones name";
        divAfficheTop.className = "afficheTop";
        divAfficheBottom.className = "afficheBottom";
        person.className = "person";

        photo.src = user.picture.medium;
        
        divPhoto.appendChild(photo);
        person.appendChild(divPhoto)
        person.appendChild(divAfficheTop);
        person.appendChild(divAfficheBottom);
        divIcones.appendChild(imgName);
        divIcones.appendChild(imgAdress);
        divIcones.appendChild(imgTel);
        divIcones.appendChild(imgDob);
        person.appendChild(divIcones);
        liste.appendChild(person);

        hover(user,person, divAfficheTop, divAfficheBottom);
    });
}
function hover(user,person, divAfficheTop, divAfficheBottom) {
    //il faut cibler chaque person sinon si on cible le document toutes les 
    //persons changeront aussi
    let icones = Array.from(person.getElementsByClassName('icones'));
    icones.forEach(icone => icone.addEventListener('mouseover', (event) => {
        console.log(icone)
        if (icone.className === "icones tel") {
            divAfficheTop.textContent = "Mon numéro de téléphone :";
            divAfficheBottom.textContent = user.phone;
        }
        if (icone.className === "icones adress") {
            divAfficheTop.textContent = "Je vis à :";
            divAfficheBottom.textContent = user.location.city;
        }
        if (icone.className === "icones name") {
            divAfficheTop.textContent = "Je me nomme :";
            divAfficheBottom.textContent = user.name.first;
        }
        if (icone.className === "icones dob") {
            divAfficheTop.textContent = "Je suis né(e) le :";
            divAfficheBottom.textContent = user.dob.date;
        }
    }))
}