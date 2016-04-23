/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.
*/

function combineArrays(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            arr1.push(arr2[i]);
        }
    }

    return arr1;
}

function uniteUnique(arr1, arr2, arr3) {
    for (var i = 0; i < arguments.length-1; i++) {
        arr1 = combineArrays(arguments[0], arguments[i+1]);
    }

    return arr1;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
