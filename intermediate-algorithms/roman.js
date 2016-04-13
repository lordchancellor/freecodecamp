/*
Convert the given number into a roman numeral.
*/

//SPLITS A NUMBER INTO AN ARRAY OF INDIVIDUAL NUMBERS
function splitNumber(num) {
    var arr = [];

    num = num.toString();

    for (var i = 0; i < num.length; i++) {
        arr.push(Number(num.charAt(i)));
    }

    return arr;
}

//RETURN A STRING OF ROMAN NUMERALS, GIVEN THE APPROPRIATE VALUES OF ONE, FIVE AND TEN
function applyNumerals(num, one, five, ten) {
    var numeral = "";
    if (num > 0 && num < 4) {
        for (var i = 0; i < num; i++) {
            numeral += one;
        }
    }
    else if (num === 4) {
        numeral = numeral + one + five;
    }
    else if (num === 5) {
        numeral += five;
    }
    else if (num > 5 && num < 9) {
        numeral += five;
        for (var i = 5; i < num; i++) {
            numeral += one;
        }
    }
    else if (num === 9) {
        numeral = numeral + one + ten;
    }

    return numeral;
}

//A SERIES OF FUNCTIONS TO CONVERT UNITS, TENS, HUNDREDS AND THOUSANDS INTO ROMAN NUMERALS
function units(num) {
    return applyNumerals(num, "I", "V", "X");
}

function tens(num) {
    return applyNumerals(num, "X", "L", "C");
}

function hundreds(num) {
    return applyNumerals(num, "C", "D", "M");
}

function thousands(num) {
    var ems = "";
    for (var i = 0; i < num; i++) {
        ems += "M";
    }
    return ems;
}

//CONVERT A GIVEN ARRAY OF NUMBERS INTO A ROMAN NUMERAL
function toNumerals(arr) {
    var roman = "";

    switch (arr.length) {
        case 4:
            roman += thousands(arr[0]);
            roman += hundreds(arr[1]);
            roman += tens(arr[2]);
            roman += units(arr[3]);
            break;
        case 3:
            roman += hundreds(arr[0]);
            roman += tens(arr[1]);
            roman += units(arr[2]);
            break;
        case 2:
            roman += tens(arr[0]);
            roman += units(arr[1]);
            break;
        case 1:
            roman += units(arr[0]);
            break;
        default:
            console.log("Invalvid number");
    }

    return roman;
}

function convertToRoman(num) {
    return toNumerals(splitNumber(num));c
}
