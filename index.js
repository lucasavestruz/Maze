const port = document.querySelector("#gate");
const portal = document.querySelector(".clipPath-overgang");
const body = document.querySelector("body");

port.addEventListener("click", () => {   
    portal.classList.add("aktiv");
    const body_portal=document.querySelectorAll(".body_portal")
    const body_maze=document.querySelectorAll(".body_maze")
    setTimeout(() => {
        body.style.backgroundColor = "black";
    }, 1200); 

    setTimeout(() => {
        body_portal.style.display = "none";
    }, 1300); 

    setTimeout(() => {
        body_maze.style.display = "block";
    }, 1300); 
})
