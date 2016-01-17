function palindrome(str) {
    // Good luck!
    str = str.toLowerCase();
    console.log(str);
    
    var regEx = /[^a-z0-9]/g;
    str = str.replace(regEx, "");
    console.log(str);
    
    var reverse = str.split("").reverse().join("");

    if (reverse === str) {
        return true;
    }
    return false;
}