function subarraySort(array) {
	let range = [-1,-1];
	let smallest = -1;
	let largest = -1;
	
	for(let i = 0; i < array.length; i++) {
		if((i < array.length - 1 && array[i] > array[i+1]) || 
			 (i > 0 && array[i] < array[i-1])) {
			if(smallest === -1 || array[i] < smallest) smallest = array[i];
			if(largest === -1 || array[i] > largest) largest = array[i];	
		}
	}
	
	if(smallest === -1) return [-1,-1];
	
	let start = 0;
	while(smallest >= array[start]) {
		start++;
	}
	let end = array.length - 1;
	
	while(largest <= array[end]) {
		end--;
	}
	
	return [start,end];
	
	return range;
	
}

// Do not edit the line below.
exports.subarraySort = subarraySort;
