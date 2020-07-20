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
        affichage += oneKey.textContent;
        code.textContent = affichage;
        verifCode(affichage);
        console.log(affichage.length)
    }))
})
function verifCode(affichage) {
    if (affichage.length > 5) {
        for(let i=0; i < code.length; i++) {
            if (code[i] === " ") {
                alert("Erreur : vous avez mis des espaces");
            } else {
                alert("ok");
            }
            affichage = "";
            code.textContent = "";
        }
    }
}