const port = document.querySelector("#gate");
const portal = document.querySelector(".clipPath-overgang");
const body = document.querySelector("body");

port.addEventListener("click", () => {   
    portal.classList.add("aktiv");
    setTimeout(() => {
        body.style.backgroundColor = "black";
    }, 1200); 
})
