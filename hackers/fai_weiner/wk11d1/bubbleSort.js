// hardcoded input
var input = [89, 45, 53, 78, 2, 35, -4, 88, 39];

// randomized input
var highEnd = 30;                         // max value in input2
var inputLength = 10;                     // amount of values in input2
var range = [];
for (var i = 0; i <= highEnd; i++) {
    range.push(i);
}

var input2 = [];
for (var i = 0; i <= inputLength; i++) {
  var newNum = range[Math.floor(Math.random() * highEnd)];
  if (input2.indexOf(newNum) <= 0) {
     input2.push(newNum); 
  }
}

var i;                                    //iteration

// SORTING
var bubbleSort = function (input) {
  var counter = 0;
  for (i=0; i < input.length; i++, counter++) {
    var j; //index
    for (j=0; j < input.length - 1; j++) {
      if (input[j] > input[j+1]) {
        swapping = input[j+1];
        input[j+1] = input[j];
        input[j] = swapping;
      }
    }
  }
  return input;
};


var output = bubbleSort(input);
console.log(output);

var output = bubbleSort(input2);
console.log(output);