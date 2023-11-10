//document.querySelector("h1").style.color = "red";
$("h1").css("color","red");

$(document).keypress(function(event){
    $("h1").text(event.key);
    $("input").text("");
});
