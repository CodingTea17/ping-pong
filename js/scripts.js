$(document).ready(function(){
  $("form#number").submit(function(event){
    event.preventDefault();
    var inputNum = $("#user-input").val();
    alert(inputNum);
  });
});
