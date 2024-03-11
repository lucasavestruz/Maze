const kortContainer = document.querySelector(".brett")
// Genererer 8 tilfeldige farger
let farger = [];
for (let i = 0; i < 8; i++) {
    const tilfeldigFarge = "#" + Math.floor(Math.random() * 16777215).toString(16);
    farger.push(tilfeldigFarge);
}

const fargeListe = [...farger, ...farger];
const antallKort = fargeListe.length;
const teller = document.getElementById("teller")

// Spilltilstand
let kortAvdekket = 0;
let aktivtKort = null;
let venterAvslutning = false;
let trekk = 0;

// Lydeffekter
/*
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
*/
function genererKort(farge) {
    const element = document.createElement("div");

    element.classList.add("kort");
    element.setAttribute("info-farge", farge);
    element.setAttribute("info-avdekket", "false");

    element.addEventListener("click", () => {
        const avdekket = element.getAttribute("info-avdekket");
        //spillTrykk()

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

            if (kortAvdekket === antallKort && teller.innerHTML <= 20) {
                alert("Gratulerer! Du løste Memory på " + trekk + " trekk! Du er videre!")

                document.querySelector(".body_maze").style.display = "block";
                document.querySelector(".body_memory").style.display = "none";

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
for (let i = 0; i < antallKort; i++) {
    const indeksFarger = Math.floor(Math.random() * fargeListe.length)
    const farge = fargeListe[indeksFarger];
    const kort = genererKort(farge);

    fargeListe.splice(indeksFarger, 1);
    kortContainer.appendChild(kort);
}

/*
if (teller.innerHTML >= 45 && kortAvdekket === antallKort) {
    const body_maze = document.querySelector(".body_maze");
    const body_memory = document.querySelector(".body_memory");
  
   // if (body_maze && body_memory) { 
     body_maze.style.display = "block";
     body_memory.style.display = "none";
    } else {
      console.error("Elementer ikke funnet."); 
    }
// }*/
