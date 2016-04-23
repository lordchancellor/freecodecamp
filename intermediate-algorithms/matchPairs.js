/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

var mainArray = [];

function matchPairs(letter) {
   var arr = [];
   arr.push(letter);

   switch(letter) {
       case "A":
           arr.push("T");
           break;
       case "T":
           arr.push("A");
           break;
       case "C":
           arr.push("G");
           break;
       case "G":
           arr.push("C");
           break;
       default:
           console.log("Not a valid DNA pairing");
           break;
   }
   return arr;
}

function pairElement(str) {
  var arr = str.split('');
  var pairs = [];

  for (var i = 0; i < arr.length; i++) {
    pairs.push(matchPairs(arr[i]));
  }

  return pairs;
}

pairElement("GCG");
