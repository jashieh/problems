function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a,b) => a-b);
	arrayTwo.sort((a,b) => a-b);
	
	let i = 0;
	let j = 0;
	let diff = Infinity;
	let ans = [0, 0];
	
	while(i < arrayOne.length && j < arrayTwo.length) {
		
		while(arrayOne[i] <= arrayTwo[j]) {
			let temp = Math.abs(arrayTwo[j] - arrayOne[i]);
			if(temp < diff) {
				diff = temp;
				ans = [arrayOne[i], arrayTwo[j]];
				
			}
			i++;
		}
				
		while(arrayTwo[j] <= arrayOne[i]) {
			let temp2 = Math.abs(arrayOne[i] - arrayTwo[j]);
			if(temp2 < diff) {
				diff = temp2;
				ans = [arrayOne[i], arrayTwo[j]];
			}
			j++;
		}
	}
	
	return ans;
}


// Do not edit the line below.
exports.smallestDifference = smallestDifference;
