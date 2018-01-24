//back-end logic:

var output = function beepBoop(userInput) {
  var userInput = [];
  number.push(userInput);

  for (var index = 0; index < number.length; index ++) {
    if (userInput % 3 === 0) {
      alert("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (userInput === 1) {
      alert("Boop!");
    } else (userInput === 0) {
      alert("Beep!")
    }
  };
};

//fron-end logic:

$(document).ready(function() {
  var userInput = "";
  $("form#compute").submit(function(event) {
      event.preventDefault();
      userInput = parseInt($("input#inputNumber").val());
      output = $("input#inputNumber").val();
      console.log(userInput);
    }
  );
      // $("#inputNumber").text(beepBoop(userInput))
  console.log(beepBoop(userInput))
});

// var includes0 = false;
// var includes1 = false;
// var divisibleByThree = false;
//
// var arrayLength = 0;
//
// function beepBoop(rawInput) {
//
//   if (rawInput % 3 === 0){
//     divisibleByThree = true;
//     return("I'm sorry, Dave. I'm afraid I can't do that.")
//   }
//   else {
//     // create array to hold individual digits from rawInput
//     var inputDigits = rawInput.toString().split('');
//
//     for (var index = 0; index < inputDigits.length; index ++) {
//       if (inputDigits[index] === "0"){
//         includes0 = true;
//       }
//       else if (inputDigits[index] === "1"){
//         includes1 = true;
//       }
//     }
//   }
// }
