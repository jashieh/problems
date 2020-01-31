function threeNumberSum(array, targetSum) {
	let out = [];
	
	array.sort(function(a,b) {return a-b});
	
	for(let i = 0; i < array.length - 2;i++) {
		let low = i + 1;
		let high = array.length - 1;
		
		while(low < high) {
			if(array[i] + array[low] + array[high] < targetSum) {
				low++;
			} 
			else if(array[i] + array[low] + array[high] > targetSum) {
				high--;
			}
			else {
				out.push([array[i],array[low], array[high]]);
				low++;
				high--;
			}
		}
	}
	
	return out;
}