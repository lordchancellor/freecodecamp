/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

//String.fromCharCode(65, 66, 67);  // "ABC"
//String.charCodeAt();

function rot13(str) { // LBH QVQ VG!
    var output = "";
    var regExLow = /[a-mA-M]/g;
    var regExHigh = /[n-zN-Z]/g;
    
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i).match(regExLow)) {
            output = output.concat(String.fromCharCode(str.charCodeAt(i) + 13));
        }
        else if (str.charAt(i).match(regExHigh)) {
            output = output.concat(String.fromCharCode(str.charCodeAt(i) - 13));
        }
        else {
            output = output.concat(str.charAt(i));
        }
    }
    //console.log(output);
    return output;
}

rot13("Serr Pbqr Pnzc");