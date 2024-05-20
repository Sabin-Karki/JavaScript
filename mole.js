
let currMoleTile;
let currPlantTile;
let score=0;
let gameOver=false;
let moleInterval = 1000; // Initial interval for setting the mole
let plantInterval = 2000; // Initial interval for setting the plant
let moleTimer;
let plantTimer;
window.onload = function(){
    setGame();
}

document.getElementById("board").innerHTML = "";
function setGame(){
    //setting up grid for game board
    for(let i=0;i<9;i++){
        //basically created a div here
        let tile=document.createElement("div")
        tile.id=i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
    }
 moleTimer = setInterval(setMole, moleInterval);
    plantTimer = setInterval(setPlant, plantInterval);
}
function getRandomTile(){
    //math.random returns number from 0 and 1 and if multiply 9 it becomes 0 to 9 but rounds down to 0-8
    let num= Math.floor(Math.random()*9);
    return num.toString();
}
function setMole(){
    if(gameOver){
        return;
    }
    if(currMoleTile){
        currMoleTile.innerHTML=""
    }
    let mole=document.createElement("img");
    mole.src="./monty-mole.png";

    let num=getRandomTile();
    if(currPlantTile&&currPlantTile.id == num){
        return;
    }
    currMoleTile=document.getElementById(num);
    currMoleTile.appendChild(mole);
    
}
function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile(){
if(gameOver){
    return;
}
if(this==currMoleTile){
    score+=10;
    document.getElementById("score").innerText=score.toString();//update score
}
else if(this == currPlantTile){
    document.getElementById("score").innerText= "GAME OVER: " + score.toString();
    gameOver=true;
}

}

function resetGame(){
    //reset game logic
   
        score = 0;
        gameOver = false;
        document.getElementById("score").innerText = score.toString();
        document.getElementById("board").innerHTML = ""; // Clear existing tiles
        clearInterval(moleTimer); // Clear previous mole interval
       clearInterval(plantTimer);
        moleInterval = 1000; 
        plantInterval = 2000;
        setGame(); // Restart the game
    
  

}
document.getElementById("resetBtn").addEventListener("click",resetGame);