// réduit l'opacité
let plein  = document.getElementById("test");
plein.style.backgroundColor = "rgba(0,0,0,1)";
plein.addEventListener('mouseover', anime);
let opac = 1;
function anime() {
  setInterval(change, 100);   
}
function change() {
    opac = opac - 0.05;
    if(opac > 0) {
        return plein.style.backgroundColor = "rgba(0,0,0,"+ opac+")";
    } else if (opac === 0){
        clearInterval();
    }
}

// animation du cercle
let grad = document.getElementById("gradient");
let white = 0;
let yellow = 0;
let black = 100;
function animeGrad() {
    setInterval(changeGrad, 100);
}
function changeGrad() {
    white = white + 2.5;
    yellow += 2.5;
    black -= 2.5;
    if (white < 50) {
        grad.style.backgroundImage = "radial-gradient(white "+white+"%, yellow "+yellow+"%, black "+black+"%)";
    } else if (white > 50 && white < 80) {
        grad.style.backgroundImage = "radial-gradient(white "+white+"%, black "+black+"%)";
    } else if (white > 80 ) {
        grad.style.backgroundImage ="none";
        grad.style.backgroundColor = "white";
    } else if (white > 90) {
        clearInterval();
    }
}
animeGrad();
function colorwhite() {
    grad.style.backgroundColor = "white";
}


// rotation
let rota = document.getElementById("bleu");
let un = document.getElementById("un");
let deux = document.getElementById("deux");
let trois = document.getElementById("trois");
let quatre = document.getElementById("quatre");
let cinq = document.getElementById("cinq");
let six = document.getElementById("six");
function time() {
    setInterval(rotation, 100);
}
let xUn = 0;
let yUn = 0;
let xDeux = 0;
let yDeux = 0;
let yCinq = 0;
let ySix = 0;
let degres = 0;
function rotation() {
    xUn = xUn - 2.8;
    xDeux += 2.8;
    yUn = yUn - 2.8;
    yDeux += 2.8;
    degres += 10;
    if (degres < 730) {
        rota.style.transform = "rotate("+degres+"deg)";
        un.style.transform = "translate("+xUn+"px,"+yDeux+"px)";
        deux.style.transform = "translate("+xDeux+"px,"+yUn+"px)";
        trois.style.transform = "translateX("+xUn+"px)";
        quatre.style.transform = "translateX("+xDeux+"px)";
        cinq.style.transform = "translate("+xUn+"px,"+yUn+"px)";
        six.style.transform = "translate("+xDeux+"px,"+yDeux+"px)";
    } else if (degres > 730) {
        clearInterval();
    }
}
time();
