function beregnResultat() {
    let poengsum = 0;

    if (document.querySelector('input[name="q1"]:checked').value === "A") {
        poengsum++;
    }

    if (document.querySelector('input[name="q2"]:checked').value === "B") {
        poengsum++;
    }

    if (document.querySelector('input[name="q3"]:checked').value === "B") {
        poengsum++;
    }

    if (document.querySelector('input[name="q4"]:checked').value === "C") {
        poengsum++;
    }

    if (document.querySelector('input[name="q5"]:checked').value === "D") {
        poengsum++;
    }

    visResultat(poengsum);
}

function visResultat(poengsum) {
    const resultatContainer = document.getElementById('resultat');
    resultatContainer.innerHTML = `Din poengsum er: ${poengsum} av 5 poeng!`;
    if(poengsum>=4){
    alert("Gratulerer! Du besto quizen og fikk "+poengsum+" poeng!")
    document.querySelector(".body_maze").style.display = "block";
    document.querySelector(".quiz_body").style.display = "none";
    const audio=new Audio("Lyder/KeyCollected.mp3");
        audio.play();
    }
    else{
        resultatContainer.innerHTML = 'Du besto desverre ikke';
        poengsum=0
    }
}
