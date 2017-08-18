// Backend Code
var pingPong = function(number){
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
}

// Frontend Code
$(document).ready(function(){
  $("form#number").submit(function(event){
    event.preventDefault();
    var inputNum = $("#user-input").val();
    $("#results").show();
    pingPong(inputNum);
  });
});
