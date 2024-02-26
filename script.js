const port = document.querySelector("#gate");
const portal = document.querySelector(".clipPath-overgang");
const body = document.querySelector("body");

port.addEventListener("click", () => {
    // Vi trenger ikke å hente en verdi fra et input-element for denne effekten,
    // så den linjen med fargeOvergang er fjernet.

    // Vi setter bakgrunnsfargen på section og portal til svart,
    // men det er egentlig ikke nødvendig å endre på portal sin bakgrunn.
    // Istedenfor skal vi utvide clip-path på portal-elementet for å dekke hele skjermen.
    portal.classList.add("aktiv");

    // Siden vi ønsker at hele siden skal gradvis bli svart,
    // kan det være lurt å sette en tidsforsinkelse på endringen av bakgrunnsfargen til selve body,
    // slik at det ser ut som om den svarte fargen sprer seg fra porten.
    setTimeout(() => {
        body.style.backgroundColor = "black";
    }, 1200); // Juster tiden etter hvor lang tid animasjonen tar.
});
