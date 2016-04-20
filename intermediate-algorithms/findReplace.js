/*
Perform a search and replace on the sentence using the arguments provided and return the 
new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if 
you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1, after.length);
    }
    else {
        after = after.charAt(0).toLowerCase() + after.slice(1, after.length);
    }

    return str.replace(before, after);
}

console.log(myReplace("His name is Tom", "Tom", "john"));