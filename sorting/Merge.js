const nums = [6, 5, 3, 1, 8, 7, 2, 4];

// https://stackabuse.com/merge-sort-in-javascript/
function mergeSort(array) {
	// Base case or terminating case
	if (array.length < 2) return array;

	const half = array.length / 2;
	const left = array.splice(0, half);
	return merge(mergeSort(left), mergeSort(array));
}

const mergeSortz = (arr) => {
	
	console.log('arr:', arr);
	if (arr.length <= 1) return arr;
	
	let middle = Math.floor(arr.length / 2);
	// arr.slice .. returns a shallow copy 
	let left = mergeSortz(arr.slice(0, middle));
	console.log('left:', left);
	console.log('arr after left:', arr);
	let right = mergeSortz(arr.slice(middle));

	return merge(left, right);
};

function merge(left, right) {
	let arr = [];
	// Break out of loop if any one of the array gets empty
	while (left.length && right.length) {
		// Pick the smaller among the smallest element of left and right sub arrays
		if (left[0] < right[0]) {
			arr.push(left.shift());
		} else {
			arr.push(right.shift());
		}
	}
	// Concatenating the leftover elements
	// (in case we didn't go through the entire left or right array)
	return [...arr, ...left, ...right];
}

console.log("mergeSort(nums):", mergeSortz(nums));
