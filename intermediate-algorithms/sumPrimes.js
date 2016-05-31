/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.
*/

function isPrime(n) {
	console.log("Checking " + n);
	
	for (var i = n-1; i > 1; i--) {
		console.log(n + " % " + i + " = " + (n%i));
		
		if (n % i === 0) {
			return false;
		}
	}
	
	return true;
}

function sumPrimes(num) {
	var sumOfPrimes = 0;

	for (var i = num; i > 1; i--) {
		if (isPrime(i)) {
			console.log(i + " is prime!");
			sumOfPrimes += i;
			console.log("sumOfPrimes current total: " + sumOfPrimes);
		}
	}

	return sumOfPrimes;
}

sumPrimes(977);