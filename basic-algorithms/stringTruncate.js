function truncate(str, num) {
    if (str.length > num) {
        if (num <= 3) {
            str = str.slice(0, num);
        }
        else {
            str = str.slice(0, num-3);
        }
        
        str = str.concat("...");
    }
    
    return str;
}