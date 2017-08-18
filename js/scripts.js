// Backend Code
var pingPong = function(number){
  // isNan checks to see if the user's input is a number
  if (isNaN(number)){
    alert("Please enter a number");
    return false;
  } else {
    for(var i = 1; i <= number; i++){
      if (i % 15 === 0) {
        $("ul#numbers").append("<li>" + "ping-pong" + "</li>");
      } else if (i % 5 === 0) {
        $("ul#numbers").append("<li>" + "pong" + "</li>");
      } else if (i % 3 === 0) {
        $("ul#numbers").append("<li>" + "ping" + "</li>");
      } else {
        $("ul#numbers").append("<li>" + i + "</li>");
      }
    }
    return true;
  }
}

// Frontend Code
$(document).ready(function(){
  $("form#number").submit(function(event){
    event.preventDefault();
    var inputNum = $("#user-input").val();
    $("#numbers").empty();
    if (pingPong(inputNum)){
      $("#results").show();
    } else {
      $("#results").hide();
    }
  });
});
