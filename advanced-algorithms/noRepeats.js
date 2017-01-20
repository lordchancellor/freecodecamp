/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but 
only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

// The permutationArray uses the module pattern to create a secure object
var permutationArray = function() {
	var permutationArray = [];
	var noRepeats = 0;
	var regex = /^((\w)(?!\2))+$/i;

	return {
		'addPermutation': function(arr) {
			var str = '';
			
			for (var i = 0; i < arr.length; i+=1) {
				str += arr[i];
			}

			permutationArray.push(str);

			// Check now for repeated characters
			if (regex.test(str)) {
				noRepeats += 1;
			}
		},
		'getPermutations': function() {
			return permutationArray;
		},
		'getNoRepeats': function() {
			return noRepeats;
		}
	};
};

var swap = function(arr, a, b) {
	var placeholder = arr[a];
	arr[a] = arr[b];
	arr[b] = placeholder;

	return arr;
};

// The permute function is based upon Heap's Algorithm for finding permutations
var permute = function(n, arr, perms) {
	if (n === 1) {
		perms.addPermutation(arr);
	}
	else {
		for (var i = 0; i < n-1; i+=1) {
			permute(n-1, arr, perms);

			if (n % 2 === 0) {
				arr = swap(arr, i, n-1);
			}
			else {
				arr = swap(arr, 0, n-1);
			}
		}

		permute(n-1, arr, perms);
	} 
};

var permAlone = function(str) {
	var permutations = permutationArray();
	var chars = str.split('');

	permute(str.length, chars, permutations);

	return permutations.getNoRepeats();
};

console.log(permAlone('aab'));