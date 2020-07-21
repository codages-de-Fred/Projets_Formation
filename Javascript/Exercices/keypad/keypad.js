document.addEventListener('DOMContentLoaded', () => {
    let cases = [" ", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    let keypad = document.getElementById('keypad');
    let code = document.getElementById('code');
    
    let affichage = "";
    let nombre = 12;
    for(let i=0; i < 12; i++) {
        let key = document.createElement('div');
        key.className = "allKeys";

        let numeroChoisi = Math.floor(Math.random() * Math.floor(nombre));

        key.textContent = cases[numeroChoisi];
        keypad.appendChild(key);
        cases.splice(numeroChoisi, 1);
        nombre--;
        
    }

    let allKeys = Array.from(document.getElementsByClassName('allKeys'));
    allKeys.forEach(oneKey => oneKey.addEventListener('click', () => {
        console.log(affichage);
        affichage += oneKey.textContent;
        code.textContent = affichage;
        setTimeout(verif, 300);
        function verif() {
           if (verifCode(affichage)) {
                affichage = "";
            } 
        }
    }))
})
function verifCode(affichage) {
    let vide = 0;
    if (affichage.length > 5) {
        for(let i=0; i < affichage.length; i++) {
            console.log(affichage[i])
            if (affichage[i] === " ") {
                vide++;
            }
        }
        console.log(affichage.length)
        if (vide > 0) {
            alert("Erreur : vous avez entrer des espaces");
            return true;
        } else {
            alert('ok');
            return true;
        }
    } else {
        return false;
    }
}
