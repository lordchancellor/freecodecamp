/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
    var checker = str.split(" ");
    
    var longestWord = "";
    
    for (var i = 0; i < checker.length; i++) {
        if (checker[i].length > longestWord.length) {
            longestWord = checker[i];
        }
    }
    
    console.log(longestWord + " - " + longestWord.length);
    return longestWord.length;
}

findLongestWord("Once upon a time there was a man named Jorge.");