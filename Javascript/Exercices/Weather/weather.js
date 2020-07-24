
document.addEventListener('DOMContentLoaded', () => {
    /***************** les variables ********************** */

    let selectRegions = document.getElementById('selectRegions');
    let selectDep = document.getElementById('selectDep');
    let selectVilles = document.getElementById('selectVilles');
    let buttonSelect = document.getElementById('buttonSelect');
    let buttonCity = document.getElementById('buttonCity');
    let city = document.getElementById('city');
    let affichage = document.getElementById('affichage');
    let temp = document.getElementById('temp');
    let tps = document.getElementById('tps');
    let imgTps = document.getElementById('imgTps');
    let wind = document.getElementById('wind');
    let evolution = document.getElementById('evolution');

    let villeChoisieBySelect = "";

    /***** on récupère la liste des régions ************** */
    let regionsSearch = new XMLHttpRequest();
    regionsSearch.open('GET', 'https://geo.api.gouv.fr/regions');
    regionsSearch.send();
    regionsSearch.addEventListener('load', (event) => {
        let reponse = JSON.parse(event.target.response);
        reponse.forEach(region => {
            let option = document.createElement('option');

            option.textContent = region.nom;
            option.value = region.code;
            option.className = "option"

            selectRegions.appendChild(option);
        });
    })
    

    /************** recherche des départements *********************************** */

    //si région sélectionnée on affiche les départements de la région
    selectRegions.addEventListener('change', event => searchDep(event));
    //api des départements
    function searchDep(event) {
        let depChoose = event.target.value;

        let departements = new XMLHttpRequest();
        departements.open('GET', 'https://geo.api.gouv.fr/regions/' + depChoose + '/departements');
        departements.send();
        departements.addEventListener('load', (event) => {
            let reponseDep = JSON.parse(event.target.response);
            reponseDep.forEach(choix => {
                let option = document.createElement('option');
                option.textContent = choix.nom;
                option.value = choix.code;
                selectDep.appendChild(option);
            })
        })
    }
    /*********************** recherche des villes ************************* */
    selectDep.addEventListener('change', event => searchVilles(event));
    //api des villes
    function searchVilles(event) {
        let villeChoisie = event.target.value;

        let villes = new XMLHttpRequest();
        villes.open('GET', 'https://geo.api.gouv.fr/departements/'+ villeChoisie + '/communes');
        villes.send();
        villes.addEventListener('load', (event) => {
            let reponse = JSON.parse(event.target.response);
            reponse.forEach(choix => {
                let option = document.createElement('option');
                option.textContent = choix.nom;
                option.value = choix.codesPostaux[0];
                selectVilles.appendChild(option);
            })
        })
    }
    selectVilles.addEventListener('change', () => {
        villeChoisieBySelect = selectVilles.value;
    })
    /********************* les boutons déclencheurs de recherche *************** */
    buttonSelect.addEventListener('click', () => {
        //pour la meteo du jour
        let request = new XMLHttpRequest();
        request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lang=fr&zip='+villeChoisieBySelect +',FR&units=metric&appid=e8957783416e87856805665674eece43');
        afficheMeteoJour(request);
        //pour la météo à 5 jours
        let reqSemaine = new XMLHttpRequest();
        reqSemaine.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?lang=fr&zip='+villeChoisieBySelect +',fr&units=metric&appid=e8957783416e87856805665674eece43');
        reqSemaine.send();
        reqSemaine.addEventListener('load', (event) => {
            console.log(JSON.parse(event.target.response));
            let reponse = JSON.parse(event.target.response);
            let list = reponse.list;
            afficheTemperatures(list);
            afficheLesImages(list);
        })
    })
    buttonCity.addEventListener('click', () => {
        //pour la meteo du jour
        let request = new XMLHttpRequest();
        request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lang=fr&q='+city.value +',FR&units=metric&appid=e8957783416e87856805665674eece43');
        afficheMeteoJour(request);
        //pour la météo à 5 jours
        let reqSemaine = new XMLHttpRequest();
        reqSemaine.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?lang=fr&q='+ city.value +',fr&units=metric&appid=e8957783416e87856805665674eece43');
        reqSemaine.send();
        reqSemaine.addEventListener('load', (event) => {
            console.log(JSON.parse(event.target.response));
            let reponse = JSON.parse(event.target.response);
            let list = reponse.list;
            afficheLesImages(list)
            afficheTemperatures(list);
        })
    })

    /******************* les requêtes API de la météo du jour ************************* */
    function afficheMeteoJour(request) {
        request.send();
        request.addEventListener('load', (event) => {
            let reponse = JSON.parse(event.target.response);
            console.log(reponse);
            entreLesDonnees(reponse);
            
        })
    }
    function entreLesDonnees(reponse) {
        temp.textContent = reponse.main.temp;
        tps.textContent = reponse.weather[0].description;
        imgTps.src = 'http://openweathermap.org/img/wn/'+ reponse.weather[0].icon +'@2x.png';
        wind.textContent = reponse.wind.speed;
    }
})

/***************** les requêtes de la météo à 5 jours ********************* */
function afficheLesImages(list) {
    list.forEach(l => {
        let img = document.createElement('img');
        img.src ='http://openweathermap.org/img/wn/'+ l.weather[0].icon +'@2x.png';
        evolution.appendChild(img);
    })
}

function afficheTemperatures(list) {
    let ctx = document.getElementById('lesTemp').getContext('2d');
    let lesTemp = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'températures à 5 jours',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })
    list.forEach(e => {
        lesTemp.data.labels.push(e.dt_txt)
        lesTemp.data.datasets.forEach((dataset) => 
            {
                dataset.data.push(e.main.temp)
            }
        )
    })
    console.log(lesTemp.data.labels)
    console.log(lesTemp.data.datasets)
}