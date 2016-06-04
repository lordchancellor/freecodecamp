/*
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a 
Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent 
number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers 
under 4 are 1, 1, and 3.
*/

function oddFibs(n) {
	return n % 2 !== 0;
}

function getFibs(num) {
	var fibs = [1, 1];
	var count = 2;

	do {
		fibs.push(fibs[count-2] + fibs[count-1]);
		count++;
	}
	while ((fibs[count-2] + fibs[count-1]) <= num)
	
	return fibs;
}

function sumFibs(num) {
	if (num < 1) {
		return 0;
	}
	else if (num === 1) {
		return 2;
	}
	else {
		return getFibs(num).filter(oddFibs).reduce(function(a, b) {
			return a + b;
		});
	}
}

console.log(sumFibs(10));