/*
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. 
Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out 
the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6
*/

const test1 = [1, 4, 2, 3, 0, 5];
const arg1 = 7;
const test2 = [1, 3, 2, 4];
const arg2 = 4;
const test3 = [1, 1, 1];
const arg3 = 2;
const test4 = [0, 0, 0, 0, 1, 1];
const arg4 = 1;
const test5 = [];
const arg5 = 100;

const pairwise = function pairwise(arr, arg) {
	let indices = [];

	for (const [idx1, first] of arr.entries()) {
		for (const [idx2, second] of arr.entries()) {
			if (first + second === arg && idx1 !== idx2 && !(indices.includes(idx1) || indices.includes(idx2))) {
				indices = [...indices, idx1, idx2];
			}
		}
	}

	return indices.reduce((prev, curr) => prev + curr, 0);
};

console.log(pairwise(test1, arg1));
console.log(pairwise(test2, arg2));
console.log(pairwise(test3, arg3));
console.log(pairwise(test4, arg4));
console.log(pairwise(test5, arg5));