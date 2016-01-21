/*
Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);