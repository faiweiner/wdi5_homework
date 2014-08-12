// NETWORK hash containing each line's stations within an array
var network = {
  line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
  lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
};

// F1: Function to get user input
var getInput = function(message, value) {
  var input = window.prompt(message, value);
  return input;
};

// F2: Transform line input into a variable that matches lines within network
var transformLine = function(line) {
  if (line === "6") {
    return line = "line6"
  } else if (line === "L") {
    return line = "lineL"
  } else if (line === "N") {
    return line = "lineN"
  } else {
    alert("ERROR!")
  };
};

// LINES-C1: Check if start and stop stations are on the same line, spits out "lineCount"
var lineCount = function() {
  if (startLine === stopLine) {
    return 1;
  } else if (startLine !== stopLine) {
    return 2;
  };
};

var legAnalysis = function () {
  if (lineCount() === 1) {
    if (startIndex < stopIndex) {
      return "upline";
    } else {
      return "downline";
    };
  } else if (lineCount() > 1 ) {
    // leg 1
    if (startIndex < unionIndex(startLine)) {
      var leg1 = "upline THEN";
    } else {
      var leg1 = "downline THEN";
    };
    // leg 2
    if (unionIndex(stopLine) > stopIndex) {
      var leg2 = "... downline.";
    } else {
      var leg2 = "... upline.";
    };
    // legs combined
    return leg1 + leg2;
  };
};

// STATIONS-C1: Function to get index automatically, DO NOT CALL ON THIS FUNCTION INDEPENDENTLY!
var getIndex = function(line, station) {
  var index = network[line].indexOf(station);
  return index;
};

var unionIndex = function(line) {
  var index = network[line].indexOf("Union Square");
  return index;
};

// Function creates an array copy with the full list of a given line's stations; reverse determines succession
var stopsArray = function (line, reverse) {
  if (reverse === true) {
    console.log("I'm about to flip this shit and reverse it.");
    var journey = network[line].reverse();
  } else {
    console.log("I love this easy peasy no flippidy.");
    var journey = network[line]; 
  };
  console.log(journey);
  return journey;
};

var resultsInEnglish = function(i) {
  console.log("There are " + i.length + " stop(s) between " + startStation + " and " + stopStation + ".");
  console.log("Your journey: " + i)
};

var journeyArray = function(journey1, journey2) {
  if (journey2 === undefined) {
    for (i = 0; i < journey1.length; i++) {
      journey
    }
    console.log("Your journey: " + journey1);
  } else {
    console.log("Your journey: plus more" + journey1);
  };
};

var getResults = function() {
  if (legAnalysis() === "upline") {
    var journey1 = stopsArray(startLine, false).slice(startIndex + 1, stopIndex + 1);
    resultsInEnglish(journey1);
    console.log("Your journey: " + journey1);

  } else if (legAnalysis() === "downline" ) {
    var journey1 = stopsArray(startLine, true).slice((network[startLine].indexOf(startStation) + 1),(network[stopLine].indexOf(stopStation) + 1));
    resultsInEnglish(journey1);
    console.log("Your journey: " + journey1);

  } else if (legAnalysis() === "upline THEN... downline."){
// GOOD
    var journey1 = stopsArray(startLine, false).slice(startIndex + 1, unionIndex(startLine) + 1);
    var journey2 = stopsArray(stopLine, true).slice(unionIndex(stopLine) + 1, network[stopLine].indexOf(stopStation) + 1);
    resultsInEnglish(journey1 + journey2);
    console.log("Your journey: " + journey1 + " [TRANSFER] " + journey2);
// GOOD
  } else if (legAnalysis() === "upline THEN... upline."){
    var journey1 = stopsArray(startLine, false).slice(startIndex + 1, unionIndex(startLine) + 1);
    var journey2 = stopsArray(stopLine, false).slice(unionIndex(stopLine) + 1, stopIndex + 1);
    resultsInEnglish(journey1 + journey2);
    console.log("Your journey: " + journey1 + " [TRANSFER] " + journey2);  
// GOOD
  } else if (legAnalysis() === "downline THEN... upline."){
    var journey1 = stopsArray(startLine, true).slice(network[startLine].indexOf(startStation) + 1, unionIndex[startLine] + 1);
    var journey2 = stopsArray(stopLine, false).slice(unionIndex(stopLine) + 1, stopIndex + 1);
    resultsInEnglish(journey1 + journey2);
    console.log("Your journey: " + journey1.reverse() + " [TRANSFER] " + journey2);  
// GOOD
  } else if (legAnalysis() === "downline THEN... downline."){
    var journey1 = stopsArray(startLine, true).slice(stopsArray(startLine, false).indexOf(startStation) + 1, unionIndex(startLine) + 1);
    var journey2 = stopsArray(stopLine, false).slice(unionIndex(stopLine) + 1, stopsArray(stopLine, false).indexOf(stopStation) + 1);
    resultsInEnglish(journey1 + journey2);
    console.log("Your journey: " + journey1 + " [TRANSFER] " + journey2);  
  } else {
    console.log("Invalid.")
  };
};

// ALL THINGS START POSITION
var startLineInput = getInput("Type in start line.", "6, " + "L or " + "N");
var startLine = transformLine(startLineInput);
var startStation = getInput("What is your start station?", network[startLine]);
var startIndex = getIndex(startLine, startStation);

// ALL THINGS STOP POSITION
var stopLineInput = getInput("Type in stop line.", "6, " + "L or " + "N");
var stopLine = transformLine(stopLineInput);
var stopStation = getInput("What is your stop station?", network[stopLine]);
var stopIndex = getIndex(stopLine, stopStation);

// RESULTS IN CONSOLE
console.log("Start Station: " + startStation + " on Line " + startLineInput);
console.log("Stop Station: " + stopStation + " on Line " + stopLineInput);

getResults();