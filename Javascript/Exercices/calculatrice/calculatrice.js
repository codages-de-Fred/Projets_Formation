document.addEventListener('DOMContentLoaded', () => {
    let nombreUn = "";
        let operation;
        let nombreDeux = "";

    function remiseAZero() {
        nombreUn = "";
        operation;
        nombreDeux = "";
    }

    let cases = Array.from(document.getElementsByClassName('cases'));
    let resultat  = document.getElementById('resultat');

    cases.forEach(c => c.addEventListener('click', (event) => {
        nombreUn += c.textContent.toString();
        resultat.textContent = nombreUn;
        if (c.textContent === ".") {
            countFloat++;
        }
        if (c.textContent === "x" || c.textContent === "/" || c.textContent === "-" || c.textContent === "+") {
            if (c.textContent !== "x" || c.textContent !== "/" || c.textContent !== "-" || c.textContent !== "+") {
                operation = c.textContent;
                resultat.textContent = operation;
                cases.forEach(ch => ch.addEventListener('click', () => {
                    nombreDeux += ch.textContent.toString();
                    resultat.textContent = nombreDeux;
                    if (ch.textContent === "=") {
                        
                        let intNombreUn = parseFloat(nombreUn);
                        let intNombreDeux = parseFloat(nombreDeux);
                        
                        if (operation === "x") {
                            resultat.textContent = intNombreUn * intNombreDeux;
                            remiseAZero();
                        } else if (operation === "/") {
                            resultat.textContent = intNombreUn / intNombreDeux;
                            remiseAZero();
                        } else if (operation === "+") {
                            resultat.textContent = intNombreUn + intNombreDeux;
                            remiseAZero();
                        } else if (operation === "-") {
                            resultat.textContent = intNombreUn - intNombreDeux;
                            remiseAZero();
                        }
                        
                    }
                }))
            }
        }
    }))
})