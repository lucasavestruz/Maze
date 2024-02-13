const port = document.querySelector("#gateFlex")
const portal = document.querySelector(".clipPath-overgang");
const section = document.querySelector(".sec");

port.addEventListener("click", () => {
    fargeOvergang = document.querySelector('fargeOvergang-input').value;
    section.style.background = black;
    portal.style.background = black;

}

