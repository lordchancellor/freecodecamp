/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
    var words = str.toLowerCase().split(" ");
    var characters = [];
    
    for (var i = 0; i < words.length; i++) {
        characters = words[i].split("");
        
        characters[0] = characters[0].toUpperCase();
        
        words[i] = characters.join("");
    }
    
    return words.join(" ");
}

titleCase("Ladies and Gentlemen, I present to you, the magic of Zatanna!");