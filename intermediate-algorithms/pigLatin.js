/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of 
the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.*/

function isVowel(letter) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        return true;
    }
    else {
        return false;
    }
}

function getCluster(str) {
    var count = 0;

    while (count < str.length) {
        if (isVowel(str.charAt(count).toLowerCase())) {
            break;
        }
        count++;
    }
    
    return count;    
}

function translatePigLatin(str) {
    if (isVowel(str.charAt(0).toLowerCase())) {
        str += "way";
    }
    else {
        var cluster = str.slice(0, getCluster(str));
        str = str.slice(getCluster(str), str.length);
        str += cluster;
        str += "ay";
    }

    return str;
}

console.log(translatePigLatin("glove"));