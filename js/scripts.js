//numbers with a 0 are replaced with "Beep!"
//numbers that contain a 1 are replaced with "Boop!"
//numbers that are divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

//back-end logic:
  // var numberArray = ['0', '1', '3'];
  //var inputNumber = function(userInput) {
  // for (var index = 0;) index < inputNumber.length; index +=) {
  //alert('');
//}


  var inputNumber = function(userInput) {
  var beep = ['0'];
  var boop = ['1'];
  // var noCanDo = ['% 3'];
    if (userInput.includes('0')) {
      alert("Beep!");
    }

    if (userInput.includes('1')) {
      alert("Boop!")
    }
    //is divisible by 3
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
