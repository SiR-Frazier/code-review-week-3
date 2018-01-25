//back-end logic:

//var output =
  function beepBoop(userInput) {
  var inputArray = [];
  for (var i = 0; i <= userInput; i ++) {
    if (i % 3 === 0) {
      inputArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (i === 1) {
      inputArray.push("Boop!");
    } else if (i === 0) {
      inputArray.push("Beep!")
    } else {
      return inputArray;
    }
    // if (/[0]/).test(index);
    // else if (/[1]/).test(index);
  }
}

//fron-end logic:

$(document).ready(function() {
  var userInput = "";
  $("form#compute").submit(function(event) {
      event.preventDefault();
      userInput = parseInt($("input#inputNumber").val());
      output = $("input#inputNumber").val();
    }
  );
      // $("#inputNumber").text(beepBoop(userInput))
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
