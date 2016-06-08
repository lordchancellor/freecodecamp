/*
Check if the predicate (second argument) is truthy on all elements of a
collection (first argument).

Remember, you can access object properties through either dot notation
or [] notation.
*/

function truthCheck(collection, pre) {
    for (var i = 0; i < collection.length; i++) {
        var obj = collection[i];

        if (!obj.hasOwnProperty(pre)) {
            return false;
        }

        for (var key in obj) {
            if (key === pre && !obj[key]) {
                return false;
            }
        }
    }
    return true;
}
