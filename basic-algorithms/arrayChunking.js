/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
*/

function chunk(arr, size) {
    var spacer = 0;
    var chunky = [];
    
    for (var i = 0; i < arr.length; i += size) {
        chunky.push(arr.slice(spacer, spacer + size));
        spacer += size;
    }
    
    return chunky;
}

chunk(["a", "b", "c", "d", "e", "f", "g", "h"], 2);