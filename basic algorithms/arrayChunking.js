function chunk(arr, size) {
    var spacer = 0;
    var chunky = [];
    
    for (var i = 0; i < arr.length; i += size) {
        chunky.push(arr.slice(spacer, spacer + size));
        spacer += size;
    }
    
    return chunky;
}