/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by 
all numbers between 1 and 3.
*/

function compareNumbers(a, b) {
	if (a < b) {
		return -1;
	}
	else if (a > b) {
		return 1;
	}
	else {
		return 0;
	}
}

function isPrime(n) {
	for (var i = n-1; i > 1; i--) {
		if (n % i === 0) {
			return false;
		}
	}
	
	return true;
}

function findPrimeFactors(num) {
	var factors = [];
	
	do {
		for (var i = 2; i <= num; i++) {
			if (isPrime(i) && num % i === 0) {
				factors.push(i);
				num = num / i;
				continue;
			}
		}
	}
	while (!isPrime(num));

	factors.push(num);
	return factors.sort(compareNumbers);
}

function getPower(arr, el) {
	var power = arr.filter(function(n) {
		return n === el;
	});
	
	return power.length;
}

function maxValue(arr1, arr2) {
	var l1 = Math.max.apply(Math, arr1);
	var l2 = Math.max.apply(Math, arr2);
	
	if (l1 >= l2) {
		return l1;
	}
	else {
		return l2;
	}
}

function minValue(arr1, arr2) {
	var m1 = Math.min.apply(Math, arr1);
	var m2 = Math.min.apply(Math, arr2);
	
	if (m1 <= m2) {
		return m1;
	}
	else {
		return m2;
	}
}

function lcm(arr1, arr2) {
	var lcm = [];
	var min = minValue(arr1, arr2);
	var max = maxValue(arr1, arr2);
	var val = min;
	
	do {
		//Present in both arrays
		if (arr1.indexOf(val) !== -1 && arr2.indexOf(val) !== -1) {
			if (getPower(arr1, val) >= getPower(arr2, val)) {
				lcm.push(Math.pow(val, getPower(arr1, val)));
			}
			else {
				lcm.push(Math.pow(val, getPower(arr2, val)));
			}
		}
		
		//Present in arr1 only
		else if (arr1.indexOf(val) !== -1 && arr2.indexOf(val) === -1) {
			lcm.push(Math.pow(val, getPower(arr1, val)));
		}
		
		//Present in arr2 only
		else if (arr1.indexOf(val) === -1 && arr2.indexOf(val) !== -1) {
			lcm.push(Math.pow(val, getPower(arr2, val)));
		}
		
		val++;
	}
	while (val <= max);
	
	return lcm.reduce(function(a, b) {
		return a * b;
	});
}

function divideAcrossRange(arr, lcm) {
	var multiplier = 0;
	var success = true;

	do {
		success = true;
		multiplier++;
		for (var i = arr[0]; i <= arr[1]; i++) {
			if (lcm * multiplier % i !== 0) {
				success = false;
				break;
			}
		}
	}
	while (!success);
	
	return lcm * multiplier;
}

function smallestCommons(arr) {
	var productOfPrimes = [];
	for (var i = 0; i < arr.length; i++) {
		productOfPrimes.push(findPrimeFactors(arr[i]));
	}
	
	return divideAcrossRange(arr.sort(compareNumbers), lcm(productOfPrimes[0], productOfPrimes[1]));
}

console.log(smallestCommons([1, 13]));