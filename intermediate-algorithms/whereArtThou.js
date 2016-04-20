/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property 
and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection 
if it is to be included in the returned array.

For example, if the first argument is: 
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument),
 because it contains the property and its value, that was passed on as the second argument.
*/

function whereAreYou(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line

    for (var i = 0; i < collection.length; i++) {
        var count = 0;
        for (var key in source) {
            if (collection[i].hasOwnProperty(key) && collection[i][key] === source[key]) {
                 count++;
            }
        }
 
        if (count === Object.keys(source).length) {
            arr.push(collection[i]);
        }
    }

    // Only change code above this line
    return arr;
}

var arr1 = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }];
var obj1 = { last: "Capulet" };

var arr2 = [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }];
var obj2 = { "a": 1 };

var arr3 = [{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }];
var obj3 = { "a": 1, "b": 2 };

var arr4 = [{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }];
var obj4 = { "a": 1, "c": 2 };


var jorge = whereAreYou(arr4, obj4);
console.log(jorge);