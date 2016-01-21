/*
Return the remaining elements of an array after chopping off n elements from the head.

The head meaning the beginning of the array, or the zeroth index.
*/

function slasher(arr, howMany) {
    for (var i = 0; i < howMany; i++) {
        arr.shift();
    }
    
    return arr;
}

slasher([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);