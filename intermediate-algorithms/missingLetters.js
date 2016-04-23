/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    var firstLetter = str.charCodeAt(0);

    for (var i = 0, j = firstLetter; i < str.length; i++) {
        if (str.indexOf(String.fromCharCode(j)) === -1) {
            return String.fromCharCode(j);
        }
        j++;
    }

    return undefined;
}

console.log(fearNotLetter("abce"));
