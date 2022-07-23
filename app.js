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

const startBtn = document.querySelector("#start")
startBtn.addEventListener("click", ()=>{
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
    if(rando >= 20){
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
  if(randoTwo >= 20){
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

function seshOne(){
  modeOne();
  modeTwo();
}

function seshTwo(){
  modeThree();
  modeFour();
}
function gameOrder(){
  alert("Lili has a magical rope. Press the jump button to make her jump");
  seshOne();
  setTimeout(seshTwo(), 10000);
  nameWinner();
}

gameOrder()

function pointCounter(){
  if(deluxe.style.visibility === "visible" && ropeDown.style.visibility === "visible"){
    p1.characterUp();
  }
  else if(del.style.visibility === "visible" && ropeDown.style.visibility === "visible"){
    p1.characterDown();
  }
}

function pointCounterTwo(){
  if(deluxe.style.visibility === "visible" && ropeDown.style.visibility === "visible"){
    p2.characterUp();
  }
  else if(del.style.visibility === "visible" && ropeDown.style.visibility === "visible"){
    p2.characterDown();
  }
}

function modeThree(){
let randoThree = 0
function jumpRope(){
  if(randoThree %2 == 0){
    ropeUp.style.visibility = "hidden"
    ropeDown.style.visibility = "visible"
  }
  else {
    ropeDown.style.visibility = "hidden"
    ropeUp.style.visibility = "visible"
  }
  randoThree++;
  pointCounterTwo();
  setScore2();
    if(randoThree >= 20){
    clearInterval(bossThree);
    console.log(`rando3: ${randoThree}`)
    }
}

const bossThree = setInterval(jumpRope, 900)


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

function modeFour(){
let randoFour = 0
function jumpRope(){
  if(randoFour %2 == 0){
    ropeUp.style.visibility = "hidden"
    ropeDown.style.visibility = "visible"
  }
  else {
    ropeDown.style.visibility = "hidden"
    ropeUp.style.visibility = "visible"
  }
  randoFour++;
  pointCounterTwo();
  setScore2();
  if(randoFour >= 20){
  clearInterval(bossFour);
  console.log(`randoFour: ${randoFour}`)
  }
}

const bossFour = setInterval(jumpRope, 450);



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



function setScore(){
  const daNumba= document.querySelector("#number1");
  daNumba.innerHTML = `SCORE: ${p1.score}`;
}

function setScore2(){
  const daOthaNumba= document.querySelector("#number2");
  daOthaNumba.innerHTML = `SCORE: ${p2.score}`;
}

function nameWinner(){
  const winnerWinner = document.querySelector("#announcement");
 if(p1.score > 0 && p1.score === p2.score){
    winnerWinner.innerHTML = `You Tie`
 }
 else if(p1.score > 0 && p1.score >= p2.score){
   winnerWinner.innerHTML = `Player 1 wins!`
 }
 else if(p2.score > 0 && p2.score >= p1.score){
   winnerWinner.innerHTML = `Player 2 wins!`
 }
}
