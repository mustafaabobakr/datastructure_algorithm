const nums = [6, 5, 3, 1, 8, 7, 2, 4];


// https://stackabuse.com/insertion-sort-in-javascript/

function insertion(inputArr) {
	let n = inputArr.length;
	// The iteration starts at the second element i=1. 
	// We consider the first element sorted by default.
	for (let i = 1; i < n; i++) {
		// Choosing the first element in our unsorted subarray
		let current = inputArr[i];
		// The last element of our sorted subarray
		let j = i - 1;
		// Through a while loop, we go through the sorted array and shift elements to the right, opening up a space for the current element to be inserted.
		// Once we find the proper place for it, the current element is inserted into the newly-opened slot. This process is repeated for each iteration until the array is sorted.
		while (j > -1 && current < inputArr[j]) {
			inputArr[j + 1] = inputArr[j];
			j--;
		}
		inputArr[j + 1] = current;
	}
	return inputArr;
}

console.log("insertion(nums):", insertion(Array.from(nums)));
