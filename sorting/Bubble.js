//
const nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubble(arr) {
	const length = arr.length;
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			const element = arr[j];
			const elementNext = arr[j + 1];
			if (element > elementNext) {
				// swap them
				arr[j] = elementNext;
				arr[j + 1] = element;
				
				// swap by es6
				// [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
}

console.log("bubbleSort(nums):", bubble(nums));
