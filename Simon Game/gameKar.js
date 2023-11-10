var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern =[];
var level = 0;
var gameStarted = false

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4 );
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);  
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level "+level);
}

$(".btn").on("click",function(){
var userChosenColour = this.id; // $(this).attr("id")
userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);
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

$(document).on("keypress" , function(event){
    if(gameStarted === true){
        nextSequence();
        gameStarted = false;
        $("h1").text("Level 0");
       }
});
