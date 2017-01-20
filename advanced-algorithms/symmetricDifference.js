/*
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) 
of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" 
of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). 
For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with 
elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
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

function removeDuplicates(arr) {
	var reducedArr = [];

	for (var i = 0; i < arr.length; i++) {
		if (reducedArr.indexOf(arr[i]) === -1) {
			reducedArr.push(arr[i]);
		}
	}

	return reducedArr;
}

function compareTwo(arr1, arr2) {
	var arrFinal = [];

	for (var i = 0; i < arr1.length; i++) {
		if (arr2.indexOf(arr1[i]) === -1) {
			arrFinal.push(arr1[i]);
		}
	}

	for (var j = 0; j < arr2.length; j++) {
		if (arr1.indexOf(arr2[j]) === -1) {
			arrFinal.push(arr2[j]);
		}
	}

	return arrFinal.sort(compareNumbers);
}

function sym() {
	var args = Array.prototype.slice.call(arguments);

	//Strip out any duplicates
	for (var i = 0; i < args.length; i++) {
		args[i] = removeDuplicates(args[i]);
	}

	if (args.length < 2) {
		return args[0].sort(compareNumbers);
	}
	else if (args.length === 2) {
		return compareTwo(args[0], args[1]).sort(compareNumbers);
	}
	else {
		var finalArr = compareTwo(args[0], args[1]);

		for (var i = 1; i < args.length-1; i++) {
			finalArr = compareTwo(finalArr, args[i + 1]);
		}

		return finalArr.sort(compareNumbers);
	}
}

console.log("Expecting 3 elements");
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));