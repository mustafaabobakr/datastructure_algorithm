const nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selection(arr) {
	const length = arr.length;
	for (let i = 0; i < length; i++) {
    // set current index as min
    let minIndex = i;
    let temp = arr[i];
		for (let j = i+1; j < length; j++) {
			if (arr[j] < arr[minIndex]) {
				// update minIndex if current is lower than what we had prev.
				minIndex = j;
			}
		}
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
	}
	return arr;
}
console.log("selection(nums):", selection(nums));
