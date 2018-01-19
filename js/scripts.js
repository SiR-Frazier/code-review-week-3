//numbers with a 0 are replaced with "Beep!"
//numbers that contain a 1 are replaced with "Boop!"
//numbers that are divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

//back-end logic
var userNumber = function(userInput) {
var beep = ['0'];
var boop = ['1'];

  if (userNumber.includes(0)) {
    return ("Beep");
  if (userNumber.includes(1)) {
    alert("Boop");
    }
  if (userNumber / 3) {
    return true
  } else {
    return  false
  }

  };


//fron-end logic
$(document).ready(function() {
  $("form#compute").submit(function(event) {
      event.preventDefault();
      var userInput = parseInt$("input#inputNumber").val();
      if (userNumber(userInput)) {

      }
  });
});
