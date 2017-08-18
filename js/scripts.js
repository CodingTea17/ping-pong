// Backend Code
var pingPong = function(number){
  for(var i = 1; i <= number; i++){
    $("ul#numbers").append("<li>" + i + "</li>");
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
