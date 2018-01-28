//back-end logic:
function beepBoop(userInput) {
  var inputArray = [];
  for (var i = 1; i <= userInput; i ++) {
    if (i % 3 === 0) {
    inputArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
  } else if (i.toString().includes(0)) {
  	inputArray.push("Beep");
  } else if (i.toString().includes(1)) {
  	inputArray.push("Boop");
  } else {
  	inputArray.push(i);
  }
  }
  return inputArray;
}

//fron-end logic:

$(document).ready(function() {
  $("form#compute").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#inputNumber").val());
    var result = beepBoop(userInput);
    var output = beepBoop();
    $("#result").text(beepBoop(userInput));
  });
});
