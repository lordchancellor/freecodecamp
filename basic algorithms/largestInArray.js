
function largestOfFour(arr) {
    var singleVal = [];
    
    for (var i = 0; i < arr.length; i++) {
        singleVal[i] = arr[i].reduce(function(previous, current) {
           return previous > current ? previous:current; 
        });
    }
    
    return singleVal;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/*
function bigPicker(arr) {
    var singleVal;
    
    singleVal = arr.reduce(function(previous, current) {
       return previous > current ? previous:current; 
    });
    
    return singleVal;
}

var array = [1, 4, 6, 10];

console.log(bigPicker(array));
*/