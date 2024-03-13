function beregnResultat() {
    let poengsum = 0;

    if (document.querySelector('input[name="q1"]:checked').value === "A") {
        poengsum++;
    }

    if (document.querySelector('input[name="q2"]:checked').value === "D") {
        poengsum++;
    }

    if (document.querySelector('input[name="q3"]:checked').value === "D") {
        poengsum++;
    }

    if (document.querySelector('input[name="q4"]:checked').value === "C") {
        poengsum++;
    }

    if (document.querySelector('input[name="q5"]:checked').value === "D") {
        poengsum++;
    }

    if (document.querySelector('input[name="q6"]:checked').value === "B") {
        poengsum++;
    }

    if (document.querySelector('input[name="q7"]:checked').value === "B") {
        poengsum++;
    }

    if (document.querySelector('input[name="q8"]:checked').value === "D") {
        poengsum++;
    }

    if (document.querySelector('input[name="q9"]:checked').value === "C") {
        poengsum++;
    }

    if (document.querySelector('input[name="q10"]:checked').value === "D") {
        poengsum++;
    }

    visResultat(poengsum);
}

function visResultat(poengsum) {
    const resultatContainer = document.getElementById('resultat');
<<<<<<< Updated upstream
    resultatContainer.innerHTML = `Din poengsum er: ${poengsum} av 5 poeng!`;
    if(poengsum>=4){
    alert("Gratulerer! Du besto quizen med "+poengsum+" poeng!")
    document.querySelector(".body_maze").style.display = "block";
    document.querySelector(".quiz_body").style.display = "none";
    const audio=new Audio("Lyder/KeyCollected.mp3");
        audio.play();
    }
    else{
        resultatContainer.innerHTML = 'Du besto desverre ikke, men prøv på nytt!';
        poengsum=0
    }
}
=======
    resultatContainer.innerHTML = `Din poengsum er: ${poengsum} av 10 poeng!`;
}
>>>>>>> Stashed changes
