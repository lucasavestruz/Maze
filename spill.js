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
}