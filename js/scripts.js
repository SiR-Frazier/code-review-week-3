//numbers with a 0 are replaced with "Beep!"
//numbers that contain a 1 are replaced with "Boop!"
//numbers that are divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

//back-end logic:

  var inputNumber = function(userInput) {
    // var numberArray = ['0', '1']
  var beep = ['0'];
  var boop = ['1'];
  // var noCanDo = ['% 3'];
    if (userInput )
    if (userInput % 3 === true) {
      alert("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
    }
  }

//fron-end logic
$(document).ready(function() {
  $("form#compute").submit(function(event) {
      event.preventDefault();
      var userInput = parseInt$("input#inputNumber").val();
      if (inputNumber(userInput)) {

      }
      $("#inputNumber").text()
  });
});
