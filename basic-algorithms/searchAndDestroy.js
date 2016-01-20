/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function stripItems(arr, arg) {
    console.log("Array: " + arr);
    console.log("Argument: " + arg);
    
    var stripped = arr.filter(function(val) {
        return val !== arg;
    });
                              
    console.log("Stripped Array: " + stripped);
    return stripped;
}

function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
    args.shift(); //The first item in args will be the array, which we are not interested in
    
    for (var i = 0; i < args.length; i++) {
        arr = stripItems(arr, args[i]);
    }
    
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);