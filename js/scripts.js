//numbers with a 0 are replaced with "Beep!"
//numbers that contain a 1 are replaced with "Boop!"
//numbers that are divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

//back-end logic
  var inputNumber = function(userInput) {
    var numberArray = ['0', '1']
    if (userInput === index[0]) {
      return string("beep");
    }
  }
// if input number contains 0,
//  then replace every digit with "beep" ;
// else
//  nothing happens.

// if input number contains 1,
//  then replace every digit with boop;
// else,
//  nothing happens.

// if input number is divisible by 3,
//  then show message "I'm sorry, Dave..."



// var userNumber = function(userInput) {
// var beep = ['0'];
// var boop = ['1'];
//
//   if (userNumber.includes(
//     return ("Beep");
//
//   if (userNumber.includes('0')) {
//     alert("Boop");
//     }
//   if (userNumber / 3) {
//     return true
//   } else {
//     return  false
//   }
//
//   };


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
