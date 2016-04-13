/*
We'll pass in an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
    if (arr[0] > arr[1]) {
        return sum(arr[1], arr[0]);
    }
    else {
        return sum(arr[0], arr[1]);
    }
}

function sum(a, b) {
    var sum = 0;

    for (var i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
}

sumAll([1, 4]);
