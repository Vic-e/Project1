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

let p1 = new Player("Player1", 0)
let p2 = new Player("Player2", 0)

function setPlayer(){
  const whoDaPlaya = document.querySelector("#playa");
  whoDaPlaya.innerHTML = `${p1.title}`;
}

setPlayer();

let ropeUp = document.querySelector("#topjump");
let ropeDown = document.querySelector("#botjump");

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
}

setInterval(jumpRope, 900);

const del = document.querySelector("#ljump");
const deluxe = document.querySelector("#ljumpup");

//declare a variable for button
const jumpBtn = document.querySelector("#froggy")


jumpBtn.addEventListener('click', function changeImage(){
    del.style.visibility = "hidden";
    deluxe.style.visibility = "visible";
    setTimeout(() => {
      deluxe.style.visibility = "hidden";
      del.style.visibility = "visible";
    }
      ,680)
});


function pointCounter(){
  if(deluxe.style.visibility === "visible" && ropeDown.style.visibility === "visible"){
    p1.characterUp();
  }
  else if(del.style.visibility === "visible" && ropeDown.style.visibility === "visible"){
    p1.characterDown();
  }
}


function setScore(){
  const daNumba= document.querySelector("#numbers");
  daNumba.innerHTML = `Score: ${p1.score}`;
}

//function nameWinner(){
//   const x document.querySelector("#scoreboard");
//  if(p1.score = p2.score){
//     x.innerHTML = `You Tie`
//  }
//  else if(p1.score => p2.score){
//    x.innerHTML = `Player 1 wins!`
//  }
//  else{
//    x.innerHTML = `Player 2 win!`
//  }
// }
