function fourNumberSum(array, targetSum) {
	let hash = {};
	let quads = [];
	
	for(let i = 0; i < array.length; i++) {
		for(let j = i+1;j<array.length;j++) {
			let complement = targetSum - (array[i] + array[j]);
				if(complement in hash) {
					for(let k = 0; k < hash[complement].length;k++) {
						let temp = hash[complement][k].concat([array[i], array[j]]);
						quads.push(temp);
					}
				}
		}
		for(let k = 0; k < i; k++) {
			let twoSum = array[i] + array[k];
				if(!(twoSum in hash)) hash[twoSum] = [];
				hash[twoSum].push([array[i], array[k]]);
		}
	}
	
	return quads;
	
}
