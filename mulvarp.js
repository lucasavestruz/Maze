const ruter = document.querySelectorAll(".rute")
const mulvarp = document.querySelector(".mulvarp")
const tid = document.querySelector("#tid")
const score = document.querySelector("#score")

let resultat = 0
let treffPos
let aktivTid = 20
let tidId = null

function tilfRute() {
  ruter.forEach(rute => {
    rute.classList.remove("mulvarp")
  })

  let tilfRute = ruter[Math.floor(Math.random() * 9)]
  tilfRute.classList.add("mulvarp")

  treffPos = tilfRute.id
}

ruter.forEach(rute => {
  rute.addEventListener('mousedown', () => {
    if (rute.id == treffPos) {
      resultat++
      score.innerHTML = resultat
      treffPos = null
    }
  })
})

function flyttMulvarp() {
  tidId = setInterval(tilfRute, 500)
}

flyttMulvarp()

function nedtelling() {
  aktivTid--
  tid.innerHTML = aktivTid
 
  if (aktivTid == 0) {
    clearInterval(nedtellingTidId)
    clearInterval(tidId)
    alert('GAME OVER! Din score er: ' + resultat)
  }
 }
 
 let nedtellingTidId = setInterval(nedtelling, 1000)