var array = [];
var arrayLength = 100; 

// populates range from which numbers for the array are drawn
var highEnd = 400;                         // max value 
var range = [];
for (var i = 1; i <= highEnd; i++) {
  range.push(i);
}

// populates array with random numbers from the range
i = 0;
while (i <= arrayLength - 1) {
  var newNum = range[Math.floor(Math.random() * highEnd)];
  if (array.indexOf(newNum) == -1) {
     array.push(newNum); 
    i += 1;
  }
};

// =============== BUBBLE SORTING (ascending order) =============== //				
var bubbleSort = function (input) {
  var counter = 0;
  for (i = 0; i < input.length; i++, counter++) {
    var j; //index
    for (j = 0; j < input.length - 1; j++) {
      if (input[j] > input[j+1]) {
        swapping = input[j+1];
        input[j+1] = input[j];
        input[j] = swapping;
      }
    }
  }
  return input;
};

// ======================== BINARY SEARCH ======================== //

bubbleSort(array); // destructive sorting!
var arrayCopy = array.slice(0); 

var guess = range[Math.floor(Math.random() * highEnd)];			
// var guess = 398;            // test for out of range input

var binarySearch = function (array, guess) {
  // initialize Search by setting searchStatus - search will stop with searchStatus = "stop"
  var searchStatus = "continue";
  
  // *** GENERIC response generator -- list of possible returns by this function 
  var response = function (result) {
    if (result === "result-include") {
      return guess + " exists in this array at index: " + arrayCopy.indexOf(guess); //FIX
    } else if (result === "result-exclude") {
      return "the input does NOT exist in this array.";    
    } else if (result === "result-invalid") {
      return "not my fault";     
    } else {
      return "I messed up";
    }
  };
  var invalid = "input is outside of this array's range, please try again.";
  
  // *** GENERIC mid-point generator
  var getMiddleNumber = function(array) {
    if (array.length > 2) {
      var middleNumber = array[Math.floor((array.length - 1) / 2)];
      return middleNumber;
    } else {
      return null;
    }
  };
  
  // *** GENERIC reducer function - determine which side of half to erase
  var getDirection = function (middle) {
    if (guess < middle) {
      return "right";
    } else if (guess > middle) {
      return "left";
    } else {
      return "STOP";
    }
  };
  // *** GENERIC array reducer
  var halvingArray = function (array) {
    // array attributes
    var firstIndex = 0;
    var lastIndex = array.length - 1;
    var arrayLength = array.length;
    var middle = getMiddleNumber(array);
    var middleNumIndex = array.indexOf(middle);
    var direction = getDirection(middle);
   
    // begin evaluation
    if (arrayLength >= 2) {
      if (guess === middle || (guess === firstIndex || guess === lastIndex)) {
        searchStatus = "stop";
        return "result-include";
      } else {
        if (direction === "right") {
          array.splice(middleNumIndex + 1, arrayLength / 2);
          console.log(array);
          return array;
        } else if (direction === "left") {
          array.splice(0, arrayLength / 2);
          console.log(array);
          return array;
        } else {
          searchStatus = "stop";
          return "what the bleep happened";
        } 
      }
    } else {
      searchStatus = "stop";
      return "result-exclude";
    }
  };

  // Range checker - will only excecute if input is within range
  if (guess < array[0] || guess > array[array.length - 1]) {
    searchStatus = "stop";
    return "result-invalid"; 
  } else {    
    while (searchStatus == "continue") {
      halvingArray(array);
    } 
    return response(halvingArray(array));
  }
};
console.log(guess + "--" + bubbleSort(array));
console.log(binarySearch(array, guess));