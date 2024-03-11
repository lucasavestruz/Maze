const kortContainer = document.querySelector(".brett")
// Velger de 8 fargene
let farger = ["#9ECB93", "#FBAF00", "#FFB5C2", "#80A1D4", "#DA2C38", "#FF8427", "#E5DF61", "#FFF9EB"];

const fargeListe = [...farger, ...farger];
const antallKort = fargeListe.length;
const teller = document.getElementById("teller")

// Spilltilstand
let kortAvdekket = 0;
let aktivtKort = null;
let venterAvslutning = false;
let trekk = 0;

// Lydeffekter
function spillTrykk() {
    let trykk = new Audio('lydeffekter/trykk.mp3');
    trykk.play();
}

function spillFeil() {
    let feil = new Audio('lydeffekter/feil.mp3');
    feil.play();
}

function spillRiktig() {
    let riktig = new Audio('lydeffekter/riktig.mp3');
    riktig.play();
}

function spillSeier() {
    let seier = new Audio('lydeffekter/riktig.mp3');
    seier.play();
}

function genererKort(farge) {
    const element = document.createElement("div");

    element.classList.add("kort");
    element.setAttribute("info-farge", farge);
    element.setAttribute("info-avdekket", "false");
    
    element.addEventListener("click", () => {
        const avdekket = element.getAttribute("info-avdekket");
        spillTrykk()

        if (
            venterAvslutning
            || avdekket === "true"
            || element === aktivtKort
        ) {
            return;
        }
        
        element.style.backgroundColor = farge;
        
        if (!aktivtKort) {
            aktivtKort = element;
            return;
        }

        const fargeMatch = aktivtKort.getAttribute("info-farge");
        trekk += 1;
        teller.innerHTML = trekk

        if (fargeMatch == farge) {
            aktivtKort.setAttribute("info-avdekket", "true");
            element.setAttribute("info-avdekket", "true");
            

            aktivtKort = null;
            venterAvslutning = false;
            kortAvdekket += 2;
            
            if (kortAvdekket === antallKort) {
                alert("Gratulerer! Du løste spillet på "+ trekk + " trekk! Last inn på nytt for å spille igjen.")
                spillSeier()
            }

            return;
        
            
        }

        venterAvslutning = true;

        
        setTimeout(() => {
            element.style.backgroundColor = null;
            aktivtKort.style.backgroundColor = null;

            venterAvslutning = false
            aktivtKort = null
        }, 1000);
        
    })
    
    return element;
    
}

// Genererer kortene med JS
for (let i = 0; i < antallKort; i ++) {
    const indeksFarger = Math.floor(Math.random() * fargeListe.length)
    const farge = fargeListe[indeksFarger];
    const kort = genererKort(farge);

    fargeListe.splice(indeksFarger, 1);
    kortContainer.appendChild(kort);
}

//export { teller, kortAvdekket, antallKort };