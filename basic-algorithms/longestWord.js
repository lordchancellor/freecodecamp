function findLongestWord(str) {
    var checker = str.split(" ");
    console.log(checker);
    
    var longestWord = "";
    
    for (var i = 0; i < checker.length; i++) {
        if (checker[i].length > longestWord.length) {
            longestWord = checker[i];
        }
    }
    
    console.log(longestWord);
    console.log(longestWord.length);
}