var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern =[];
var level = 0;
var gameStarted = true;
var index=0;

function nextSequence(){
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random() * 4 );
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);  
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    console.log("Value of Game Pattern "+gamePattern);
    playSound(randomChosenColour);   
}

$(".btn").on("click",function(){
var userChosenColour = this.id; // $(this).attr("id")
userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);
console.log("Value of user Clicked Pattern "+userClickedPattern);
var checkAnswerValue = checkAnswer(index);
if(checkAnswerValue && userClickedPattern.length === gamePattern.length){
    console.log("Gonna call nextSequence()");
    nextSequence();
    userClickedPattern = [];
    index=0;
}
if(!checkAnswerValue){
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    startOver();
}

});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
} 

function animatePress(currentColour){
$("#"+currentColour).addClass("pressed");
setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
},100);
}

function checkAnswer(index){
     for( i = index;i<userClickedPattern.length;i++){
        if(userClickedPattern[i] === gamePattern[i]){
            console.log("For i - "+i+" Click Pattern " +userClickedPattern[i] + " " +gamePattern[i]);
            index++;
            return true;
        }
    }  
}

$(document).on("keypress" , function(event){
    if(gameStarted === true){
        $("#level-title").text("Level"+level);
        nextSequence();
        gameStarted = false;
        
       }
});

function startOver(){
    level = 0;
    gameStarted = true;
    gamePattern = [];
    userClickedPattern =[];
    $("#level-title").text("Press A Key to Start ");
}