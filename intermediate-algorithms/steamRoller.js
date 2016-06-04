/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  var flat = [];
  
  for (var i = 0; i < arr.length; i++) {
	  if (Array.isArray(arr[i])) {
		  var deep = steamrollArray(arr[i]);
		  
		  for (var j = 0; j < deep.length; j++) {
			  flat.push(deep[j]);
		  }
	  }
	  else {
		  flat.push(arr[i]);
	  }
  }

  return flat;
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));