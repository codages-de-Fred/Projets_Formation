let firstNombre = true;

let nombreUn = "";
let nombreDeux = "";
let op = "";

document.addEventListener('DOMContentLoaded', () => {

    let chiffres = Array.from(document.getElementsByClassName('buttonChiffres'));
    let operations = Array.from(document.getElementsByClassName('buttonOperations'));
    let screen = document.getElementById('screen');

    chiffres.forEach(chiffre => chiffre.addEventListener('click', event => addNombre(event)));
    operations.forEach(operation => operation.addEventListener('click', event => searchOp(event)));

function addNombre(event) {
    if (firstNombre) {
        nombreUn += event.target.textContent;
        screen.value = nombreUn;
    } else {
        nombreDeux += event.target.textContent;
        screen.value = nombreDeux;
    }
}

function searchOp(event) {
    switch(event.target.getAttribute('valeur')) {
        case 'DEL':
            sup();
            break;
        case 'CE':
            clear();
            break;
        case 'RES':
            resultat();
            break;
        default :
            if (firstNombre) {
                op += event.target.getAttribute('valeur');
                firstNombre = false;
                screen.value = event.target.textContent;
            } else {
                executeOp();
                op += event.target.getAttribute('valeur');
            }
    }
}
function sup() {
    if(firstNombre) {
        nombreUn = nombreUn.substring(0, nombreUn.length - 1);
        screen.value = nombreUn;
    } else {
        nombreDeux = nombreDeux.substring(0, nombreDeux.length - 1);
        screen.value = nombreDeux;
    }
}
function clear() {
    screen.value = "";
}
function resultat() {
    switch(op) {
        case "ADD":
            screen.value = parseFloat(nombreUn) + parseFloat(nombreDeux);
            vide();
            break;
        case "SUB" :
            screen.value = parseFloat(nombreUn) - parseFloat(nombreDeux);
            vide();
            break;
        case "MUL" :
            screen.value = parseFloat(nombreUn) * parseFloat(nombreDeux);
            vide();
            break;
        case "DIV" :
            if (parseFloat(nombreDeux) === 0) {
                vide();
                return screen.value = "ERR";
            }
            screen.value = parseFloat(nombreUn) / parseFloat(nombreDeux);
            vide();
            break;
    }
}
function vide() {
    nombreUn = "";
    nombreDeux = "";
    op = "";
    firstNombre = true;
}
})