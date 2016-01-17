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