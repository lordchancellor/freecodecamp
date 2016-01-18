function slasher(arr, howMany) {
    for (var i = 0; i < howMany; i++) {
        arr.shift();
    }
    
    return arr;
}