var [randomNumber1,randomNumber2] = [getRandomNumber(),getRandomNumber()];
document.querySelector(".img1").setAttribute("src",getRandomDiceValue(randomNumber1));
document.querySelector(".img2").setAttribute("src",getRandomDiceValue(randomNumber2));
document.querySelector("h1").textContent=getWinner(randomNumber1,randomNumber2);

function getRandomNumber(){
    return Math.floor(Math.random()*6) +1;
}

function getRandomDiceValue(randomNumbers){
    return "./images/dice" +randomNumbers+".png";
}

function getWinner(randomNumber1,randomNumber2){
    if (randomNumber1 === randomNumber2){
        return "Draw!!!";
    } else if(randomNumber1 > randomNumber2){
        return "⛳️ Player 1 Wins!!!";
    } else {
        return "Player 2 Wins ⛳️ !!!";
    }
}


