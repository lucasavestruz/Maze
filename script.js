const port = document.querySelector("#gate");
const portal = document.querySelector(".clipPath-overgang");
const body = document.querySelector("body");

/*
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
*/




const maze_container = document.getElementById("maze");

for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        const elm = document.createElement("div");
        elm.classList.add("r" + i);
        elm.classList.add("c" + j);
        maze_container.appendChild(elm);
    }
}

const movableElement = document.getElementById('prikk');

let positionX = 1133;
let positionY = 150;
const moveSpeed = 60;

const row = positionY / moveSpeed;
const col = positionX / moveSpeed;

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            positionY -= moveSpeed;
            break;
        case 'ArrowDown':
            positionY += moveSpeed;
            break;
        case 'ArrowLeft':
            positionX -= moveSpeed;
            break;
        case 'ArrowRight':
            positionX += moveSpeed;
            break;
    }
    movableElement.style.left = positionX + 'px';
    movableElement.style.top = positionY + 'px';
});





let meny = document.getElementById("meny");

function myFunction() {
    meny.classList.add("show");
}

function myFunctionX() {
    meny.classList.remove("show");
}



let prikk = document.getElementById("prikk");
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");
let purple = document.getElementById("purple");
let brown = document.getElementById("brown");
let grey = document.getElementById("grey");
let pink = document.getElementById("pink");
let black = document.getElementById("black");

function myFunctionRed() {
    prikk.style.backgroundColor = "red";
    prikk.innerHTML = "";

    red.style.border = "3px solid black";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";

    circle.style.backgroundColor = "red";
    square.style.backgroundColor = "red";
    ellipse.style.backgroundColor = "red";
    roundedSquare.style.backgroundColor = "red";
}

function myFunctionBlue() {
    prikk.style.backgroundColor = "blue";
    prikk.innerHTML = "";

    blue.style.border = "3px solid black";
    red.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";

    circle.style.backgroundColor = "blue";
    square.style.backgroundColor = "blue";
    ellipse.style.backgroundColor = "blue";
    roundedSquare.style.backgroundColor = "blue";




}

function myFunctionGreen() {
    prikk.style.backgroundColor = "teal";
    prikk.innerHTML = "";

    green.style.border = "3px solid black";
    red.style.border = "none";
    blue.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";

    circle.style.backgroundColor = "teal";
    square.style.backgroundColor = "teal";
    ellipse.style.backgroundColor = "teal";
    roundedSquare.style.backgroundColor = "teal";
}

function myFunctionYellow() {
    prikk.style.backgroundColor = "yellow";
    prikk.innerHTML = "";

    yellow.style.border = "3px solid black";
    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";

    circle.style.backgroundColor = "yellow";
    square.style.backgroundColor = "yellow";
    ellipse.style.backgroundColor = "yellow";
    roundedSquare.style.backgroundColor = "yellow";
}

function myFunctionPurple() {
    prikk.style.backgroundColor = "purple";
    prikk.innerHTML = "";

    purple.style.border = "3px solid black";
    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";

    circle.style.backgroundColor = "purple";
    square.style.backgroundColor = "purple";
    ellipse.style.backgroundColor = "purple";
    roundedSquare.style.backgroundColor = "purple";
}

function myFunctionBrown() {
    prikk.style.backgroundColor = "peru";
    prikk.innerHTML = "";

    brown.style.border = "3px solid black";
    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";

    circle.style.backgroundColor = "peru";
    square.style.backgroundColor = "peru";
    ellipse.style.backgroundColor = "peru";
    roundedSquare.style.backgroundColor = "peru";
}

function myFunctionGrey() {
    prikk.style.backgroundColor = "grey";
    prikk.innerHTML = "";

    grey.style.border = "3px solid black";
    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";

    circle.style.backgroundColor = "grey";
    square.style.backgroundColor = "grey";
    ellipse.style.backgroundColor = "grey";
    roundedSquare.style.backgroundColor = "grey";
}

function myFunctionPink() {
    prikk.style.backgroundColor = "pink";
    prikk.innerHTML = "";

    pink.style.border = "3px solid black";
    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    black.style.border = "none";

    circle.style.backgroundColor = "pink";
    square.style.backgroundColor = "pink";
    ellipse.style.backgroundColor = "pink";
    roundedSquare.style.backgroundColor = "pink";
}

function myFunctionBlack() {
    prikk.style.backgroundColor = "black";
    prikk.innerHTML = "";

    black.style.border = "3px solid white";
    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";

    circle.style.backgroundColor = "black";
    square.style.backgroundColor = "black";
    ellipse.style.backgroundColor = "black";
    roundedSquare.style.backgroundColor = "black";

    
}


let circle = document.getElementById("circle");
let square = document.getElementById("square");
let ellipse = document.getElementById("ellipse");
let roundedSquare = document.getElementById("roundedSquare");

function myFunctionCircle() {
    prikk.style.borderRadius = "50%";
    prikk.innerHTML = "";

    circle.style.border = "3px solid black";
    square.style.border = "none";
    ellipse.style.border = "none";
    roundedSquare.style.border = "none";
}

function myFunctionSquare() {
    prikk.style.borderRadius = "0";
    prikk.innerHTML = "";

    square.style.border = "3px solid black";
    circle.style.border = "none";
    ellipse.style.border = "none";
    roundedSquare.style.border = "none";
}

function myFunctionEllipse() {
    prikk.style.borderRadius = "50% 30%";
    prikk.innerHTML = "";

    ellipse.style.border = "3px solid black";
    circle.style.border = "none";
    square.style.border = "none";
    roundedSquare.style.border = "none";
}

function myFunctionRoundedSquare() {
    prikk.style.borderRadius = "15px";
    prikk.innerHTML = "";
    

    roundedSquare.style.border = "3px solid black";
    circle.style.border = "none";
    square.style.border = "none";
    ellipse.style.border = "none";
}

function myFunctionEmoji1() {

    prikk.style.fontSize = "40px";
    prikk.innerHTML = "👳🏿‍♂️";
    prikk.style.backgroundColor = "transparent";
    circle.style.border = "none";
    square.style.border = "none";
    ellipse.style.border = "none";
    roundedSquare.style.border = "none";

    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";
    
}

function myFunctionEmoji2() {
    prikk.style.fontSize = "40px";
    prikk.innerHTML = "👨🏿‍🦽";
    prikk.style.backgroundColor = "transparent";
    circle.style.border = "none";
    square.style.border = "none";
    ellipse.style.border = "none";
    roundedSquare.style.border = "none";

    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";
}

function myFunctionEmoji3() {
    prikk.style.fontSize = "40px";
    prikk.innerHTML = "🦧";
    prikk.style.backgroundColor = "transparent";
    circle.style.border = "none";
    square.style.border = "none";
    ellipse.style.border = "none";
    roundedSquare.style.border = "none";

    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";
}

function myFunctionEmoji4() {
    prikk.style.fontSize = "40px";
    prikk.innerHTML = "🤪";
    prikk.style.backgroundColor = "transparent";
    circle.style.border = "none";
    square.style.border = "none";
    ellipse.style.border = "none";
    roundedSquare.style.border = "none";

    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";
}

function myFunctionEmoji5() {   
    prikk.style.fontSize = "40px";
    prikk.innerHTML = "🧑🏿‍🦰";
    prikk.style.backgroundColor = "transparent";
    circle.style.border = "none";
    square.style.border = "none";
    ellipse.style.border = "none";
    roundedSquare.style.border = "none";

    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";
}

