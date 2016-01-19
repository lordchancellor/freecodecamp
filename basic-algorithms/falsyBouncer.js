//The below code was an earlier attempt that I was struggling to get to work
//Well actually, it worked fine, just not for NaN.
//Eventually I went a totally different route, but I wanted to keep this anyway.
/*
function nanChecker(val) {
    return typeof val === "number" && isNaN(val);
}

function isFalsy(val) {
    return val !== "" && val !== false && val !== null && val !== 0 && val !== undefined;
}


function bouncer(arr) {
    console.log(arr.filter(isFalsy));
}

bouncer([7, "ate", "", false, 9, NaN]);
*/

function bouncer(arr) {
    return arr.filter(Boolean);
}