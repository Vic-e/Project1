class Player{
  constructor(title, score){
  this.title = title;
  this.score = 0;
  }

    characterUp(){
    this.score += 5
    }

    characterDown(){
    this.score -= 5
    }

}


const startOverBtn = document.querySelector("#startOver")
startOverBtn.addEventListener("click", ()=>{
  location.reload();
})


let p1 = new Player("PLAYER 1", 0)
let p2 = new Player("PLAYER 2", 0)

function setPlayer(){
  const whoDaPlaya = document.querySelector("#playa");
  whoDaPlaya.innerHTML = `${p1.title}`;
  const whoDaPlayaTwo = document.querySelector("#playa2");
  whoDaPlayaTwo.innerHTML = `${p2.title}`;
}

setPlayer();

//declare Lili jumping variables
const del = document.querySelector("#ljump");
const deluxe = document.querySelector("#ljumpup");

//declare a variable for button
const jumpBtn = document.querySelector("#froggy")
const jumpBtnTwo = document.querySelector("#froggy2")

//declare jumprope variables
let ropeUp = document.querySelector("#topjump");
let ropeDown = document.querySelector("#botjump");


function modeOne(){
let rando = 0
function jumpRope(){
  if(rando %2 == 0){
    ropeUp.style.visibility = "hidden"
    ropeDown.style.visibility = "visible"
  }
  else {
    ropeDown.style.visibility = "hidden"
    ropeUp.style.visibility = "visible"
  }
  rando++;
  pointCounter()
  setScore()
    if(rando >= 21){
    clearInterval(boss);
    console.log(`rando: ${rando}`)
    }
}

const boss = setInterval(jumpRope, 900)


jumpBtn.addEventListener('click', function changeImage(){
    del.style.visibility = "hidden";
    deluxe.style.visibility = "visible";
    setTimeout(() => {
      deluxe.style.visibility = "hidden";
      del.style.visibility = "visible";
    }
      ,680)
});
}


function modeTwo(){
let randoTwo = 0
function jumpRope(){
  if(randoTwo %2 == 0){
    ropeUp.style.visibility = "hidden"
    ropeDown.style.visibility = "visible"
  }
  else {
    ropeDown.style.visibility = "hidden"
    ropeUp.style.visibility = "visible"
  }
  randoTwo++;
  pointCounter()
  setScore()
  if(randoTwo >= 21){
  clearInterval(bossTwo);
  console.log(`randoTwo: ${randoTwo}`)
  }
}

const bossTwo = setInterval(jumpRope, 450);

jumpBtn.addEventListener('click', function changeImage(){
    del.style.visibility = "hidden";
    deluxe.style.visibility = "visible";
    setTimeout(() => {
      deluxe.style.visibility = "hidden";
      del.style.visibility = "visible";
    }
      ,340)
});
}

function pointCounter(){
  if(deluxe.style.visibility === "visible" && ropeDown.style.visibility === "visible"){
    p1.characterUp();
  }
  else if(del.style.visibility === "visible" && ropeDown.style.visibility === "visible"){
    p1.characterDown();
  }
}

function setScore(){
  const daNumba= document.querySelector("#number1");
  daNumba.innerHTML = `SCORE: ${p1.score}`;
}



// function gameOrder(){
setTimeout(modeOne,3000)
setTimeout(modeTwo,24000)
setTimeout(nextTurnStart,33000)
setTimeout(modeThree,35400)
setTimeout(modeFour,55900)
setTimeout(nameWinner,80000);
// gameOrder()
//
//

const dede = document.querySelector("#djump");
const dedeluxe = document.querySelector("#djumpup");

//declare jumprope variables
let ropeUp2 = document.querySelector("#topjump");
let ropeDown2 = document.querySelector("#botjump");

function pointCounterTwo(){
  if(dedeluxe.style.visibility === "visible" && ropeDown2.style.visibility === "visible"){
    p2.characterUp();
  }
  else if(dede.style.visibility === "visible" && ropeDown2.style.visibility === "visible"){
    p2.characterDown();
  }
}

function nextTurnStart(){
const announceTurn = document.querySelector("div #readySetGo");
announceTurn.setAttribute("id", "readySetGoTwo")
}

function modeThree(){
const liliVis = document.querySelector("#lili").children[1]
liliVis.remove()
const liliVis2 = document.querySelector("#lili").children[1]
liliVis2.remove()
const dedeVis = document.querySelector("#lili").children[1]
dedeVis.style.visibility = "visible"

let randoThree = 0
function jumpRope(){
  if(randoThree %2 == 0){
    ropeUp2.style.visibility = "hidden"
    ropeDown2.style.visibility = "visible"
  }
  else {
    ropeDown2.style.visibility = "hidden"
    ropeUp2.style.visibility = "visible"
  }
  randoThree++;
  pointCounterTwo();
  setScore2();
    if(randoThree >= 21){
    clearInterval(bossThree);
      }
}

const bossThree = setInterval(jumpRope, 900)


jumpBtnTwo.addEventListener('click', function changeImage(){
    dede.style.visibility = "hidden";
    dedeluxe.style.visibility = "visible";
    setTimeout(() => {
      dedeluxe.style.visibility = "hidden";
      dede.style.visibility = "visible";
    }
      ,600)
});
}

function modeFour(){
let randoFour = 0
function jumpRope(){
  if(randoFour %2 == 0){
    ropeUp2.style.visibility = "hidden"
    ropeDown2.style.visibility = "visible"
  }
  else {
    ropeDown2.style.visibility = "hidden"
    ropeUp2.style.visibility = "visible"
  }
  randoFour++;
  pointCounterTwo();
  setScore2();
  if(randoFour >= 21){
  clearInterval(bossFour);
  }
}

const bossFour = setInterval(jumpRope, 1350);



jumpBtnTwo.addEventListener('click', function changeImage(){
    dede.style.visibility = "hidden";
    dedeluxe.style.visibility = "visible";
    setTimeout(() => {
      dedeluxe.style.visibility = "hidden";
      dede.style.visibility = "visible";
    }
      ,340)
});
}


function setScore2(){
  const daOthaNumba= document.querySelector("#number2");
  daOthaNumba.innerHTML = `SCORE: ${p2.score}`;
}

function nameWinner(){
  const winnerWinner = document.querySelector("#announcement");
 if(p1.score === p2.score){
    winnerWinner.innerHTML = `You Tie`
 }
 else if(p1.score >= p2.score){
   winnerWinner.innerHTML = `Player 1 wins!`
 }
 else if(p2.score >= p1.score){
   winnerWinner.innerHTML = `Player 2 wins!`
 }
}
