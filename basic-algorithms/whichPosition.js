/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, where([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function sortNumber(a, b) {
    return a - b;
}

function where(arr, num) {
    arr = arr.sort(sortNumber);
    console.log("Sorted Array: " + arr);
    
    //First, check to make sure the number isn't larger than anythng else in the array. If it is, job done
    if (num >= arr[arr.length-1]) {
        console.log("It goes at position " + arr.length);
        return arr.length;
    }

    var count = 0;
    
    for (var i = 0; i < arr.length; i++) {
        if (num <= arr[i]) {
            console.log("It goes at position " + count);
            return count;
        }
        else {
            count++;
        }
    }
}

where([2, 5, 10, 82, 56, 42, 9], 15);