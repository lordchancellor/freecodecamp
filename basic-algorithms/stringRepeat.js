/*
Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.
*/

function repeat(str, num) {
    var output = "";
    
    if (num > 0) {
        for (var i = num; i > 0; i--) {
            output = output.concat(str);
        }
    }
    
    return output;
}

repeat("abc", 3);