var chain = []; //This array will hold the chained inputs from the calculator
var output;     //This variable holds any ongoing output to be displayed on the screen

//clearDisplay will set the screen display to 0
function clearDisplay() {
    output = 0;
}

//Execute the current chain of calculations, assuming that the chain has a valid end
//(i.e. it ends in a number!)
function executeChain() {
    //Check that the last item in the chain is a number
    if (isNaN(chain[chain.length-1])) {
        output = "Error";
        console.log(output);
        chain = [];
        return;
    }

}

//Mathematical Operator Parser - accepts a string and a pair of numbers and performs the appropriate operation
function mathematise(op, x, y) {
    switch(op) {
        case "+":
            return x + y;
            break;
        case "-":
            return x - y;
            break;
        case "*":
            return x * y;
            break;
        case "/":
            return x / y;
            break;
        default:
            return "Error";
            break;
    }
}
