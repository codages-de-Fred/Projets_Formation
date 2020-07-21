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
        gender = searchGender(genderMale, genderFemale);
        request.open('GET', 'https://randomuser.me/api/?results=20&nationality=' + nationality + '&gender='+ gender);
        request.send();
        request.addEventListener('load', (event) => {
        let reponse = JSON.parse(event.target.response);
        console.log(reponse)
        afficheResults(reponse);
        })
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
}

function afficheResults(reponse) {
    let liste = document.getElementById('liste');

    liste.innerHTML = "";

    reponse.results.forEach(user => {
        let photo = document.createElement('img');
        let divPhoto = document.createElement('div');
        let imgName = document.createElement('img');
        let name = document.createElement('div');
        let adress = document.createElement('div');
        let imgAdress = document.createElement('img');
        let tel = document.createElement('img');
        let imgTel = document.createElement('img');
        let dob = document.createElement('div');
        let imgDob = document.createElement('img');
        let divIcones = document.createElement('div');
        let divAffiche = document.createElement('div');
        let person = document.createElement('div');

        imgTel.src = "images/tel.svg";
        imgName.src = "images/name.svg";
        imgAdress.src = "images/adress.svg";
        imgDob.src = "images/dob.svg";
        imgAdress.className = "icones adress";
        imgTel.className = "icones tel";
        imgDob.className = "icones dob";
        imgName.className = "icones name";
        divAffiche.className = "affiche";
        person.className = "person";


        photo.src = user.picture.medium;
        name.textContent = user.name.first;
        adress.textContent = user.location.city;
        tel.textContent = user.phone;
        dob.textContent = user.dob.date;

        divPhoto.appendChild(photo);
        person.appendChild(divPhoto)
        person.appendChild(divAffiche);
        divIcones.appendChild(imgName);
        divIcones.appendChild(imgAdress);
        divIcones.appendChild(imgTel);
        divIcones.appendChild(imgDob);
        person.appendChild(divIcones);
        liste.appendChild(person);

        hover(user, divAffiche);
    });
}
function hover(user, divAffiche) {
    let icones = Array.from(document.getElementsByClassName('icones'));
    icones.forEach(icone => icone.addEventListener('mouseover', (event) => {
        if (icone.className === "icones tel") {
            divAffiche.textContent = "mon tel : " + user.phone;
        }
        if (icone.className === "icones adress") {
            divAffiche.textContent = "je vis à : " + user.location.city;
        }
        if (icone.className === "icones name") {
            divAffiche.textContent = "je me nomme : " + user.name.first;
        }
        if (icone.className === "icones dob") {
            divAffiche.textContent = "je suis né(e) le : " + user.dob.date;
        }
    }))
}