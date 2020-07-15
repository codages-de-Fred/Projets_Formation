let main = document.getElementById('body');
let header = document.getElementById('header');
let moi = document.getElementById('moi');
let comp = document.getElementById('competences');
let expPro = document.getElementById('exp_pro');
let cont = document.getElementById('contact');
let lang = document.getElementById('langues');
let expDev = document.getElementById('exp_dev');
let photo = document.getElementById('maphoto');
let diplomes = document.getElementById('diplomes');
let tout = document.getElementById('tout');

let reperePlus = 0;
let repereMoins = 100;
let xMoins = 0;
let xPlus = 0;
let yMoins = 0;
let yPlus = 0;
let degres = 0;

function time() {
    setInterval(couleurIntro, 40);
}
function couleurIntro() {
    reperePlus += 2.5;
    repereMoins = repereMoins - 2.5;
    if (reperePlus < 50) {
        main.style.backgroundImage = "radial-gradient(white "+reperePlus+"%, yellow "+reperePlus+"%, black "+repereMoins+"%)";
    } else if (reperePlus > 50 && reperePlus < 70) {
        main.style.backgroundImage = "radial-gradient(white "+reperePlus+"%, black "+repereMoins+"%)";
    } else if (reperePlus > 70 ) {
        main.style.backgroundImage = "url(photo/fond.png)";
        main.style.backgroundRepeat = "no-repeat";
        main.style.backgroundSize = "50%";
        main.style.backgroundPosition = "50% 90%";
        header.style.backgroundImage = "radial-gradient(white 5%, rgb(201,174,2), rgb(39,94,7))";
    } else if (reperePlus > 80) {
        clearInterval();
    }
}
time();

function demarreRotation() {
    setTimeout(timeRotation, 1500);
}
function timeRotation() {
    setInterval(rotation, 20);
}
function rotation() {
    xMoins = xMoins - 0.4;
    xPlus += 0.4;
    yMoins = yMoins - 0.4;
    yPlus += 0.4;
    degres += 5;
    
    if (degres <= 360) {
        photo.style.transform = "rotate("+degres+"deg)";
        expDev.style.transform = "translateX("+xMoins+"vw)";
        moi.style.transform = "translate("+xMoins+"vw, "+yMoins+"vh)";
        expPro.style.transform = "translate("+xPlus+"vw, "+yMoins+"vh)";
        comp.style.transform = "translateX("+xPlus+"vw)";
        lang.style.transform = "translate("+xMoins+"vw, "+yPlus+"vh)";
        cont.style.transform = "translate("+xPlus+"vw, "+yPlus+"vh)";
        diplomes.style.transform = "translateY("+yMoins+"vh)";
    } else if (degres > 360) {
        clearInterval();
    }
}
demarreRotation();

