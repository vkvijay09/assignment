const numInStr = (arr) => {
	let numString = [];

	for(let i=0;i<arr.length;i++){
		var check=false;
		for(let j=0;j<arr[i].length;j++){
			if(arr[i][j] >= '0' && arr[i][j] <= '9')
				check = true;
		}
		if(check)
			numString.push(arr[i]);
	}
	return numString;
};

console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));