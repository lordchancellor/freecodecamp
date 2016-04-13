/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
    var solo = [];

    //Go through everything in the first array and see if it is in the second array
    for (var i = 0; i < arr1.length; i++) {
        //Go through arr1. If the current element is not in arr2, we add it to the list
        if (arr2.indexOf(arr1[i]) === -1) {
            solo.push(arr1[i]);
        }
    }

    //Go through everything in the second array and see if it is in the first, or already accounted for
    for (var j = 0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) === -1 && solo.indexOf(arr2[j]) === -1) {
            solo.push(arr2[j]);
        }
    }

    return solo;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
